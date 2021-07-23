import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import MonthGraph from './MonthGraph';

function ChartContainer() {
  const { getData, data } = useGlobalContext();
  useEffect(() => {
    getData();
  }, [])


  return (
    <div className="chart-container">
      {
        data && data.map(dataMonth => {
          return (
            <MonthGraph 
              key={dataMonth.month} 
              month={dataMonth.month} 
              spending={dataMonth.spending} 
              income={dataMonth.income} 
            />
          )
        })
      }
    </div>
  )
}

export default ChartContainer
