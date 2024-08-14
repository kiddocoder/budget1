import { useState, useEffect } from 'react';
import "../App.css";

const TableResult = () => {
    return (
        <section className='flex justify-center items-center'>
            <div className='flex space-x-10'>
                <div className='text-emerald-500 w-[550px]'>
                    <h1 className='text-xl font-bold mb-2'>INCOMES</h1>
                    <ul className='bg-white rounded-lg'>
                        <li className='flex justify-between p-2 odd:bg-gray-100 border border-gray-200'>
                            <span>Web Design</span>
                            <div className='flex justify-between'>
                                <span>50%</span>
                                <span>X</span>
                            </div>
                        </li>
                        <li className='flex justify-between p-2 odd:bg-gray-100 border border-gray-200'>
                            <span>Freelancing</span>
                            <div className='flex justify-between'>
                                <span>30%</span>
                                <span>X</span>
                            </div>
                        </li>
                        <li className='flex justify-between p-2 odd:bg-gray-100 border border-gray-200'>
                            <span>Consulting</span>
                            <div className='flex justify-between'>
                                <span>20%</span>
                                <span>X</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className='text-red-600  w-[550px]'>
                    <h1 className='text-xl font-bold mb-2'>EXPENSES</h1>
                    <ul className='bg-white rounded-lg'>
                        <li className='flex justify-between p-2 odd:bg-gray-100 border border-gray-200'>
                            <span>Hosting</span>
                            <div className='flex justify-between'>
                                <span>20%</span>
                                <span>X</span>
                            </div>
                        </li>
                        <li className='flex justify-between p-2 odd:bg-gray-100 border border-gray-200'>
                            <span>Software</span>
                            <div className='flex justify-between'>
                                <span>10%</span>
                                <span>X</span>
                            </div>
                        </li>
                        <li className='flex justify-between p-2 odd:bg-gray-100 border border-gray-200'>
                            <span>Marketing</span>
                            <div className='flex justify-between'>
                                <span>15%</span>
                                <span>X</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default TableResult;