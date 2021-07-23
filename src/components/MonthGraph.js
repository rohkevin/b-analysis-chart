import React from 'react'

function MonthGraph({month, spending, income}) {
  return (
    <div>
      <p>Month {month && month}</p>
      <p>Spending: {spending && spending}</p>
      <p>Income: {income && income}</p>
    </div>
  )

}

export default MonthGraph
