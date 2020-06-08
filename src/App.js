import React from 'react';
import './App.css';
import { Title } from './Components/Title';
import { Balance } from './Components/Balance';
import { IncomeExpense } from './Components/IncomeExpense';
import { AddTransaction } from './Components/AddTransaction';
import { TransactionList } from './Components/TransactionList';
import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Title />
      <div className= "container">
      <Balance />
      <IncomeExpense />
      <TransactionList />
      <AddTransaction />
      </div>
      
    </GlobalProvider>
  );
}

export default App;
