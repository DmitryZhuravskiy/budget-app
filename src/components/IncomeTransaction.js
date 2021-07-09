import React, {useState, useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

const IncomeTransaction = (props) => {

    const {deleteTransaction} = useContext(GlobalContext);

    return (
                <li className="transaction">
                    <span className="transaction-text">{props.incomeTransaction.incomeText}</span>
                    <span className="transaction-amount">{props.incomeTransaction.incomeAmount}</span>
                    <button className="delete-btn" onClick={() => deleteTransaction(props.incomeTransaction.id)}>
                        <div><img src="./images/trash.png" width="20" height="20"/></div>
                    </button>
                </li>
    )
}

export default IncomeTransaction