import { useState, useEffect } from 'react';
import "../App.css";

const TableResult = ({ data }) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);

    useEffect(() => {
        const incomeItems = data.filter(item => item.type === "income");
        const expenseItems = data.filter(item => item.type === "expense");
        setIncomes(incomeItems);
        setExpenses(expenseItems);
    }, [data]);

    return (
        <section className='flex justify-center items-center'>
            <div className='flex space-x-10'>
                <div className='text-emerald-500 w-[550px]'>
                    <h1 className='text-xl font-bold mb-2'>INCOMES</h1>
                    <ul className='bg-white rounded-lg'>
                        {incomes.map((item) => (
                            <li key={item.id} className='flex justify-between p-2 odd:bg-gray-100 border border-gray-200'>
                                <span>{item.description}</span>
                                <div className='flex justify-between'>
                                    <span>{item.value}</span>
                                    <span>X</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='text-red-600 w-[550px]'>
                    <h1 className='text-xl font-bold mb-2'>EXPENSES</h1>
                    <ul className='bg-white rounded-lg'>
                        {expenses.map((item) => (
                            <li key={item.id} className='flex justify-between p-2 odd:bg-gray-100 border border-gray-200'>
                                <span>{item.description}</span>
                                <div className='flex justify-between'>
                                    <span>{item.value}</span>
                                    <span>X</span>
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