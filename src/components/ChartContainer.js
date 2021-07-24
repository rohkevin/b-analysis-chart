import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import Budget from './Budget';
import MonthGraph from './MonthGraph';

function ChartContainer() {
  const { getData, data, getBudget, budget, findMax } = useGlobalContext();
  useEffect(() => {
    getData();
    getBudget();
    findMax();
  }, [])

  // Chart height set to 200px, change as need be
  // Set max spending / income as height reference point
  return (
    <div className="chart-container" style={{height: '200px'}}>
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
      <Budget budget={budget} />
    </div>
  )
}

export default ChartContainer
