import React, { useState } from 'react';
import './App.css';

 function App() {
     
    const [name , setName] = useState('BONNJOUR');
    const [showMessage, setShowMessage] = useState(false)

    const handleClickButton =()=>{
          setShowMessage(!showMessage)
    }
  return (
       <div className='flex p-10'>

          <input className='bonjour mr-5 border rounded-[2px]'
          onChange={(e) => setName(e.target.value)}         
          />
 
          <button className="bg-slate-500 text-white p-2 rounded-[10px]" onClick={handleClickButton}>ShowText</button>

          {showMessage && <h1>{name}</h1>}
       </div>
  )
 }
export default App;