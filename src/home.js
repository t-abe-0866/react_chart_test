import logo from './logo.svg';
import './App.css';
import React from 'react';              //Reactを読み込んでいる
import { Link } from 'react-router-dom';// 追加 Linkタブを読み込む

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to={`/test_chart1`}>Scatter Plot</Link>
        <Link to={`/chart2`}>Line Chart</Link>
        <Link to={`/tooltip`}>tooltip</Link>
      </header>
    </div>
  );
}

export default App;
