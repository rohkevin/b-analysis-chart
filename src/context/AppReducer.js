import { compareMonths } from "../helper/helper";
import moment from 'moment';

export const AppReducer = (state, action) => {

  switch(action.type) {
    case 'GET_DATA':
      let newData = [];
      let { spending, income } = action.payload;
      // Case I: Ideal case
      // Case II: Same length, different spending and income months (11 in spending, 6 in income)

      // Check if spending and income data exists
      if (spending || income) {
        if (spending) {
          newData = spending.map(spendingItem => {
    
            return {
              month: spendingItem.month,
              monthToText: moment().month(spendingItem.month-1).format("MMMM"),
              spending: spendingItem.spending,
              income: 0, // Initialize to 0
            }
          })

        }
        
        income.forEach(incomeItem => {
          let existingMonthData = newData.find(spendingItem => spendingItem.month === incomeItem.month);
          if (existingMonthData) {
            existingMonthData.income = incomeItem.income;
          }
          else {
            newData.push({
              month: incomeItem.month,
              monthToText: moment().month(incomeItem.month-1).format("MMMM"),
              spending: 0,
              income: incomeItem.income
            });
          }
        })
        // Use helper function compareMonths to sort months in chronological order
        newData.sort(compareMonths);
        // Initializes default month value to the last month in the array
        let initialMonth = {
          month: newData[newData.length-1].month,
          monthToText: newData[newData.length-1].monthToText,
          spending: newData[newData.length-1].spending,
          income: newData[newData.length-1].income
        }
        return {
          ...state,
          data: newData,
          monthData: initialMonth
        }

      } else {
        return {
          ...state
        }
      }

    case 'GET_BUDGET':
      let newBudget = 0; // No negative budget allowed
      if (action.payload > 0) {
        newBudget = action.payload;
      }
      return {
        ...state,
        budget: newBudget
      }

    case 'FIND_MAX':
      let newMaxValue = 0;
      
      for (let i = 0; i < state.data.length; i++) {
        if (state.data[i].spending > newMaxValue) {
          newMaxValue = state.data[i].spending;
        }
        if (state.data[i].income > newMaxValue) {
          newMaxValue = state.data[i].income;
        }
      }
      // If budget is larger than any of income or spendings, set largest value as budget
      if (state.budget > newMaxValue) {
        newMaxValue = state.budget;
      }
      return {
        ...state,
        maxValue: newMaxValue
      }
    
    case 'GET_MONTH_DATA':
      let newMonthData = state.data.find(dataMonth => dataMonth.month === action.payload);
      return {
        ...state,
        monthData: newMonthData
      }
   
    case 'GET_BUDGET_HEIGHT':
      // Label clearance explanation:
      // (Font size (em) + top and bottom padding (em) + top margin (em))*font-size + 1px to prevent layout shift when label is selected (bolded)
      // In the future this code will need to change to something more robust.
      let labelClearance = (1+2*0.25+0.5)*16 + 1;
      let graphHeight = state.chartContainerHeight - labelClearance;
      let newHeight = labelClearance + graphHeight*(state.budget / state.maxValue);
      return {
        ...state,
        budgetHeight: newHeight
      }

    default: 
      return state;
  }
}