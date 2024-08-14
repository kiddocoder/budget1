import React from 'react';
import './App.css';
import Header from './componnents/Header';
import {useState } from "react";

const App = () => {

   const [input,setInput] = useState({
      'type' : '',
      'description':'',
      'value': '',
      'date' : ''
   });

   const handlechange = (e) =>{
      setInput({...e.target.name : e.target.value})
   }

   const handleSubmit = () =>{
      console.log("heelooooo")
   }

  return (
      <>
         <Header/>
         <form className="flex gap-5" onSubmit={handleSubmit()}>
            <select className="p-2" name='type' onChange={(e) =>{handlechange(e)}} required>
               <option value="income">+</option>
               <option value="expense">-</option>
            </select>
            <input className="p-2" name='description' type="text" placeholder='Add description' onChange={(e) =>{handlechange(e)}} required/>
            <input className="p-2" name='value' type="number"  min={0.01} step={0.1} placeholder='value' onChange={(e) =>{handlechange(e)}} required/>
            <button type='submit' className="p-2 border-neutral-800">Add</button>
         </form>
      </>
  )
 }
export default App;