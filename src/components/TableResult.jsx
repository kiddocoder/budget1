import { useState, useEffect } from 'react';
import "../App.css";

const TableResult = ({ data, handleDelete }) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [totalIncomes, setTotalIncomes] = useState(0);
    const [totalExpenses, setTotalExpenses] = useState(0);

    useEffect(() => {
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
                                    <span className='percent'>{calculateIncomePercentage(parseFloat(item.value))}%</span>
                                    <span id='deletebtn' className='ml-2 cursor-pointer' onClick={() => handleDelete(item.id)}>X</span>
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
                                    <span className='percent'>{calculateExpensePercentage(parseFloat(item.value))}%</span>
                                    <span id='deletebtn' className='ml-2 cursor-pointer' onClick={() => handleDelete(item.id)}>X</span>
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