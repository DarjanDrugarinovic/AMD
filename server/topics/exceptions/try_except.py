def try_except():
    """
    Exception handling — try/except/else/finally. No `catch` keyword.

    TS:  try { } catch (e) { } finally { }
    PY:  try: / except ExceptionType as e: / finally:

    `else` block runs only when NO exception was raised — unique to Python.
    """
    # Basic
    try:
        result = 10 / 0
    except ZeroDivisionError as e:
        print("Caught:", e)         # division by zero

    # Multiple except blocks (like multiple catch types in TS)
    def parse(value):
        try:
            return int(value)
        except ValueError:
            print(f"Cannot convert {value!r} to int")
        except TypeError:
            print("Expected a string or number")

    parse("abc")
    parse(None)

    # else — runs only if no exception
    try:
        x = int("42")
    except ValueError:
        print("bad input")
    else:
        print("Parsed OK:", x)      # runs because no exception

    # finally — always runs (cleanup, like defer in Go)
    try:
        risky = int("bad")
    except ValueError as e:
        print("Error:", e)
    finally:
        print("always runs")        # cleanup code goes here

    # Raise your own exception
    def divide(a, b):
        if b == 0:
            raise ValueError("b must not be zero")
        return a / b

    try:
        divide(5, 0)
    except ValueError as e:
        print("Raised:", e)

    # Common built-in exceptions to know:
    # KeyError       — dict key not found
    # IndexError     — list index out of range
    # TypeError      — wrong type passed
    # ValueError     — right type, bad value
    # AttributeError — object has no such attribute
    # FileNotFoundError — file doesn't exist
