import React, { useReducer } from 'react';
import './App.css';
// import HooksCounterTwo from './hooksCounter'
// import HooksCounterThree from './hooksCounterThree'
// import SideEffect from './sideEffects1'
// import SideEffectsCleanup from './sideEffectsCleanup'
// import DataFetching from './Datafetching'
// import CountReducer from './CounterReducer'
// import CountReducerTwo from './CounterTwoReducer'
// import ComponentA from './components/ComponentA'
// import ComponentB from './components/ComponentB'
// import ComponentC from './components/ComponentC'
// import CounterOne from './customHooks/CounterOne'
// import CounterTwo from './customHooks/CounterTwo'
import UserForm from './customHooksTwo/UserForm'

// import DataFetchingReducer from './partTwo/DataFetchingReducer'

// export const CountContext = React.createContext()

// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case 'increment':
//       return state + 1;
//     case 'decrement':
//       return state - 1;
//     case 'reset':
//       return initialState;
//     default:
//       return state;
//   }
// }

// function App() {

//   const [count, dispatch] = useReducer(reducer, initialState)
//   return (
//     <CountContext.Provider
//       value={{ countState: count, countDispatch: dispatch }}
//     >
//       <div className="App">

//         Count - {count}
//         <ComponentA />
//         <ComponentB />
//         <ComponentC />
//       </div>
//     </CountContext.Provider>
//   );
// }

function App() {
  return (
    <div>
      <UserForm />
    </div>
  )
}

export default App;


