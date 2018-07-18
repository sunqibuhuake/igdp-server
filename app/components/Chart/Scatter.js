/**
 * Created by Administrator on 2018-07-13.
 */
import React from 'react'
import $ from 'jquery'
import echarts from 'echarts'
import color from '../../utils/color'
export default class Scatter extends React.PureComponent{
  constructor(props) {
    super(props)
    this.state = {
      id: 'chart-' + (Math.random() + '').split('.')[1]
    }
  }
  componentDidMount() {
    this.initContainerSize()
    this.initChart()
    this.setOption(this.props.data)
  }

  initContainerSize() {
    const elem = $('#' + this.state.id);
    elem.css({
      height: elem.height() + 'px',
      width: elem.width() + 'px'
    })

  }

  componentWillReceiveProps(np) {
    this.setOption(np.data)
  }

  initChart() {
    this.chart = echarts.init(document.getElementById(this.state.id));
  }

  setOption(data) {

    const option = {
      grid: {
        left: '60',
        right: '12px',
        bottom: '24',
        containLabel: false
      },
      tooltip : {
        trigger: 'item'
      },
      yAxis:  {
        type: 'value',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false,
        },

      },
      xAxis: {
        axisTick: {
          show: false,
        },
      },
      color: ['rgba(106,177, 49,0.6)'],
      series: [{
        symbolSize: 12,
        data: data.list,
        type: 'scatter'
      }]
    };


    this.chart.setOption(option)

  }

  render() {

    const styles = {
      root: {
        height: this.props.height || '100%',
        width: '100%'
      }
    }
    return (
      <div
        style={styles.root}
        id={this.state.id}>

      </div>
    )
  }
}
