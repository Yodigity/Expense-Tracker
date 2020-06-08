import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState';
import { Transaction } from './Transaction';

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext)

    return (
        <div>
            <h3>History</h3>
                <ul className="list">
                {transactions.map((transaction) => {return <Transaction key={transaction.id} transaction={transaction} />})}
                    
                </ul>
            
        </div>
    )
}
