# =============================================================================
# PLAYGROUND — playground.py
# cd server/playground
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
    "run": "lambda_task"
}

# -----------------------------------------------------------------------------
# DISPATCH TABLE
# Add a new entry here whenever you add a function to a topic file.
# -----------------------------------------------------------------------------
dispatch = {
    # --- variables ---
    "basic_types":               variables.basic_types,
    "basic_types_task":          variables.basic_types_task,
    "dict_":                     variables.dict_,
    "dict_task":                 variables.dict_task,
    "tuple_":                    variables.tuple_,
    "tuple_task":                variables.tuple_task,
    "set_":                      variables.set_,
    "set_task":                  variables.set_task,
    "unpacking":                 variables.unpacking,
    "unpacking_task":            variables.unpacking_task,

    # --- loops ---
    "for_range":                     loops.for_range,
    "for_range_task":                loops.for_range_task,
    "for_each":                      loops.for_each,
    "for_each_task":                 loops.for_each_task,
    "while_loop":                    loops.while_loop,
    "while_loop_task":               loops.while_loop_task,
    "list_comprehension":            loops.list_comprehension,
    "list_comprehension_task":       loops.list_comprehension_task,
    "comprehension_filter":          loops.comprehension_filter,
    "comprehension_filter_task":     loops.comprehension_filter_task,
    "enumerate_zip":                 loops.enumerate_zip,
    "enumerate_zip_task":            loops.enumerate_zip_task,

    # --- functions ---
    "basic_function":            functions.basic_function,
    "basic_function_task":       functions.basic_function_task,
    "default_args":              functions.default_args,
    "default_args_task":         functions.default_args_task,
    "lambda_":                   functions.lambda_,
    "lambda_task":               functions.lambda_task,
    "args_kwargs":               functions.args_kwargs,
    "args_kwargs_task":          functions.args_kwargs_task,

    # --- classes ---
    "basic_class":                 classes.basic_class,
    "basic_class_task":            classes.basic_class_task,
    "type_hints":                  classes.type_hints,
    "type_hints_task":             classes.type_hints_task,
    "type_alias":                  classes.type_alias,
    "type_alias_task":             classes.type_alias_task,
    "union_type":                  classes.union_type,
    "union_type_task":             classes.union_type_task,
    "dataclass_":                  classes.dataclass_,
    "dataclass_task":              classes.dataclass_task,
    "inheritance":                 classes.inheritance,
    "inheritance_task":            classes.inheritance_task,

    # --- conditionals ---
    "if_else":                conditionals.if_else,
    "if_else_task":           conditionals.if_else_task,

    # --- operators ---
    "comparison":                operators.comparison,
    "comparison_task":           operators.comparison_task,
    "logical":                   operators.logical,
    "logical_task":              operators.logical_task,

    # --- exceptions ---
    "try_except":               exceptions.try_except,
    "try_except_task":          exceptions.try_except_task,
}

# -----------------------------------------------------------------------------
fn = dispatch.get(config["run"])
if fn:
    fn()
else:
    print(f'Unknown: "{config["run"]}". Available:')
    for key in dispatch:
        print(f"  {key}")
