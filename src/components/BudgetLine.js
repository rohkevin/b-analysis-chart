import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/GlobalContext'

function BudgetLine() {
  const { data, maxValue, budget, getBudgetHeight, budgetHeight } = useGlobalContext();
  

  useEffect(() => {
    getBudgetHeight();
  }, [budget, budgetHeight, data])
  return (
    <div className="budget-line" style={{bottom: budgetHeight}}>

    </div>
  )


}

export default BudgetLine
