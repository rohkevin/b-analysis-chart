import React from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import Budget from './Budget';
import BudgetLine from './BudgetLine';
import MonthGraph from './MonthGraph';

function ChartContainer() {
  const { data, budget, chartContainerHeight } = useGlobalContext();

  return (
    <div className="chart-container" style={{height: `${chartContainerHeight || 200}px`}}>
      <div className="graphs-container">
        {
          data.length > 0 && data.map(dataMonth => {
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
      {data.length > 0 && <BudgetLine />}
      {data.length > 0 && <Budget budget={budget} />}

    </div>
  )
}

export default ChartContainer
