# Type aliases must be declared at module level (not inside a function)
# TS:  type ID = string
type ID = str                   # `type` keyword — Python 3.12+

def type_alias():
    """
    Give an existing type a new name.

    TS:  type ID = string
    PY:  type ID = str   — Python 3.12+ syntax, no import needed
    """
    user_id: ID = "abc-123"
    print(user_id)
    print(type(user_id))        # <class 'str'>
