def type_hints():
    """
    Class with optional type annotations — Python's equivalent of TS interfaces.

    TS:  interface Foo { bar: string }
    PY:  class Foo: bar: str   — hints are optional and NOT enforced at runtime
    """
    class Foo:
        bar: str

        def __init__(self, bar: str):
            self.bar = bar

    f = Foo("hello")
    print(f.bar)
    print(type(f.bar))          # <class 'str'>
