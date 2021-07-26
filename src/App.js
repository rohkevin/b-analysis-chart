/* TODO:
Optimize current component:
> Default state for budgetHeight
  - Fix so that the default height is the graph label clearance. 
  - Currently relies on the default 1em font-size of 16px and the padding & margin values of the label
  - Another method to getting the 0 height of the graphs is to use .getBoundingClientRect() on a graph element to get the fixed position of the bottom of graph, with respect to the page 
    Pros: more accurate in locating reference point
    Cons: more complex code, messier, animation relies on fixed point on page instead of absolute

Additional features for future:
> Filter for organizing
  - For example, organizing graphs by spending or income amounts, smallest to greatest (vice-versa)

> Detailed view of month
  - Tapping the month would zoom into detailed insights of the month
  - For example, spending can be divided into general categories (rent, utilities, entertainment, etc)

*/

import './App.css';
import ChartContainer from './components/ChartContainer';
import MonthData from './components/MonthData';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider >
      <div id="app-container">
        <a href="https://github.com/rohkevin/b-analysis-chart" rel="norel noreferrer" target="_blank" className="gh-link">View Repo</a>
        <div id="component-container">
          <MonthData />
          <ChartContainer />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
