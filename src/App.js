import logo from './logo.svg';
import './App.css';
import HooksCounterTwo from './hooksCounter'
import HooksCounterThree from './hooksCounterThree'
import SideEffect from './sideEffects1'
import SideEffectsCleanup from './sideEffectsCleanup'
import DataFetching from './Datafetching'
import CountReducer from './CounterReducer'

function App() {
  return (
    <div className="App">
      <CountReducer />
    </div>
  );
}

export default App;
