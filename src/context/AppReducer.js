import { compareMonths } from "../helper/helper";

export const AppReducer = (state, action) => {
  switch(action.type) {
    case 'GET_DATA':
      let newData = [];
      let { spending, income } = action.payload;
      // Case I: Ideal case
      // Case II: Same length, different spending and income months (11 in spending, 6 in income)
      newData = spending.map(spendingItem => {
        return {
          month: spendingItem.month,
          spending: spendingItem.spending,
          income: 0, // Initialize to 0
        }
      })
      
      income.forEach(incomeItem => {
        let existingMonthData = newData.find(spendingItem => spendingItem.month === incomeItem.month);
        if (existingMonthData) {
          existingMonthData.income = incomeItem.income;
        }
        else {
          newData.push({
            month: incomeItem.month,
            spending: 0,
            income: incomeItem.income
          });
        }
      })
      // Use helper function compareMonths to sort months in chronological order
      newData.sort(compareMonths);
      return {
        ...state,
        data: newData
      }
    case 'GET_BUDGET':
      return {
        ...state,
        budget: action.payload
      }

    default: 
      return state;
  }
}