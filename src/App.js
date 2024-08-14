import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import TableResult from './components/TableResult';

const App = () => {
    const [datas, setData] = useState([]);
    const [values, setValues] = useState({
        id: Date.now(),
        type: "income",
        description: "",
        value: 0,
        date: new Date()
    });

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('data')) || [];
        setData(localData);
    }, []);

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = [...datas, values];
        localStorage.setItem('data', JSON.stringify(newData));
        setData(newData);
        setValues({ ...values, id: Date.now(), description: "", value: 0 }); // Reset values
    }

    const calculateTotals = (data) => {
        const total = {
            all: 0,
            expenses: 0,
            incomes: 0,
            percentIncomes: 0,
            percentExpenses: 0
        };

        data&&data.forEach(item => {
            total.all += parseFloat(item.value);
            if (item.type === "income") {
                total.incomes += parseFloat(item.value);
            } else {
                total.expenses += parseFloat(item.value);
            }
        });

        total.percentIncomes = total.incomes ? ((total.incomes / total.all) * 100).toFixed(2) : 0;
        total.percentExpenses = total.expenses ? ((total.expenses / total.all) * 100).toFixed(2) : 0;

        return total;
    };

    const total = calculateTotals(datas);

    return (
        <>
            <Header total={total} />
            <form className="flex gap-5 my-5 justify-center items-center" onSubmit={handleSubmit}>
                <select className="p-3 w-[100px] rounded-[5px]" name='type' value={values.type} onChange={handleChange} required>
                    <option value="income">+</option>
                    <option value="expense">-</option>
                </select>
                <input className="p-3 w-[450px] rounded-[5px]" name='description' type="text" placeholder='Add description' value={values.description} onChange={handleChange} required />
                <input className="p-3 w-[100px] rounded-[5px]" name='value' type="number" min={0.00} step={0.1} placeholder='value' value={values.value} onChange={handleChange} required />
                <button type='submit' className="p-3 border-neutral-800 bg-green-800 rounded-[5px] text-white text-[18px] cursor-pointer">Add</button>
            </form>
            <TableResult data={datas} />
        </>
    )
}

export default App;