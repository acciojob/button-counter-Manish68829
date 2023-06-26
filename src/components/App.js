
import React from "react";
import './../styles/App.css';
import { useState } from "react";


const App = () => {

  const [Counter, setCounter]=useState(0);

  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {Counter} times</p>
        <button onClick={()=>setCounter(Counter+1)}>Click me</button>
        
    </div>
  )
}

export default App
