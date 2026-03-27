from dataclasses import dataclass

def dataclass_():
    """
    dataclass auto-generates __init__, __repr__ etc. from field declarations.
    Closest Python equivalent to a TS type/interface for object shapes.

    TS:  type User = { name: string; age: number }
    PY:  @dataclass
         class User:
             name: str
             age: int
    """
    @dataclass
    class User:
        name: str
        age: int

    u = User(name="Alice", age=30)
    print(u)                    # User(name='Alice', age=30)
    print(u.name)               # Alice
