def if_else():
    """
    if / elif / else — Python has no switch/case (until 3.10 match/case).

    TS:  if (x > 0) { } else if (x === 0) { } else { }
    PY:  if x > 0:  /  elif x == 0:  /  else:
         — no parens, no braces, colon + indent
    """
    x = 5
    if x > 0:
        print("positive")
    elif x == 0:
        print("zero")
    else:
        print("negative")
