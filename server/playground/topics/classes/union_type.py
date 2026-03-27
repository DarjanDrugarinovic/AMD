def union_type():
    """
    A value that can be one of several types.

    TS:  type ID = string | number
    PY:  ID = str | int          — Python 3.10+
    """
    type ID = str | int

    def print_id(id: ID):
        print(id, "→", type(id).__name__)

    print_id("abc-123")         # abc-123 → str
    print_id(42)                # 42 → int
