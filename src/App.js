import React,{useState,useEffect } from "react";
import './App.css';
import Header from './componnents/Header';
import TableResult from './componnents/TableResult';

const App = () => {

   const [datas,setData] = useState([]);

   useEffect(() => {
      const Localdata = localStorage.getItem('data');
      return () => {
         setData(Localdata);
      };
   }, [datas]);

   const [values,setValues] = useState({
      type : "",
      description:"",
      value: 0,
      date : ""
   });

   const handlechange = (e) =>{
      setValues({ ...values, [e.target.name]: e.target.value });
   }

   const handleSubmit = (e) =>{
      e.preventDefault();
      localStorage.setItem('data',values)
      console.log(datas);
   }
   const total = 0;
  return (
      <>
         <Header total={total}/>
         <form className="flex gap-5" onSubmit={(event)=>{handleSubmit(event)}}>
            <select className="p-2" name='type' onChange={(e) =>{handlechange(e)}} required>
               <option value="income">+</option>
               <option value="expense">-</option>
            </select>
            <input className="p-2" name='description' type="text" placeholder='Add description' onChange={(e) =>{handlechange(e)}} required/>
            <input className="p-2" name='value' type="number"  min={0.00} step={0.1} placeholder='value' onChange={(e) =>{handlechange(e)}} required/>
            <button type='submit' className="p-2 border-neutral-800">Add</button>
         </form>
         <TableResult data={datas}/>
      </>
  )
 }
export default App;