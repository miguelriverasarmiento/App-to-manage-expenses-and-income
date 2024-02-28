import React from 'react'
import { GlobalProvider } from './context/GlobalState'
import Balance from './components/Balance'
import TransactionForm from './components/transactions/TransactionForm'
import TransactionList from './components/transactions/TransactionList'
import IncomeExpenses from './components/transactions/IncomeExpenses'
import ExpenceChart from './components/ExpenceChart'

function App() {
  return (
    <GlobalProvider>
      <div className='bg-black text-white md:flex justify-center items-center'>
        <div className='container mx-auto md:w-4/6'>
          <div className='bg-zinc-800 p-5 rounded-lg md:flex gap-x-5'>
            <div>
              <h1 className='text-4x1 font-bold'>Expense Tracker</h1>
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className='flex flex-col flex-1'>
              <ExpenceChart />
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App
