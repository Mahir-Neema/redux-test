import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import pizzaSlice, { addTopping } from './pizzaSlice';
import './App.css'


function App() {

  const pizza = useSelector(state => state.pizza);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Pizza 🍕</h1>
      {pizza.toppings.map(topping => {
        return <div key={topping}>{topping}</div>
      })}

      <button onClick={()=> dispatch(addTopping('pepperoni 🍕'))}> Add pepperoni 🍕</button>
      <button onClick={()=> dispatch(addTopping('cheese 🧀'))}> cheese 🧀</button>
      <button onClick={()=> dispatch(addTopping('Red Peppers 🌶️'))}> Red Peppers. 🌶️ </button>
      <button onClick={()=> dispatch(addTopping('Broccoli🥦'))}> Broccoli🥦 </button>
      <button onClick={()=> dispatch(addTopping('Pineapple🍍'))}> Pineapple🍍 </button>
    </div>
  )
}

export default App
