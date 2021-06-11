
import React from 'react';              //Reactを読み込んでいる
import { Chart } from '@antv/g2';
 
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
                <p>AntV Chart</p>
                <br/>
                <div id="container" />
            </div>
        );
    }
}

export default chart2;                   //page1を出力する為に必要