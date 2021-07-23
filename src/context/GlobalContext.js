import React, { createContext, useContext, useReducer } from 'react'
import { AppReducer } from './AppReducer'
import { data } from '../data.js'

const initialState = {
  budget: 0,
  data: [],
  monthData: {month: '', spending: 0, income: 0}
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
  // const getSpendings = () => {
  //   // Use try catch if getting data from server
  //   dispatch({
  //     type: 'GET_SPENDINGS',
  //     payload: data.spending
  //   })
  // }
  // const getIncomes = () => {
  //   dispatch({
  //     type: 'GET_INCOMES',
  //     payload: data.income
  //   })
  // }
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