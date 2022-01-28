import React, {useReducer} from "react"
import "../style/Counter.css"

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 }
    case "decrement":
      return { count: state.count - 1 }
    default:
      return state
  }
}

function Counter() {
  
  const [state, dispatch] = useReducer(reducer, {count:8})

  function increment() {
    dispatch({type: "increment"})
  }
  
  function decrement() {
    dispatch({type: "decrement"})
  }

  return (
    <>
      <div className = "Counter" >
        <button onClick={decrement}>-</button>
        <span>{state.count}</span>
        <button onClick={increment}>+</button>
      </div>
    </>
  )
}
export default Counter