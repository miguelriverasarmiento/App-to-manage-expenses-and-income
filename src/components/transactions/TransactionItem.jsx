import React from 'react'
import { useGlobalState } from '../../context/GlobalState'

function TransactionItem({transaction}) {

    const {deleteTransaction} = useGlobalState()

  return (
    <li className='bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center'>
        <p className='text-sm font-serif'>{transaction.description}</p>
        <div className='md:flex grid'>
            <span className='font-light font-serif'>${transaction.amount}</span>
            <button className='font-light font-serif text-slate-300 rounded-md' 
            onClick={() => deleteTransaction(transaction.id)}>&nbsp;&nbsp;Delete</button>
        </div>
    </li>
  )
}

export default TransactionItem
