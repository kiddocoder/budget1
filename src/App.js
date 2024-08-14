import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './components/Header';
import TableResult from './components/TableResult';

const App = () => {
    const [datas, setData] = useState([]);
    const [values, setValues] = useState({
        id: uuidv4(), // Use UUID for unique ID
        type: "income",
        description: "",
        value: 0,
        date: new Date()
    });
    const [monthPro,setMonthPro] = useState(new Date().getMonth());
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth()); // Default to current month
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear()); // Default to current year

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('data')) || [];
        setData(Array.isArray(localData) ? localData : []);
    }, []);


    /**
     * @param {e} event for inputs
     * @returns void
     */
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    /**
     * @param {e} event of form submittion
     * @returns void
     */
    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.description && values.value) {
            const newData = [...datas, { ...values, id: uuidv4(), date: new Date() }];
            localStorage.setItem('data', JSON.stringify(newData));
            setData(newData);
            setValues({ id: uuidv4(), type: "income", description: "", value: 0 }); // Reset values
        }
    }

    const handleDelete = (id) => {
        const updatedData = datas.filter(item => item.id !== id);
        localStorage.setItem('data', JSON.stringify(updatedData)); // Update Data
        setData(updatedData); // Update state UI
    };

    /**
     * @param {e} event when user select month and year
     * @returns void
     */
    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);
        setMonthPro(e.target.value);
    };

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    };

    /**
     * @param {Array <data>}
     * @returns Object <total> of totals
     */
    const calculateTotals = (data) => {
        // Filter data for selected month and year
        const filteredData = data.filter(item => {
            const itemDate = new Date(item.date);
            return itemDate.getMonth() === parseInt(selectedMonth) && itemDate.getFullYear() === parseInt(selectedYear);
        });

        // initialize total object
        const total = {
            all: 0,
            Tot:0,
            expenses: 0,
            incomes: 0,
            percentIncomes: 0,
            percentExpenses: 0
        };

        filteredData.forEach(item => {
            if (item.type === "income") {
                total.incomes += parseFloat(item.value) || 0;
            } else {
                total.expenses += parseFloat(item.value) || 0;
            }
            total.all = total.incomes - total.expenses;
            total.Tot += parseFloat(item.value) || 0; // total sum 
        });

        total.percentIncomes =  total.Tot ? ((total.incomes /  total.Tot) * 100).toFixed(2): 0;
        total.percentExpenses =  total.Tot ? ((total.expenses /  total.Tot) * 100).toFixed(2) : 0;

        return { total, filteredData };
    };

    const { total, filteredData } = calculateTotals(datas);

    // generate year range (5)
    const yearRange = [];
    for (let i = 0; i < 5; i++) {
        yearRange.push(new Date().getFullYear() - i);
    }
    return (
        <>
            <Header total={total} monthPro={monthPro} />
            <form className="flex gap-5 my-5 justify-center items-center" onSubmit={handleSubmit}>
                <select className="p-3 w-[100px] rounded-[5px]" name='type' value={values.type} onChange={handleChange} required>
                    <option value="income">+</option>
                    <option value="expense">-</option>
                </select>
                <input className="p-3 w-[450px] rounded-[5px]" name='description' type="text" placeholder='Add description' value={values.description} onChange={handleChange} required />
                <input className="p-3 w-[100px] rounded-[5px]" name='value' type="number" min={0.00} step={0.1} placeholder='value' value={values.value} onChange={handleChange} required />
                <button type='submit' className="p-3 border-neutral-800 bg-white rounded-[5px] text-emerald-500 text-[18px] cursor-pointer"><i class="bi bi-check-circle"></i></button>
            </form>

            {/* Month and Year Selector */}
            <div className="flex justify-center items-center mb-5">
                <select className="p-3 rounded-[5px]" value={selectedMonth} onChange={handleMonthChange}>
                    {Array.from({ length: 12 }, (_, index) => (
                        <option key={index} value={index}>
                            {new Date(0, index).toLocaleString('en-US', { month: 'long' })}
                        </option>
                    ))}
                </select>

                <select className="p-3 rounded-[5px]" value={selectedYear} onChange={handleYearChange}>
                    {yearRange.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
            </div>

            {/* Displaying filtered data */}
            <TableResult  data={filteredData} handleDelete={handleDelete} />
        </>
    )
}

export default App;