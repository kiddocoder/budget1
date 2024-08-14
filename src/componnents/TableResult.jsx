import {useState,useEffect} from 'react';
import "../App.css";

const TableResult = () => {
      return(
            <>
             <section className='m-auto'>
             <div className='float-left text-emerald-500'>
                  <h1>INCOMES</h1>
                  <ul>
                        <li className='flex justify-between p-2'>
                              <span>web design</span>
                              <div className='fle justify-between'>
                                    <span>50%</span>
                                    <span>X</span>
                              </div>
                        </li>
                  </ul>
             </div>

             <div className='float-left text-red-600'>
                  <h1>EXPENSES</h1>
                  <ul>
                        <li className='flex justify-between p-2'>
                              <span>web design</span>
                              <div className='fle justify-between'>
                                    <span>50%</span>
                                    <span>X</span>
                              </div>
                        </li>
                  </ul>
             </div>
              </section>
            </>
      )
}

export default TableResult;