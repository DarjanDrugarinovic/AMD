# DevOps Interview Prep Plan

## Block 1 — GitHub Actions fundamentals (1.5h)

**The mental model:**
```
workflow → triggered by event → runs jobs → each job runs steps on a runner
```

**Key syntax:**
```yaml
on:
  push:
    branches: [main]
  pull_request:
  workflow_dispatch:       # manual trigger
  workflow_call:           # called by another workflow (reusable)

jobs:
  build:
    runs-on: ubuntu-latest
    env:
      NODE_ENV: production
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.12'
      - run: pip install -r requirements.txt
      - run: pytest
```

**Things that trip people up:**
- `uses` = pre-built action, `run` = shell command
- `env` at job level vs step level vs `${{ secrets.X }}`
- Steps share the same filesystem, jobs do NOT (use `artifacts` to pass files between jobs)

---

## Block 2 — CI for Django (1h)

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_DB: testdb
          POSTGRES_USER: user
          POSTGRES_PASSWORD: password
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.12'
          cache: 'pip'
      - run: pip install -r requirements.txt
      - run: python manage.py migrate
        env:
          DATABASE_URL: postgres://user:password@localhost:5432/testdb
      - run: pytest --cov
```

**Know:** service containers run on the same network as the job, accessed via `localhost`.

---

## Block 3 — Multi-environment deployment (2h)

**The pattern: build once, promote artifact**
```
PR → build & test
merge to main → deploy to staging (auto)
tag/manual → deploy to prod (with approval gate)
```

**Environment protection rules:**
- Settings → Environments → create `staging` and `production`
- `production` gets: required reviewers, deployment branch rules
- Each environment has its own secrets

```yaml
jobs:
  deploy-staging:
    environment: staging
    runs-on: ubuntu-latest
    steps:
      - run: echo ${{ secrets.DB_URL }}

  deploy-prod:
    environment: production       # pauses for approval if configured
    needs: deploy-staging
    runs-on: ubuntu-latest
```

**Deployment strategies:**

### 1. SSH to VPS
```yaml
- uses: appleboy/ssh-action@v1
  with:
    host: ${{ secrets.SERVER_IP }}
    username: deploy
    key: ${{ secrets.SSH_KEY }}
    script: |
      cd /app
      git pull
      pip install -r requirements.txt
      python manage.py migrate
      sudo systemctl restart gunicorn
```

### 2. Docker image promotion (build once, deploy same image to staging + prod)
```yaml
# In CI:
- run: docker build -t myapp:${{ github.sha }} .
- run: docker push registry/myapp:${{ github.sha }}

# In deploy-staging:
- run: docker pull registry/myapp:${{ github.sha }}

# In deploy-prod (same image, no rebuild):
- run: docker pull registry/myapp:${{ github.sha }}
```

### 3. Reusable workflows (deployment between different projects)
```yaml
# .github/workflows/deploy.yml — defined once, used by many repos
on:
  workflow_call:
    inputs:
      environment:
        required: true
        type: string
    secrets:
      deploy_key:
        required: true

# Caller in another project:
jobs:
  deploy:
    uses: org/shared-workflows/.github/workflows/deploy.yml@main
    with:
      environment: production
    secrets:
      deploy_key: ${{ secrets.DEPLOY_KEY }}
```

---

## Block 4 — Interview Q&A (1h)

**Q: How do you deploy to staging but not prod automatically?**
> Use environment protection on `production` with required reviewers. `deploy-prod` job has `environment: production` and `needs: deploy-staging`. It pauses until approved.

**Q: How do you avoid rebuilding the Docker image for prod if it already passed staging?**
> Tag the image with `github.sha` at build time. Both staging and prod deploy jobs reference the same tag — pull, don't build.

**Q: How do you share a workflow across multiple repos/projects?**
> Reusable workflows with `workflow_call` trigger. Caller repos reference it via `uses: org/repo/.github/workflows/file.yml@main`. Inputs and secrets are passed explicitly.

**Q: How do you roll back?**
> Redeploy the previous image tag (if Docker), or re-run the previous successful workflow run, or git revert + push.

**Q: Secrets vs env vars — when to use which?**
> Secrets for sensitive values (keys, passwords) — masked in logs, not passed to forked PRs by default. Env vars for non-sensitive config.

**Q: Composite action vs reusable workflow?**
> Composite action = reusable steps within a job (like a function). Reusable workflow = entire job(s) called from another workflow. Composite actions can't use `services`, reusable workflows can.
