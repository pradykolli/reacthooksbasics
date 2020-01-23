import React from 'react';
import './App.css';
import HooksUseState from './Components/HooksUseState';
import HooksUseStateUsingObject from './Components/HooksUseStateUsingObject';
import HooksUseStateWithArrays from './Components/HooksUseStateWithArrays';
import HooksUSeEffect from './Components/HooksUSeEffect';
import HookUseEffectToFetchData from './Components/HookUseEffectToFetchData';
import HooksUseEffectToFetchSinglePost from './Components/HooksUseEffectToFetchSinglePost';

function App() {
  return (
    <div className="App">
      <div className="Modules">
        <h3>Hooks using state of type number</h3>
        <HooksUseState />
        
        <br/>
     </div>
     <div className="Modules">
        <h3>Hooks using a state of type object</h3>
        <HooksUseStateUsingObject />
        <br/>
     </div>
     <div className="Modules">
        <h3>Hooks using a state of type array</h3>
        <HooksUseStateWithArrays />
        <br/>
     </div>
     <div className="Modules">
        <HooksUSeEffect />
        <br/>
     </div>
     <div className="Modules">
        <HookUseEffectToFetchData />
        <br/>
     </div>
     <div className="Modules">
        <HooksUseEffectToFetchSinglePost />
        <br/>
     </div>
    </div>
  );
}

export default App;
