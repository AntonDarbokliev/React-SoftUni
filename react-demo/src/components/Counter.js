import { useState } from "react"

export default function  Counter(props){

    const [counter, setCounter] = useState(0)

    function incrementCounter(){
        setCounter(oldValue => oldValue + 1)
    }
    
    function decrementCounter(){
        setCounter(oldValue => oldValue - 1)            
    }

    function clearCounter(){
        setCounter(0)            
    }

    console.log(props.color);    
    return (
        <div style={{border : `5px solid ${props.color}`,width : "200px",height : "100px", margin : 'auto'}}>
        <p>{counter}</p>
        <button onClick={decrementCounter}>-</button>
        <button onClick={clearCounter}>0</button>
        <button onClick={incrementCounter}>+</button>
        </div>
    )
}