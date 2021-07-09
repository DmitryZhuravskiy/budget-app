import React, {useContext} from 'react'
import IncomeTransaction from './IncomeTransaction'
import {GlobalContext} from '../context/GlobalState'

const IncomeList = () => {
    const {incomeTransactions} = useContext(GlobalContext);

    return (
        <div className="transactions transactions-income">
            <h2>Transaction History</h2>
            <ul className="transaction-list">
                {incomeTransactions.map(incomeTransaction => (
                    <IncomeTransaction 
                    key={incomeTransaction.id}
                    incomeTransaction={incomeTransaction}/>
                ) )}

            </ul>
        </div>
    )
}

export default IncomeList
