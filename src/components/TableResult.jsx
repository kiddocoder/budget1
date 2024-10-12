import { useState, useEffect } from 'react';
import formatNumber from "../utils";
import "../assets/css/App.css";

const TableResult = ({ data, handleDelete }) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [totalIncomes, setTotalIncomes] = useState(0);
    const [totalExpenses, setTotalExpenses] = useState(0);

    useEffect(() => {
        //filter items
        const incomeItems = Array.isArray(data) ? data.filter(item => item.type === "income") : [];
        const expenseItems = Array.isArray(data) ? data.filter(item => item.type === "expense") : [];
        setIncomes(incomeItems);
        setExpenses(expenseItems);

        const totalIncome = incomeItems.reduce((acc, item) => acc + parseFloat(item.value || 0), 0);
        const totalExpense = expenseItems.reduce((acc, item) => acc + parseFloat(item.value || 0), 0);
        setTotalIncomes(totalIncome);
        setTotalExpenses(totalExpense);
    }, [data]);

    const calculateIncomePercentage = (value) => {
        return totalIncomes ? ((value / totalIncomes) * 100).toFixed(2) : 0;
    };

    const calculateExpensePercentage = (value) => {
        return totalExpenses ? ((value / totalExpenses) * 100).toFixed(2) : 0;
    };

    return (
        <section className='flex justify-center items-cente'>
            <div className='flex space-x-10'>
                <div className='text-emerald-500 w-[550px]'>
                    <h1 className='text-xl font-bold mb-2'>INCOMES</h1>
                    <ul className='bg-white rounded-lg'>
                        {incomes.map((item) => (
                            <li key={item.id} className='flex justify-between p-2 odd:bg-gray-100 border border-gray-200'>
                                <span className='text-black'>{item.description}</span>
                                <div className='flex justify-between'>
                                    <span>+{formatNumber(item.value)}</span>
                                    <span className='percent text-emerald-600 ml-2 align-middle bg-emerald-100 rounded-sm p-1 text-[12px]' id="percent">{calculateIncomePercentage(parseFloat(item.value))}%</span>
                                    <span id='deletebtn' className=' ml-2 cursor-pointer' onClick={() => handleDelete(item.id)}><i className="bi bi-trash-fill"></i></span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='text-red-600 w-[550px]'>
                    <h1 className='text-xl font-bold mb-2'>EXPENSES</h1>
                    <ul className='bg-white rounded-lg'>
                        {expenses.map((item) => (
                            <li key={item.id} className='flex justify-between p-2 odd:bg-gray-100 border  border-gray-200'>
                                <span className='text-black'>{item.description}</span>
                                <div className='flex justify-between'>
                                    <span>-{formatNumber(item.value)}</span>
                                    <span className='percent align-middle text-red-600 ml-2 bg-red-100 rounded-sm p-1 text-[12px]' id="percent">{calculateExpensePercentage(parseFloat(item.value))}%</span>
                                    <span id='deletebtn' className='ml-2 cursor-pointer' onClick={() => handleDelete(item.id)}><i className="bi bi-trash-fill"></i></span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default TableResult;