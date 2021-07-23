export const AppReducer = (state, action) => {
  switch(action.type) {
    case 'GET_BUDGET':
      return {
        ...state,
        budget: action.payload
      }

    case 'GET_SPENDINGS':
      return {
        ...state,
        spendings: action.payload
      }
    
    case 'GET_INCOMES':
      return {
        ...state,
        incomes: action.payload
      }

    default: 
      return state;
  }
}