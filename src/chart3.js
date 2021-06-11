
import React from 'react';              //Reactを読み込んでいる
import { Chart } from '@antv/g2';
 
import chart3 from './chart3'; //追加　chart2を読み込んでいる

import {Helmet} from "react-helmet";

import "./css/init-kit.css"
import "./css/variables.css"
import "./css/main.css"
import "./css/elements.as.css"
import "./css/elements.components.css"
import "./css/elements.styled.css"
import "./css/elements.classes.css"
import "./css/flex.css"
import "./css/grid.css"
import "./css/layouts.css"
import "./css/arrangement.css"
import "./fonts/fontawesome-pro-5.11.2-web/css/all.min.css"
 
import listviewicon from './img/user-icon.jpg'
 
class chart2 extends React.Component {   //page1クラスにReact.Componentを継承する

    render() {                          //画面表示の為のrenderメソッドを定義する
    
      function findMaxMin(data) {
        let maxValue = 0;
        let minValue = 50000;
        let maxObj = null;
        let minObj = null;
        for (const d of data) {
          if (d.Close > maxValue) {
            maxValue = d.Close;
            maxObj = d;
          }
          if (d.Close < minValue) {
            minValue = d.Close;
            minObj = d;
          }
        }
        return { max: maxObj, min: minObj };
      }
      
      fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/nintendo.json')
        .then(res => res.json())
        .then(data => {
          const chart = new Chart({
            container: 'container',
            autoFit: true,
            height: 500,
          });
          chart.data(data);
          chart.scale({
            Date: {
              tickCount: 10
            },
            Close: {
              nice: true,
            }
          });
          chart.axis('Date', {
            label: {
              formatter: text => {
                const dataStrings = text.split('.');
                return dataStrings[2] + '-' + dataStrings[1] + '-' + dataStrings[0];
              }
            }
          });
          
          chart.tooltip({
            triggerOn: 'mousemove' | 'click' | 'none', // tooltip 的触发方式，默认为 mousemove
            crosshairs: {
              type: 'rect' || 'x' || 'y' || 'cross',
              style: {
                // 图形样式
              }
            }, // tooltip 辅助线配置
            offset: 10, // tooltip 距离鼠标的偏移量
            containerTpl: '<div class="g2-tooltip">'
              + '<div class="g2-tooltip-title" style="margin:10px 0;"></div>'
              + '<ul class="g2-tooltip-list"></ul></div>', // tooltip 容器模板
            itemTpl: '<li data-index={index}><span style="background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;"></span>{name}: {value}</li>', // tooltip 每项记录的默认模板
            inPlot: true, // 将 tooltip 展示在指定区域内
            shared: true || false, // 默认为 true, false 表示只展示单条 tooltip
            position: 'left' || 'right' || 'top' || 'bottom' ,// 固定位置展示 tooltip
            itemTpl: '<li>{x}: {y}</li>'
          });
      
          chart.line().position('Date*Close');
          // annotation
          const { min, max } = findMaxMin(data);
          chart.annotation().dataMarker({
            top: true,
            position: [max.Date, max.Close],
            text: {
              content: '全部峰值：' + max.Close,
            },
            line: {
              length: 30,
            }
          });
          chart.annotation().dataMarker({
            top: true,
            position: [min.Date, min.Close],
            text: {
              content: '全部谷值：' + min.Close,
            },
            line: {
              length: 50,
            }
          });
          
          chart.line().position('x*y').tooltip('x*y', (x, y) => {
            return {
              x,
              y
            }; // 返回的参数名对应 itemTpl 中的变量名
          });
      
      
          
          chart.render();
        });
    
        return (
            <div>
             
              <main>
                <article>
                  <div class="wfx">
                    <header id="page-header" data-grid>
                      <div data-grid-cell>
                        <div data-layout="arranger">
                          <div data-position="right">
                            <div data-component="button-group">
                              <button data-styled="" data-variant="ok" data-function="edit_view_item">表示項目の設定</button>
                              <a href="0201.html" data-styled data-variant="ok">最新値表示</a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div data-grid-cell>
                        <div data-layout="arranger">
                          <div data-position="left">
                            <h2 id="page-name">観測グラフ</h2>
                          </div>
                        </div>
                      </div>
                    </header>
                    <div id="page-body" data-grid data-grid-columns="2" data-grid-columns-mobile="1">
                      <div data-grid-cell="canvas" data-grid-span="2" data-grid-span-mobile="1">
                        <div data-grid>
                          <div data-grid-cell>
                            <section>
                              <div data-grid data-variant="^h-ruled">
                                <div data-grid-cell class="summary-heading">
                                  <header data-spec-component="summary-heading">
                                    <div data-part="icon">
                                      <i><img class="list-view-icon" src={listviewicon} alt=""/></i>
                                    </div>
                                    <div data-part="heading-id">
                                      <label data-component="itemized">
                                        <span data-part="marker" data-variant="framed">
                                          <em>ID</em>
                                        </span>
                                        <span>12345678</span>
                                      </label>
                                    </div>
                                    <div data-part="heading-name">
                                      <h3>トマト - 北陵町</h3>
                                    </div>
                                  </header>
                                </div>
                                <div data-grid-cell>
                                  <div class="section-body">
                                    <div data-grid>
                                      <div data-grid-cell>
                                        <div data-layout="graph">
                                          <div data-part="header-items">
                                            <div data-layout="arranger" data-variant-mobile="^wrap">
                                              <div data-position="left">
                                                <div data-component="toolbar-group">
                                                  <div data-component="toolbar">
                                                    <label>基準日</label>
                                                    <input data-styled type="text" data-js-lib="flatpickr-date" value="2019/12/01"/>
                                                  </div>
                                                  <div data-component="toolbar">
                                                    <label>時間</label>
                                                    <input data-styled type="text" data-js-lib="flatpickr-time" value="00:00"/>
                                                  </div>
                                                </div>
                                              </div>
                                              <div data-position="right">
                                                <div data-component="toolbar">
                                                  <label>自動更新</label>
                                                  <input data-styled type="checkbox" data-variant="switch" value="true"/>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div data-part="body-items">
                                            <div data-part="nav-left">
                                              <button data-styled data-variant="^maximized"><i class="fas fa-caret-left"></i></button>
                                            </div>
                                            <div data-part="graph">
                                              <div id="container" />
                                            </div>
                                            <div data-part="nav-right">
                                              <button data-styled data-variant="^maximized"><i class="fas fa-caret-right"></i></button>
                                            </div>
                                            <div data-part="locator">
                                              <input data-styled type="range" data-variant="graph-locator"/>
                                            </div>
                                          </div>
                                          <div data-part="footer-items">
                                            <div data-part="item">
                                              <ul data-component="legend" data-columns="6" data-columns-mobile="2">
                                                <li>
                                                  <span data-part="marker"><i class="fas fa-square-full"></i></span>
                                                  <label>項目名 1</label>
                                                </li>
                                                <li>
                                                  <span data-part="marker"><i class="fas fa-square-full"></i></span>
                                                  <label>項目名 2</label>
                                                </li>
                                                <li>
                                                  <span data-part="marker"><i class="fas fa-square-full"></i></span>
                                                  <label>項目名 3</label>
                                                </li>
                                                <li>
                                                  <span data-part="marker"><i class="fas fa-square-full"></i></span>
                                                  <label>項目名 4</label>
                                                </li>
                                                <li>
                                                  <span data-part="marker"><i class="fas fa-square-full"></i></span>
                                                  <label>項目名 5</label>
                                                </li>
                                                <li>
                                                  <span data-part="marker"><i class="fas fa-square-full"></i></span>
                                                  <label>項目名 6</label>
                                                </li>
                                                <li>
                                                  <span data-part="marker"><i class="fas fa-square-full"></i></span>
                                                  <label>項目名 7</label>
                                                </li>
                                                <li>
                                                  <span data-part="marker"><i class="fas fa-square-full"></i></span>
                                                  <label>Very loooooooong item name</label>
                                                </li>
                                              </ul>
                                            </div>
                                            <div data-part="item">
                                              <div data-component="toolbar-group">
                                                <div data-component="toolbar">
                                                  <label>表示範囲</label>
                                                  <ul data-component="segmented-button" data-dev-behaviour="exclusive">
                                                    <li>
                                                      <button data-state="active">6時間</button>
                                                    </li>
                                                    <li>
                                                      <button>12時間</button>
                                                    </li>
                                                    <li>
                                                      <button>24時間</button>
                                                    </li>
                                                    <li>
                                                      <button>3日</button>
                                                    </li>
                                                    <li>
                                                      <button>5日</button>
                                                    </li>
                                                  </ul>
                                                </div>
                                                <div data-component="toolbar">
                                                  <label>スパン</label>
                                                  <ul data-component="segmented-button" data-dev-behaviour="exclusive">
                                                    <li>
                                                      <button data-state="active">フル</button>
                                                    </li>
                                                    <li>
                                                      <button>24時間</button>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </section>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </main>
            </div>
        );
    }
}



export default chart2;                   //page1を出力する為に必要