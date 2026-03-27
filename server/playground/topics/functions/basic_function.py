def basic_function():
    """
    Defining and calling a simple function.

    TS:  function foo(a: number): number { return a }
    PY:  def foo(a): return a   — no types required, no braces, colon + indent
    """
    def foo(a):
        return a

    print(foo(42))
