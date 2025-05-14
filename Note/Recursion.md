## Where things go wrong...
1. no base case
2. forgetting to return or returning the wrong thing
3. stack overflow -> recursion not stopping

## Helper Method Recursion
- outer function that is not recursive but calls recursive function inside.
```
function outer(input) {
    var outerScopedVariable = [];
    function helper(helperInput) {
        //recursion function
        helper(helperInput--)
    }

    helper(input)

    return outerScopedVariable
}
```

## Pure Recursion
- For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you don't mutate them
- Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
- To make copies of objects use Object.assign, or the spread operator