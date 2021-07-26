import React, { useEffect } from 'react'
import { useGlobalContext } from '../context/GlobalContext'

function MainComponent({ flex, children }) {
  const { getData, getBudget, findMax, getGraphFlex } = useGlobalContext();
  
  useEffect(() => {
    getGraphFlex(flex);
    getData();
  }, []);
  
  useEffect(() => {
    getBudget();
    findMax();
  }, [flex])

  return (
    <div id="component-container" >
      { children }
    </div>
  )
}

export default MainComponent
