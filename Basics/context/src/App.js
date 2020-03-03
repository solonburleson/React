import React, { useState } from 'react';
import './App.css';
import MyContext from './context/MyContext';
import Wrapper from './components/Wrapper';

function App() {
  const [name, setName] = useState({
    name: ''
  });

  return (
    <div className="App">
      <MyContext.Provider value={{name, setName}}>
        <Wrapper />
      </MyContext.Provider>
    </div>
  );
}

export default App;
