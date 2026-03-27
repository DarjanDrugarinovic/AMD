def basic_class():
    """
    Basic class with constructor and method.

    TS:  class Dog { constructor(public name: string) {} bark() { ... } }
    PY:  class Dog:
              def __init__(self, name): self.name = name
              def bark(self): ...

    `self` = `this` in TypeScript.
    `__init__` = constructor.
    """
    class Dog:
        def __init__(self, name):
            self.name = name

        def bark(self):
            print(f"{self.name} says: Woof!")

    d = Dog("Rex")
    d.bark()                # Rex says: Woof!
