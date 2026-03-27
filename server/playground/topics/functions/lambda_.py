def lambda_():
    """
    lambda — anonymous single-expression function. Like an arrow function.

    TS:  (x: number) => x * 2
    PY:  lambda x: x * 2

    Limitations: one expression only, no statements. Use def for anything complex.
    """
    double = lambda x: x * 2
    print(double(5))                # 10

    add = lambda x, y: x + y
    print(add(3, 4))                # 7

    # Most common use: as a key for sorting
    words = ["banana", "apple", "cherry", "fig"]
    sorted_by_len = sorted(words, key=lambda w: len(w))
    print(sorted_by_len)            # ['fig', 'apple', 'banana', 'cherry']

    people = [{"name": "Bob", "age": 30}, {"name": "Alice", "age": 25}]
    sorted_people = sorted(people, key=lambda p: p["age"])
    print([p["name"] for p in sorted_people])   # ['Alice', 'Bob']

    # map — apply function to every item  (usually prefer comprehension)
    nums = [1, 2, 3, 4]
    doubled = list(map(lambda x: x * 2, nums))
    print(doubled)                  # [2, 4, 6, 8]

    # filter — keep items where function returns True
    evens = list(filter(lambda x: x % 2 == 0, nums))
    print(evens)                    # [2, 4]

    # Pythonic alternatives (usually preferred over map/filter):
    print([x * 2 for x in nums])           # same as map above
    print([x for x in nums if x % 2 == 0]) # same as filter above
