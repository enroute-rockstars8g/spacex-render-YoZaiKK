import React from 'react';
import logo from './logo.svg';
import './App.css';
import {DragonDisplay} from './components/missions/component';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Esta no es una pagina de quimica
        </a>
      </header>
      <p>hola</p> */}
      <DragonDisplay />
    </div>
  );
}

export default App;
