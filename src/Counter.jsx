import React, { useState } from 'react'

export default function Counter() {
   const[value,updateValue] =useState(0)
   //useState Hooks takes two things one is value and other is updated value.
   console.log(value)
  return (
    <div style={{display:'flex'}}>
      <h1>Counter</h1>
      <button onClick={()=>updateValue(value+1)}>Increment</button>
      <h2>{value}</h2>
      <button onClick={()=>updateValue(value-1)}>Decrement</button>
      <button onClick={()=>updateValue(0)}>Reset</button>
    </div>
  )
}
