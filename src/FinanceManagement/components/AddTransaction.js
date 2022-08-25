import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }

    addTransaction(newTransaction);
  }

  return (
    <div>
      <h3 className='font-bold pb-5 addsection'>Add New Transaction</h3>


      <div className='bg-lime-200 rounded-3xl py-5'>
      
      <form onSubmit={onSubmit}>
        <div>
        <div className="form-control">
          <label className='font-semibold' htmlFor="text"> Category Name</label>
          <input  type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter expense or income namae"  />
        </div>
        <div className="form-control">
          <label className='font-semibold' htmlFor="amount"
            >Amount <br />
            (Please add (-) for Expense and (+) for Income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>

        </div>
       <div className='pt-5'>
       <button className="btn btn-primary rounded-full ">Add transaction</button>
       </div>
      </form>
    </div>
   
    </div>
   
  )
}
