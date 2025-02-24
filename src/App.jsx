import { useReducer, useRef } from 'react';
import './App.css'

function reducer(state, action) {
  let num1 = Number(action.payload[0])
  let num2 = Number(action.payload[1])
  console.log(action)
  switch(action.type) {
    case 'ADD':
      return num1 + num2
    case 'SUBTRACT':
      return num1 - num2
    case 'MULTIPLY':
      return num1 * num2
    case 'DIVIDE':
      return num1 / num2
    case 'CLEAR':
      return 0
    default: 
  return state
  }
}

function App() {

const firstInputRef = useRef()
const secondInputRef = useRef() // { current: input }

const [result, dispatch] = useReducer(reducer, 0) // function, initial state

function handleOperation(operation) {
  if (operation === 'CLEAR') {
    firstInputRef.current.value = ''
    secondInputRef.current.value = ''
  }
  dispatch({
    type: operation,
    payload: [
      firstInputRef.current.value,
      secondInputRef.current.value
    ]
  })
}

  return (
      <div>
        <input type="number" ref={firstInputRef} />
        <input type="number" ref={secondInputRef} />  
          <div>
          <button onClick={() => handleOperation('ADD')}>Add</button>
          <button onClick={() => handleOperation('SUBTRACT')}>Subtract</button>
          <button onClick={() => handleOperation('MULTIPLY')}>Multiply</button>
          <button onClick={() => handleOperation('DIVIDE')}>Divide</button>
          <button onClick={() => handleOperation('CLEAR')}>Clear</button>
          <br />
          {result}
          </div>
      </div>
  );
};


export default App
