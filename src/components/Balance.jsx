import { useGlobalState } from '../context/GlobalState'

function Balance() {

  const {transactions} = useGlobalState()

  const amount = transactions.map(transaction => transaction.amount)

  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2)

  return (
    <div className='flex justify-between'>
      <h3>Balance</h3>
      <div>
        <h1 className='text-2x1 font-bold'>${total}</h1>
      </div>
    </div>
  )
}

export default Balance
