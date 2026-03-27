def args_kwargs():
    """
    *args — variadic positional args (like ...args in TS)
    **kwargs — variadic keyword args (no direct TS equivalent)

    TS:  function foo(...args: number[])
    PY:  def foo(*args):

    TS:  function foo(opts: { [key: string]: any })
    PY:  def foo(**kwargs):
    """
    # *args — collects extra positional args as a tuple
    def add(*args):
        return sum(args)

    print(add(1, 2))                # 3
    print(add(1, 2, 3, 4))         # 10

    # **kwargs — collects extra keyword args as a dict
    def describe(**kwargs):
        for key, value in kwargs.items():
            print(f"{key} = {value}")

    describe(name="Alice", age=30, role="admin")

    # Mix: regular, *args, **kwargs
    def mixed(required, *args, **kwargs):
        print("required:", required)
        print("args:", args)
        print("kwargs:", kwargs)

    mixed("hello", 1, 2, 3, x=10, y=20)

    # Unpacking a list/dict into a function call (spread in TS)
    nums = [1, 2, 3]
    print(add(*nums))               # same as add(1, 2, 3)

    config = {"name": "Alice", "age": 30}
    describe(**config)              # same as describe(name="Alice", age=30)
