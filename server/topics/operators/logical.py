def logical():
    """
    Logical operators use English words, not symbols.

    TS:  &&    ||    !
    PY:  and   or    not
    """
    x = True
    y = False

    print(x and y)              # False  (TS: x && y)
    print(x or y)               # True   (TS: x || y)
    print(not x)                # False  (TS: !x)
