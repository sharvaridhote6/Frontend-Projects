
import './App.css'
import { useState } from 'react'

function App(){
  const [counter, setCounter] = useState(0) //first value (counter) is a variable and second is a method (setCounter), counter stores the state and setcounter updates it, useState doesn't only change the state of nos on the ui but also in the DOM 
  // let counter=15
  
  const addValue =()=>{
    // counter= counter +1
    // console.log(counter);
    // This line uses setCounter to update the state (counter). It increments the counter by 1.
    setCounter(counter +1)
    // This line uses a callback function to ensure that the update is applied on the previous value of 'counter'.
    setCounter((prevCounter)=>prevCounter+1) 
    setCounter((prevCounter)=>prevCounter+1) 
  }
  const removeValue=() =>{
    setCounter(counter-1)
    setCounter((previousCounter)=>previousCounter-1)
    setCounter((previousCounter)=>previousCounter-1)
  } 
  return( 
    <>
    {/*these are comments in react- first line displays current counter value, third/fourth- button to remove and add value , and last shows the counter value in the c=footer  */}
    <h1>vite-react0 {counter} </h1>  
    <h2>counter value: {counter}</h2>
    <button onClick={removeValue}>Remove value</button> {" "}
    <button onClick={addValue}>Add value</button>
    <p>footer:{counter} </p>
    </>
  )
}

export default App
