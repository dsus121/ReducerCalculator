# Instructions

## Project Setup:
Create a new React project or use an existing one.
Ensure the project is set up with React and ready to use hooks.

## UI Components:
Two input fields to take number inputs.
Buttons for basic arithmetic operations: Add (+), Subtract (-), Multiply (*), and Divide (/).
A Clear button to reset the calculator.

## State Management with useReducer:
Use the useReducer hook to manage the calculator’s state.
The state should track the current result of the calculation.
Create actions for each operation: ADD, SUBTRACT, MULTIPLY, DIVIDE, and CLEAR.

## Reducer Function:
Implement a reducer function that takes the current state and an action.
Based on the action type, perform the appropriate arithmetic operation and update the state.

## Functionality:
Users enter numbers into the two input fields.
Clicking an operation button applies the operation to the input values and displays the result.
The Clear button resets the calculator to its initial state.

## Advanced Goals (Optional):
Implement a history feature to track and display previous calculations.