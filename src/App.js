import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import home from './home';
import test_chart1 from './test_chart1'; //追加　chart1を読み込んでいる
import chart2 from './chart2'; //追加　chart2を読み込んでいる
import tooltip from './tooltip'; //追加　chart2を読み込んでいる
import chart3 from './chart3'; //追加　chart2を読み込んでいる

import {Helmet} from "react-helmet";

import sitename from './img/logo.svg'

function App() {

  return (
    <div>
        <header id="header">
          <div class="wfx">
            <nav>
              <div data-flex data-flex-align="center">
                <div class="left" data-flex-item>
                  <div data-flex>
                    <div data-flex-item>
                      <div>
                        <h1 id="site-name"><img src={sitename} alt="EyeFarm Cloud"/></h1>
                      </div>
                    </div>
                    <div data-flex-item><i class="separator"></i></div>
                    <div data-flex-item>
                      <nav data-as-menu id="main-menu">
                        <ul>
                          <li data-menu-root>
                            <a href="#">
                              <label>メニュー&nbsp;<i class="far fa-chevron-down"></i></label>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div data-flex-item><i class="separator"></i></div>
                    <div data-flex-item>
                      <nav data-as-menu id="lab-menu">
                        <ul>
                          <li data-menu-root>
                            <a href="#">
                              <label><i class="far fa-function"></i>&nbsp;<i class="far fa-chevron-down"></i></label>
                            </a>
                            <ul>
                              <li>
                                <a href="#" onclick="sample_dialog();">
                                  <span class="fa-stack">
                                    <i class="fas fa-square fa-stack-2x"></i>
                                    <i class="far fa-flask fa-stack-1x fa-inverse"></i>
                                  </span>
                                  <label>Dialog</label>
                                </a>
                              </li> 
                              <li>
                                <a href="#" onclick="sample_notification();">
                                  <span class="fa-stack">
                                    <i class="fas fa-square fa-stack-2x"></i>
                                    <i class="far fa-flask fa-stack-1x fa-inverse"></i>
                                  </span>
                                  <label>Notification</label>
                                </a>
                              </li> 
                            </ul>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div class="right" data-flex-item>
                  <nav id="personal-menu">
                    <div data-flex>
                      <div data-flex-item>
                        <nav data-as-menu="notification">
                          <ul>
                            <li data-menu-root>
                              <a href="#">
                                <label><i class="fal fa-bell"></i></label>
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                      <div data-flex-item>
                        <nav data-as-menu="messages">
                          <ul>
                            <li data-menu-root> 
                              <a href="#">
                                <label><i class="fal fa-envelope"></i></label>
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                      <div data-flex-item>
                        <nav data-as-menu="user">
                          <ul>
                            <li data-menu-root>
                              <a href="#">
                                <span class="icon"><img src="img/user-icon.jpg" alt=""/></span>
                                <label>ニッポー太郎</label>
                              </a>
                              <ul>
                                <li>
                                  <a id="switch-to-mobile" href="#">
                                    <span class="fa-stack">
                                      <i class="fas fa-square fa-stack-2x"></i>
                                      <i class="fas fa-mobile fa-stack-1x fa-inverse"></i>
                                    </span>
                                    <label>モバイル版を表示する</label>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <span class="fa-stack">
                                      <i class="fas fa-square fa-stack-2x"></i>
                                      <i class="fal fa-print fa-stack-1x fa-inverse"></i>
                                    </span>
                                    <label>印刷</label>
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
            </nav>
          </div>
        </header>
    
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/test_chart1" component={test_chart1} />　//追加　URLでpageを指定するとpageを表示する
          <Route exact path="/chart2" component={chart2} />　//追加　URLでpageを指定するとpageを表示する
          <Route exact path="/tooltip" component={tooltip} />　//追加　URLでpageを指定するとpageを表示する
          <Route exact path="/chart3" component={chart3} />　//追加　URLでpageを指定するとpageを表示する
        </Switch>
      </BrowserRouter>
      <footer id="footer">
        <div class="wfx">
          <div class="align-center">
            <small id="copyright">&copy; NIPPO CO.,LTD All Rights Reserved.</small>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;
