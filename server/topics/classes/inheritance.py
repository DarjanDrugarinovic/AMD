def inheritance():
    """
    Inheritance — class Child(Parent). super() works the same as in TS.

    TS:  class Dog extends Animal { constructor(...) { super(...) } }
    PY:  class Dog(Animal):
              def __init__(self, ...): super().__init__(...)
    """
    class Animal:
        def __init__(self, name: str):
            self.name = name

        def speak(self):
            return f"{self.name} makes a sound"

        def __repr__(self):
            return f"{self.__class__.__name__}({self.name!r})"

    class Dog(Animal):
        def speak(self):                        # override
            return f"{self.name} says: Woof!"

    class Cat(Animal):
        def __init__(self, name: str, indoor: bool):
            super().__init__(name)              # call parent __init__
            self.indoor = indoor

        def speak(self):
            return f"{self.name} says: Meow!"

    animals = [Dog("Rex"), Cat("Whiskers", indoor=True), Animal("???")]

    for animal in animals:
        print(animal.speak())

    # isinstance — like instanceof in TS
    d = Dog("Buddy")
    print(isinstance(d, Dog))       # True
    print(isinstance(d, Animal))    # True — works up the chain

    # Check class name
    print(type(d).__name__)         # Dog
    print(repr(d))                  # Dog('Buddy')  — uses __repr__
