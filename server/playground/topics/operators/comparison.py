def comparison():
    """
    Python has no === — == always checks value AND type (no type coercion).

    TS:  x === y   (strict)
    TS:  x == y    (loose, coerces types)
    PY:  x == y    (always strict, like TS ===)
    """
    print(1 == 1)               # True
    print(1 == "1")             # False  — no coercion (unlike JS ==)
    print(1 != 2)               # True   (TS: !==)
    print(3 > 2)                # True
    print(3 >= 3)               # True
