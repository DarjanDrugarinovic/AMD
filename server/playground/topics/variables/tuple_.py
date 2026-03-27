def tuple_():
    """
    tuple — immutable list. Common for multi-value returns and fixed data.

    TS:  const point: [number, number] = [1, 2]  (tuple type)
    PY:  point = (1, 2)

    Key difference: once created, you cannot change it.
    """
    point = (1, 2)
    print(point[0])         # 1
    print(point[1])         # 2

    # Unpack (destructure)
    x, y = point
    print(x, y)             # 1 2

    # Functions commonly return tuples for multiple values
    def min_max(nums):
        return min(nums), max(nums)     # returns a tuple automatically

    lo, hi = min_max([3, 1, 4, 1, 5])
    print(lo, hi)           # 1 5

    # Single-element tuple needs trailing comma
    single = (42,)          # without comma it's just parentheses: (42) == 42
    print(type(single))     # <class 'tuple'>

    # Tuples are iterable like lists
    for v in point:
        print(v)
