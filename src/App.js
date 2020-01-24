import React, { createContext, useReducer } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HooksUseState from './Components/HooksUseState';
import HooksUseStateUsingObject from './Components/HooksUseStateUsingObject';
import HooksUseStateWithArrays from './Components/HooksUseStateWithArrays';
import HooksUSeEffect from './Components/HooksUSeEffect';
import HookUseEffectToFetchData from './Components/HookUseEffectToFetchData';
import HooksUseEffectToFetchSinglePost from './Components/HooksUseEffectToFetchSinglePost';
import HooksUseContext from './Components/HooksUseContext';
import HooksUseReducers from './Components/HooksUseReducers';
import HooksuseReducersWithContext from './Components/UseReducerswithcontext/HooksuseReducersWithContext';
import HooksFetchDataWithUseReducers from './Components/HooksFetchDataWithUseReducers';

export const UserContext = createContext()
export const AkaContext = createContext()



export const StateContext = createContext()
function App() {
   const globalState = 0

   const globalReducer = (state, action) => {
      switch (action) {
         case 'increment': return state + 1
         default: return state
      }
   }
   const [state, dispatch] = useReducer(globalReducer, globalState)
   return (
      <StateContext.Provider value={{ appLevelState: state, appLevelDispatch: dispatch }}>
         <UserContext.Provider value="Pradeep Kolli">
            <AkaContext.Provider value="Prady">
               <div className="App">
                  <div><h2> Count controlled at app level from component C Count is - {state}</h2></div>
                  <div className="Modules">
                     <h3>Hooks using state of type number</h3>
                     <HooksUseState />
                     <br />
                  </div>
                  <div className="Modules">
                     <h3>Hooks using a state of type object</h3>
                     <HooksUseStateUsingObject />
                     <br />
                  </div>
                  <div className="Modules">
                     <h3>Hooks using a state of type array</h3>
                     <HooksUseStateWithArrays />
                     <br />
                  </div>
                  <div className="Modules">
                     <HooksUSeEffect />
                     <br />
                  </div>
                  <div className="Modules">
                     <HookUseEffectToFetchData />
                     <br />
                  </div>
                  <div className="Modules">
                     <HooksUseEffectToFetchSinglePost />
                     <br />
                  </div>
                  <div className="Modules">
                     <HooksUseContext />
                     <br />
                  </div>
                  <div className="Modules">
                     <HooksUseReducers />
                     <br />
                  </div>
                  <div className="Modules">
                     <HooksuseReducersWithContext />
                     <br />
                  </div>
                  <div className="Modules">
                     <HooksFetchDataWithUseReducers />
                     <br />
                  </div>
               </div>
            </AkaContext.Provider>
         </UserContext.Provider>
      </StateContext.Provider>
   );
}

export default App;
