# TypeScript Runtime Type Error in Function Parameters

This repository demonstrates a common issue in TypeScript where type safety is not enforced at runtime for function parameters if type checking is not correctly implemented.

## Bug

The `add` function is declared to accept two number parameters.  However, the code calls the function with a string and a number.  TypeScript's compiler will not catch this error because type checking is done at compile time, and type checking is not enabled at runtime by default. This leads to a runtime error.

## Solution

The solution involves performing runtime type checking within the function to ensure that the parameters are of the expected type.  If a parameter is not of the expected type, an error is thrown, preventing the function from executing with invalid input.  This enhances the robustness of the code.