import React, {useState, useContext} from 'react'

import {GlobalContext} from '../Context/GlobalState'


export const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext)
    const [transactionText, setTransactionText] = useState("");
    const [transactionAmount, setTransactionAmount] = useState();



const submitform = (e) =>{
    e.preventDefault();

    const newTransaction ={
        id: Math.floor(Math.random()* 10000000),
        text: transactionText,
        amount: parseInt(transactionAmount)
    }

    addTransaction(newTransaction)

    console.log(newTransaction.id)

    setTransactionText('');
    setTransactionAmount('');
}

    return (
        <div>
            <h3>Add Transaction</h3>
            <form onSubmit={submitform}>
                <div className="form-control">
                    <label htmlFor="text">Transaction</label>
                    <input type="text" value = {transactionText} onChange= {(e) => setTransactionText(e.target.value)} placeholder="Enter the transaction here..."></input>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br/> (negative - expense, postion - income)</label>
                    <input type="number" value = {transactionAmount} onChange = {(e) => setTransactionAmount(e.target.value)} placeholder="Amount"></input>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
