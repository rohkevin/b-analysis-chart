import React, { useEffect, useState } from 'react'
import { useGlobalContext } from '../context/GlobalContext'

function MonthGraph({month, monthToText, spending, income}) {
  const { data, maxValue, getMonthData, monthData } = useGlobalContext();
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
  }, [data, maxValue])

  return (
    <div className="month-graph-container" onClick={()=>getMonthData(month)}>

      <div className="month-graph">
        <div className="graph-bar-container">
          <div className="graph-bar-fill spending-color" style={spendingStyle} />
        </div>
        <div className="graph-bar-container">
          <div className="graph-bar-fill income-color" style={incomeStyle} />
        </div>
      </div>

      <div className={monthData.month === month ? "graph-label highlight-label-background" : "graph-label"}>
        <p className={monthData.month === month ? "highlight-label-text label-text" : "label-text"} title={monthToText.slice(0,3)}>{monthToText.slice(0,3)}</p>
      </div>
    </div>
  )

}

export default MonthGraph
