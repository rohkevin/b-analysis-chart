import React from 'react'
import { useGlobalContext } from '../context/GlobalContext'

function Budget({ budget }) {
  const { budgetHeight } = useGlobalContext();

  return (
    <div className="budget">
      <div className="budget-info" style={{bottom: budgetHeight}}>
        <p>Budget</p>
        <p className="dollar">${budget.toLocaleString()}</p>
      </div>
    </div>
  )
}

export default Budget
