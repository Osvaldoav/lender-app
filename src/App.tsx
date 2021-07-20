import React from 'react';
import { Content } from './components/Content/Content';
import './App.scss';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Content/>
    </div>
  );
}

export default App;
