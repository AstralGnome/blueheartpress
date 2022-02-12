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
  
  const [state, dispatch] = useReducer(reducer, {count:0})

  function increment() {
    dispatch({type: "increment"})
  }
  
  function decrement() {
    dispatch({type: "decrement"})
  }

  return (
    <>
      <div className = "Parent" >
        <button className="PlusMinus" onClick={decrement}>DECREMENT</button>
        <div className="Count">{state.count}</div>
        <button className="PlusMinus" onClick={increment}>INCREMENT</button>
      </div>
    </>
  )
}
export default Counter