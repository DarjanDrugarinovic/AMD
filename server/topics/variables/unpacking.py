def unpacking():
    """
    Unpacking — Python's destructuring. Works on any iterable.

    TS:  const [a, b] = [1, 2]
    PY:  a, b = [1, 2]          (no brackets needed on the left)
    """
    # Basic
    a, b = [1, 2]
    print(a, b)             # 1 2

    # Swap without temp variable
    a, b = b, a
    print(a, b)             # 2 1

    # Rest / spread
    first, *rest = [1, 2, 3, 4, 5]
    print(first)            # 1
    print(rest)             # [2, 3, 4, 5]

    *head, last = [1, 2, 3, 4, 5]
    print(head)             # [1, 2, 3, 4]
    print(last)             # 5

    # Ignore values with _
    x, _, z = (10, 20, 30)
    print(x, z)             # 10 30

    # Unpack in a loop
    pairs = [(1, "a"), (2, "b"), (3, "c")]
    for num, letter in pairs:
        print(num, letter)
