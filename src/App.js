import React from 'react';
import './App.css';
import Search from './Search'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>The Spoonies</h1>
        <p>Nominate up to 5 of your favorite movies for consideration for this year's Spoonie awards</p>
        <Search />
      </header>
    </div>
  );
}

export default App;