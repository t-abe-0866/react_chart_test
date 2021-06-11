
import React from 'react';              //Reactを読み込んでいる
import { Chart, registerInteraction } from '@antv/g2';
 
class test_chart1 extends React.Component {   //page1クラスにReact.Componentを継承する
  
  render() {                          //画面表示の為のrenderメソッドを定義する
    registerInteraction('drag-move', {
      start: [{ trigger: 'plot:mousedown', action: 'scale-translate:start' }],
      processing: [{ trigger: 'plot:mousemove', action: 'scale-translate:translate', throttle: {wait: 100, leading: true, trailing: false} }],
      end: [{ trigger: 'plot:mouseup', action: 'scale-translate:end' }],
    });
  
  fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/scatter.json')
    .then((res) => res.json())
    .then((data) => {
      const chart1 = new Chart({
        container: 'container1',
        autoFit: true,                  //teautoFit: true の場合、チャート コンテナの幅と高さが自動的に取得されます。ユーザーが高さを設定すると、ユーザーが設定した高さが優先されます。
        height: 500,                    //高さ
        limitInPlot: true               //座標系の範囲を超えてジオメトリをカットするかどうか。
      });
      chart1.data(data);
      chart1.scale({
        height: { nice: true },
        weight: { nice: true },
      });
      chart1.animate(false);             //アニメーション構成。
      chart1
        .point()
        .position('height*weight')
        .color('gender')
        .shape('circle')
        .style({
          fillOpacity: 0.85           //シェイプの不透明度を塗りつぶします
        });
        chart1.tooltip({
  shared: true,
  customContent: (name, items) => {
    const container = document.createElement('div');
    container.className = 'g2-tooltip';
    const title = `<div class="g2-tooltip-title" style="margin-top: 12px;margin-bottom: 12px;">${name}</div>`;
    let listItem = '';
    items.forEach((item) => {
      listItem += `<li class="g2-tooltip-list-item" data-index={index} style="margin-bottom:4px;display:flex;align-items: center;">
          <span style="background-color:${item?.mappingData?.color || item?.color};" class="g2-tooltip-marker"></span>
          <span style="display:inline-flex;flex:1;justify-content:space-between">
          <span style="margin-right: 16px;">${item?.name}:</span><span>${item?.value}</span>
          </span>
      </li>`;
    });
    container.innerHTML = title + listItem;
    return container;
  }
});
      chart1.interaction('view-zoom');
      chart1.interaction('drag-move');
      
      chart1.getCanvas().on('mousewheel', ev=> {ev.preventDefault();})

      chart1.render();
      
    });
        
    return (
      <div>
        <p>AntV Chart</p>
        <br/>
        <div id="container1" />
      </div>
    );
  }
}

export default test_chart1;                   //page1を出力する為に必要