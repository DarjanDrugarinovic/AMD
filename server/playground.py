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
    "variables.basic_types":               variables.basic_types,
    "variables.basic_types_task":          variables.basic_types_task,
    "variables.dict_":                     variables.dict_,
    "variables.dict_task":                 variables.dict_task,
    "variables.tuple_":                    variables.tuple_,
    "variables.tuple_task":                variables.tuple_task,
    "variables.set_":                      variables.set_,
    "variables.set_task":                  variables.set_task,
    "variables.unpacking":                 variables.unpacking,
    "variables.unpacking_task":            variables.unpacking_task,

    # --- loops ---
    "loops.for_range":                     loops.for_range,
    "loops.for_range_task":                loops.for_range_task,
    "loops.for_each":                      loops.for_each,
    "loops.for_each_task":                 loops.for_each_task,
    "loops.while_loop":                    loops.while_loop,
    "loops.while_loop_task":               loops.while_loop_task,
    "loops.list_comprehension":            loops.list_comprehension,
    "loops.list_comprehension_task":       loops.list_comprehension_task,
    "loops.comprehension_filter":          loops.comprehension_filter,
    "loops.comprehension_filter_task":     loops.comprehension_filter_task,
    "loops.enumerate_zip":                 loops.enumerate_zip,
    "loops.enumerate_zip_task":            loops.enumerate_zip_task,

    # --- functions ---
    "functions.basic_function":            functions.basic_function,
    "functions.basic_function_task":       functions.basic_function_task,
    "functions.default_args":              functions.default_args,
    "functions.default_args_task":         functions.default_args_task,
    "functions.lambda_":                   functions.lambda_,
    "functions.lambda_task":               functions.lambda_task,
    "functions.args_kwargs":               functions.args_kwargs,
    "functions.args_kwargs_task":          functions.args_kwargs_task,

    # --- classes ---
    "classes.basic_class":                 classes.basic_class,
    "classes.basic_class_task":            classes.basic_class_task,
    "classes.type_hints":                  classes.type_hints,
    "classes.type_hints_task":             classes.type_hints_task,
    "classes.type_alias":                  classes.type_alias,
    "classes.type_alias_task":             classes.type_alias_task,
    "classes.union_type":                  classes.union_type,
    "classes.union_type_task":             classes.union_type_task,
    "classes.dataclass_":                  classes.dataclass_,
    "classes.dataclass_task":              classes.dataclass_task,
    "classes.inheritance":                 classes.inheritance,
    "classes.inheritance_task":            classes.inheritance_task,

    # --- conditionals ---
    "conditionals.if_else":                conditionals.if_else,
    "conditionals.if_else_task":           conditionals.if_else_task,

    # --- operators ---
    "operators.comparison":                operators.comparison,
    "operators.comparison_task":           operators.comparison_task,
    "operators.logical":                   operators.logical,
    "operators.logical_task":              operators.logical_task,

    # --- exceptions ---
    "exceptions.try_except":               exceptions.try_except,
    "exceptions.try_except_task":          exceptions.try_except_task,
}

# -----------------------------------------------------------------------------
fn = dispatch.get(config["run"])
if fn:
    fn()
else:
    print(f'Unknown: "{config["run"]}". Available:')
    for key in dispatch:
        print(f"  {key}")
