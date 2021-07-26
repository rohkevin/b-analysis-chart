import React, { createContext, useContext, useReducer } from 'react'
import { AppReducer } from './AppReducer'
import { data } from '../data.js'

const initialState = {
  budget: 0,
  data: [],
  monthData: {month: '', monthToText: '', spending: 0, income: 0},
  maxValue: 0,
  chartContainerHeight: 200,
  budgetHeight: (1+2*0.25+0.5)*16 + 1, // Graph label clearance
  graphFlex: 1
}
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getData = () => {
    dispatch({
      type: 'GET_DATA',
      payload: data
    })
  }
  const getBudget = () => {
    dispatch({
      type: 'GET_BUDGET',
      payload: data.overall_budget
    })
  }
  const getMonthData = (month) => {
    dispatch({
      type: 'GET_MONTH_DATA',
      payload: month
    })
  }

  const findMax = () => {
    dispatch({
      type: 'FIND_MAX'
    })
  }

  const getBudgetHeight = () => {
    dispatch({
      type: 'GET_BUDGET_HEIGHT'
    })
  }
  
  const getGraphFlex = (flex) => {
    dispatch({
      type: 'GET_GRAPH_FLEX',
      payload: flex
    })
  }

  return (
    <GlobalContext.Provider value ={{
      data: state.data,
      budget: state.budget,
      monthData: state.monthData,
      maxValue: state.maxValue,
      chartContainerHeight: state.chartContainerHeight,
      budgetHeight: state.budgetHeight,
      graphFlex: state.graphFlex,
      getData, getBudget, getMonthData,
      findMax, getBudgetHeight, getGraphFlex
    }}>
      { children }
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}