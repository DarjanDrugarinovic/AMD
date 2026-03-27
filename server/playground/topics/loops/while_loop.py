def while_loop():
    """
    Loop that runs as long as a condition is true.

    TS:  while (i < 5) { console.log(i); i++ }
    PY:  while i < 5:  (no i++, use i += 1)
    """
    i = 0
    while i < 5:
        print(i)
        i += 1              # no i++ in Python
