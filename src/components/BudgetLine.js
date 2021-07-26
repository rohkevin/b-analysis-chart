import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext'

function BudgetLine() {
  const { data, budget, getBudgetHeight, budgetHeight } = useGlobalContext();
  

  useEffect(() => {
    getBudgetHeight();
  }, [budget, data])
  return (
    <div className="budget-line" style={{bottom: budgetHeight}}>

    </div>
  )


}

export default BudgetLine
