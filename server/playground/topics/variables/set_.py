def set_():
    """
    set — unordered collection of unique values. Like JS Set.

    TS:  new Set([1, 2, 2, 3])
    PY:  {1, 2, 2, 3}  →  {1, 2, 3}
    """
    nums = {1, 2, 2, 3, 3, 3}
    print(nums)             # {1, 2, 3}  — duplicates removed

    # Add / remove
    nums.add(4)
    nums.discard(1)         # safe remove (no error if missing)
    print(nums)

    # Membership — O(1), much faster than list `in`
    print(2 in nums)        # True

    # Common use: deduplicate a list
    words = ["hi", "bye", "hi", "ok", "bye"]
    unique = list(set(words))
    print(unique)

    # Set operations
    a = {1, 2, 3}
    b = {2, 3, 4}
    print(a | b)            # union        {1, 2, 3, 4}
    print(a & b)            # intersection {2, 3}
    print(a - b)            # difference   {1}

    # Empty set: use set(), NOT {} — that creates an empty dict
    empty = set()
    print(type(empty))      # <class 'set'>
