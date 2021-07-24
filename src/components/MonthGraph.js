import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/GlobalContext'

function MonthGraph({month, monthToText, spending, income}) {
  const { maxValue } = useGlobalContext();
  const [spendingStyle, setSpendingStyle] = useState({});
  const [incomeStyle, setIncomeStyle] = useState({});

  useEffect(() => {
    const newSpending = {
      height: `${(spending/maxValue)*100}%`,
      opacity: 1
    }
    const newIncome = {
      height: `${(income/maxValue)*100}%`,
      opacity: 1
    }
    setSpendingStyle(newSpending);
    setIncomeStyle(newIncome);
  }, [maxValue])

  return (
    <div className="month-graph-container">
      <div className="month-graph">
        <div className="graph-bar-container">
          <div className="graph-bar-fill spending-color" style={spendingStyle} />
        </div>
        <div className="graph-bar-container">
          <div className="graph-bar-fill income-color" style={incomeStyle} />
        </div>

      </div>
      <p className="graph-label">{monthToText.slice(0,3)}</p>
    </div>
  )

}

export default MonthGraph
