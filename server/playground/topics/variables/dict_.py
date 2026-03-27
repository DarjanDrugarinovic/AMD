def dict_():
    """
    dict — Python's key-value map. Equivalent to a plain object or Map in TS.

    TS:  const user: Record<string, any> = { name: "Alice", age: 30 }
    PY:  user = { "name": "Alice", "age": 30 }

    Keys are usually strings but can be any hashable type.
    """
    user = {"name": "Alice", "age": 30}

    # Access
    print(user["name"])             # Alice  (KeyError if missing)
    print(user.get("age"))          # 30
    print(user.get("email", "n/a")) # n/a  — safe access with default

    # Mutate
    user["email"] = "alice@example.com"
    del user["age"]

    # Iteration
    for key in user:                # iterates keys (like Object.keys)
        print(key, "→", user[key])

    for key, value in user.items(): # like Object.entries
        print(key, "→", value)

    print(list(user.keys()))        # ["name", "email"]
    print(list(user.values()))      # ["Alice", "alice@example.com"]

    # Check membership
    print("name" in user)           # True  (checks keys)

    # Merge  (TS: { ...a, ...b })
    defaults = {"role": "viewer", "active": True}
    merged = {**defaults, **user}   # spread equivalent
    print(merged)
