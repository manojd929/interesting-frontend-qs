import React from 'react';
import Page from './pages/Page';
import './style.css';

const App = () => {
  return (
    <div className="app">
      <h1>Tree Builder</h1>
      <main>
        <div className="datetime-now">{new Date().toLocaleString()}</div>
        <hr />
        <Page />
      </main>
    </div>
  );
};

export default App;
