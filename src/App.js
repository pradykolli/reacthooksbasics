import React from 'react';
import './App.css';
import HooksUseState from './Components/HooksUseState';
import HooksUseStateUsingObject from './Components/HooksUseStateUsingObject';
import HooksUseStateWithArrays from './Components/HooksUseStateWithArrays';

function App() {
  return (
    <div className="App">
     <HooksUseState />
     <br/>
     <HooksUseStateUsingObject />
     <br/>
     <HooksUseStateWithArrays />
    </div>
  );
}

export default App;
