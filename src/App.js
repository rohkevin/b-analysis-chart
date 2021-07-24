import './App.css';
import ChartContainer from './components/ChartContainer';
import MonthData from './components/MonthData';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider >
      <div id="app-container">
        <div id="component-container">
          <MonthData />
          <ChartContainer />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
