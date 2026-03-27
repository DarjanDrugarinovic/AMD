def for_each():
    """
    Iterate over a list (Python's array).

    TS:  fruits.forEach(fruit => console.log(fruit))
    TS:  for (const fruit of fruits)
    PY:  for fruit in fruits:        (no index, just the value)
    """
    fruits = ["apple", "banana", "cherry"]

    for fruit in fruits:
        print(fruit)
