import React, { createContext } from 'react';
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

export const UserContext = createContext()
export const AkaContext = createContext()
function App() {
   return (
      <UserContext.Provider value="Pradeep Kolli">
         <AkaContext.Provider value="Prady">
            <div className="App">
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
            </div>
         </AkaContext.Provider>
      </UserContext.Provider>
   );
}

export default App;
