def enumerate_zip():
    """
    enumerate — loop with index without managing a counter yourself.
    zip — loop over two lists in parallel.

    TS:  arr.forEach((item, i) => ...)
    PY:  for i, item in enumerate(arr):

    TS:  a.map((item, i) => [item, b[i]])
    PY:  for x, y in zip(a, b):
    """
    fruits = ["apple", "banana", "cherry"]

    # enumerate — gives (index, value) pairs
    for i, fruit in enumerate(fruits):
        print(i, fruit)         # 0 apple / 1 banana / 2 cherry

    # start from a different index
    for i, fruit in enumerate(fruits, start=1):
        print(i, fruit)         # 1 apple / 2 banana / 3 cherry

    # zip — pair up two lists
    prices = [1.0, 0.5, 2.0]
    for fruit, price in zip(fruits, prices):
        print(f"{fruit}: ${price}")

    # zip stops at shortest list
    short = [10, 20]
    for f, s in zip(fruits, short):
        print(f, s)             # only apple/banana, cherry dropped

    # combine both
    for i, (fruit, price) in enumerate(zip(fruits, prices), start=1):
        print(f"{i}. {fruit} = ${price}")
