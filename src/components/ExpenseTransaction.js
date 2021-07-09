import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const ExpenseTransaction = (props) => {
    const {deleteTransaction} = useContext(GlobalContext);
    return (
                <li className="transaction">
                    <span className="transaction-text">{props.expenseTransaction.expenseText}</span>
                    <span className="transaction-amount">{props.expenseTransaction.expenseAmount}</span>
                    <button className="delete-btn" onClick={() => deleteTransaction(props.expenseTransaction.id)}>
                        <div><img src="./images/trash.png" width="20" height="20"/></div>
                    </button>
                </li>
    )
}

export default ExpenseTransaction