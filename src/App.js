import './App.css';
import ChartContainer from './components/ChartContainer';
import MonthData from './components/MonthData';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <GlobalProvider >
      <div id="app-container">
        <MonthData />
        <ChartContainer />
      </div>
    </GlobalProvider>
  );
}

export default App;
