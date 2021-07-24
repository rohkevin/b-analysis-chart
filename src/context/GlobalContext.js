import React, { createContext, useContext, useReducer } from 'react'
import { AppReducer } from './AppReducer'
import { data } from '../data.js'

const initialState = {
  budget: 0,
  data: [],
  monthData: {month: '', monthToText: '', spending: 0, income: 0}
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


  return (
    <GlobalContext.Provider value ={{
      data: state.data,
      budget: state.budget,
      // spendings: state.spendings,
      // incomes: state.incomes,
      monthData: state.monthData,
      getData, getBudget, getMonthData,

    }}>
      { children }
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(GlobalContext)
}