def comprehension_filter():
    """
    Comprehensions with conditions — Python's .filter().map() in one expression.

    TS:  arr.filter(x => x % 2 === 0).map(x => x * 10)
    PY:  [x * 10 for x in arr if x % 2 == 0]

    General form:  [expression  for item in iterable  if condition]
    """
    nums = [1, 2, 3, 4, 5, 6]

    # filter only (like .filter)
    evens = [x for x in nums if x % 2 == 0]
    print(evens)                    # [2, 4, 6]

    # map + filter combined
    doubled_evens = [x * 2 for x in nums if x % 2 == 0]
    print(doubled_evens)            # [4, 8, 12]

    # Dict comprehension  (like Object.fromEntries + map)
    words = ["hi", "bye", "ok"]
    lengths = {w: len(w) for w in words}
    print(lengths)                  # {'hi': 2, 'bye': 3, 'ok': 2}

    # Set comprehension
    dupes = [1, 2, 2, 3, 3, 3]
    unique_squares = {x ** 2 for x in dupes}
    print(unique_squares)           # {1, 4, 9}

    # Nested comprehension (flatten 2D list)
    matrix = [[1, 2], [3, 4], [5, 6]]
    flat = [n for row in matrix for n in row]
    print(flat)                     # [1, 2, 3, 4, 5, 6]
