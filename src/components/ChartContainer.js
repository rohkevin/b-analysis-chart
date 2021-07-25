import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import Budget from './Budget';
import BudgetLine from './BudgetLine';
import MonthGraph from './MonthGraph';

function ChartContainer() {
  const { getData, data, getBudget, budget, findMax, chartContainerHeight } = useGlobalContext();
  useEffect(() => {
    getData();
    getBudget();
    findMax();
  }, [])

  // Chart height default to 200px
  return (
    <div className="chart-container" style={{height: `${chartContainerHeight || 200}px`}}>
      <div className="graphs-container">
        {
          data && data.map(dataMonth => {
            return (
              <MonthGraph 
                key={dataMonth.month} 
                month={dataMonth.month} 
                monthToText={dataMonth.monthToText}
                spending={dataMonth.spending} 
                income={dataMonth.income} 
              />
            )
          })
        }
      </div>
      <BudgetLine />
      <Budget budget={budget} />

    </div>
  )
}

export default ChartContainer
