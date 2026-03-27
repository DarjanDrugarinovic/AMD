# =============================================================================
# PLAYGROUND — playground.py
# Run: uvx watchfiles "python playground.py" playground.py topics/
#      │    │          │                      │            │
#      │    │          │                      └────────────┴── watch these files/folders for changes
#      │    │          └── command to run on each change
#      │    └── package to run (like npx watchfiles)
#      └── uv's npx equivalent — runs without installing globally
# =============================================================================
from topics import variables, loops, functions, classes, conditionals, operators, exceptions

# Change "run" to execute a different example.
# Format: "module.function_name"
config = {
    "run": "variables.basic_types"
}

# -----------------------------------------------------------------------------
# DISPATCH TABLE
# Add a new entry here whenever you add a function to a topic file.
# -----------------------------------------------------------------------------
dispatch = {
    # --- variables ---
    "variables.basic_types":          variables.basic_types,
    "variables.dict_":                variables.dict_,
    "variables.tuple_":               variables.tuple_,
    "variables.set_":                 variables.set_,
    "variables.unpacking":            variables.unpacking,

    # --- loops ---
    "loops.for_range":                loops.for_range,
    "loops.for_each":                 loops.for_each,
    "loops.while_loop":               loops.while_loop,
    "loops.list_comprehension":       loops.list_comprehension,
    "loops.comprehension_filter":     loops.comprehension_filter,
    "loops.enumerate_zip":            loops.enumerate_zip,

    # --- functions ---
    "functions.basic_function":       functions.basic_function,
    "functions.default_args":         functions.default_args,
    "functions.lambda_":              functions.lambda_,
    "functions.args_kwargs":          functions.args_kwargs,

    # --- classes ---
    "classes.basic_class":            classes.basic_class,
    "classes.type_hints":             classes.type_hints,
    "classes.type_alias":             classes.type_alias,
    "classes.union_type":             classes.union_type,
    "classes.dataclass_":             classes.dataclass_,
    "classes.inheritance":            classes.inheritance,

    # --- conditionals ---
    "conditionals.if_else":           conditionals.if_else,

    # --- operators ---
    "operators.comparison":           operators.comparison,
    "operators.logical":              operators.logical,

    # --- exceptions ---
    "exceptions.try_except":          exceptions.try_except,
}

# -----------------------------------------------------------------------------
fn = dispatch.get(config["run"])
if fn:
    fn()
else:
    print(f'Unknown: "{config["run"]}". Available:')
    for key in dispatch:
        print(f"  {key}")
