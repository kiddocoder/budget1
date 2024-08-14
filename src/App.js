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
         <form className="flex gap-5 my-5 justify-center items-center" onSubmit={(event)=>{handleSubmit(event)}}>
            <select className="p-3 w-[100px] rounded-[5px]" name='type' onChange={(e) =>{handlechange(e)}} required>
               <option value="income">+</option>
               <option value="expense">-</option>
            </select>
            <input className="p-3 w-[450px] rounded-[5px]" name='description' type="text" placeholder='Add description' onChange={(e) =>{handlechange(e)}} required/>
            <input className="p-3 w-[100px] rounded-[5px]" name='value' type="number"  min={0.00} step={0.1} placeholder='value' onChange={(e) =>{handlechange(e)}} required/>
            <button type='submit' className="p-3 border-neutral-800 bg-green-800 rounded-[5px] text-white text-[18px] cursor-pointer ">Add</button>
         </form>
         <TableResult data={datas}/>
      </>
  )
 }
export default App;