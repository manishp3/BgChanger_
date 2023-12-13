import React from 'react'
import { useState } from 'react'

function App() {
  // const setColor=(color)=>{
    //   document.body.style.backgroundColor=color;
    // }
    const [color, setColor] = useState("olive");
  return (
  
   <div className="w-full h-full flex justify-center align-content-center" style={{backgroundColor:color}}>
         
          <button type="button" className="btn" onClick={()=>setColor("red")}>Red</button> 
          <button type="button" className="btn" onClick={() => setColor("green")}>Green</button>
          <button type="button" className="btn" onClick={() => setColor("olive")}>Olive</button>
   
    </div>
  )
}

export default App