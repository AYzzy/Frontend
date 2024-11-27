import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../features/counterSlice'

const Counter =() => {
  const count = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch()
  return(
    <div className='rap'>
      <h1>{count}</h1>
      <button onClick={()=>{dispatch(increment())}}>+</button>
      <button onClick={()=>{dispatch(decrement())}}>-</button>
      <button onClick={()=>{dispatch(reset())}}><p>reset</p></button>
    </div>
  )
}

export default Counter