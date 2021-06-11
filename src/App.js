import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import home from './home';
import test_chart1 from './test_chart1'; //追加　chart1を読み込んでいる
import chart2 from './chart2'; //追加　chart2を読み込んでいる
import tooltip from './tooltip'; //追加　chart2を読み込んでいる

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={home} />
        <Route exact path="/test_chart1" component={test_chart1} />　//追加　URLでpageを指定するとpageを表示する
        <Route exact path="/chart2" component={chart2} />　//追加　URLでpageを指定するとpageを表示する
        <Route exact path="/tooltip" component={tooltip} />　//追加　URLでpageを指定するとpageを表示する
      </Switch>
    </BrowserRouter>
  );
}
export default App;
