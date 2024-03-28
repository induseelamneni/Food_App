import React, { useEffect, useState } from "react"
const Grocery = () => {
    let [count, setCount] = useState(10)

    const increseCount = () => {
        setCount(count + 1)
    }

    const decreseCount = () => {
        if (count > 0){
            setCount(count - 1)
        }
       
    }

    // useEffect(() => {
     
    //     //     let timer = setInterval(() => {
          
    //     //         setCount(count - 1)
    //     //     }, 1000)

    //     //     if (count < 0) {
    //     //         const stopTimer = () => {
    //     //                 clearInterval(timer)
    //     //         }
    //     // }
       
      
    // }, [count])


    // 

    
    
    return (
        <>
        <h1>Counter {count}</h1>
      

        <button type="button" onClick={increseCount}>Increse</button>
        <button type="button" onClick={decreseCount}>Decrese</button>
      {/*   <br/>
        {count  > 0 ? <button type="button" onClick={() => setCount(count - 1)}>Decrese</button> : ""} */}
       
        </>
    )
}

export default Grocery