def basic_types():
    """
    Python has no type annotations by default (but supports them optionally).
    No `const` / `let` — just assign.

    TS:  const name: string = "Alice"
    PY:  name = "Alice"
    """
    name    = "Alice"       # str
    age     = 30            # int
    height  = 5.9           # float
    active  = True          # bool  (capital T/F, unlike JS true/false)
    nothing = None          # null equivalent

    print(name, age, height, active, nothing)
    print(type(name))       # <class 'str'>  — like typeof
