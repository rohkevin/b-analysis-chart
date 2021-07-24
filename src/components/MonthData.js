import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext'

function MonthData() {
  const { monthData } = useGlobalContext();
  useEffect(() => {

  }, [])
  
  return (
    <div className="chart-header">
      <h1>{monthData.monthToText}</h1>
      <div className="header-spending-income-container">
        <div className="header-spending-income">
          <span className="dot spending-color" />
          <p className="header-labael">Spending</p>
          <p className="header-label-amount dollar">${monthData.spending}</p>
        </div>
        <div className="header-spending-income">
          <span className="dot income-color" />
          <p className="header-labael">Income</p>
          <p className="header-label-amount dollar">${monthData.income}</p>
        </div>
      </div>
    </div>
  )
}

export default MonthData
