import React from 'react';
import './App.css';
import Tabs from './components/Tabs.js';

function App() {
  return (
    <div className="App">
      <Tabs items={['Tab 1', 'Tab 2', 'Tab 3']} />
    </div>
  );
}

export default App;
