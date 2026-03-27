def default_args():
    """
    Functions with default parameter values.

    TS:  function greet(name: string = "World"): string { return `Hi ${name}` }
    PY:  def greet(name="World"): return f"Hi {name}"
    """
    def greet(name="World"):
        return f"Hi {name}"     # f-string = template literal

    print(greet())              # Hi World
    print(greet("Alice"))       # Hi Alice
