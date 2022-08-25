import React from 'react';

import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import "./FinanceManagement.css"
const Financemanagement = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl ">
            
            <GlobalProvider>
      <Header />
      <div className='FinanceContainer card-body   text-center '>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />

      </div>
      
    </GlobalProvider>

        

        </div>
    );
};

export default Financemanagement;