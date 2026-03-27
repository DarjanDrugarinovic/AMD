def list_comprehension():
    """
    Inline loop that builds a new list — Python's alternative to .map().

    TS:  arr.map(x => x * 2)
    PY:  [x * 2 for x in arr]
    """
    arr = [1, 2, 3]
    result = [x * 2 for x in arr]
    print(result)               # [2, 4, 6]
