import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext'

function MonthData() {
  const { monthData } = useGlobalContext();
  useEffect(() => {

  }, [])
  
  return (
    <div>
      <h1>Current Month: {monthData.month}</h1>
      <p>Spending: {monthData.spending}</p>
      <p>Income: {monthData.income}</p>
    </div>
  )
}

export default MonthData
