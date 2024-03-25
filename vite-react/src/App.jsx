import { useState } from "react";


function App() {  
  const [counter, setCounter] = useState(0);  
  const addValue = () =>{    
    setCounter(counter + 1);
  }
  const decreaseValue = () =>{    
    if(counter <=0) setCounter(0);
    else setCounter(counter - 1);
  }
  return (
    <>
      <h1>Learning react with vite</h1>
      <h3>Counter value: {counter}</h3>
      <button onClick={addValue}>Increase Count</button> <br />
      <button onClick={decreaseValue}>Decrease Count</button>
    </>
  )
}

export default App
