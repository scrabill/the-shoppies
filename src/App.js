import React from 'react';
import './App.css';
import Search from './Search.js'

function App() {
  return (
    <div className="App">
        <h1>The Shoppies</h1>
        <h2 class="emoji"><span role="img" aria-label="trophy">🏆</span></h2>
        <p>Nominate up to 5 of your favorite movies for consideration for this year's Shoppie awards</p>
        <Search />
    </div>
  );
}

export default App;