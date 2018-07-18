/**
 * Created by Administrator on 2018-07-13.
 */
import React from 'react'
import $ from 'jquery'
import echarts from 'echarts'
import color from '../../utils/color'
export default class NormalBar extends React.PureComponent{
  constructor(props) {
    super(props)
    this.state = {
      id: 'chart-' + (Math.random() + '').split('.')[1]
    }
  }
  componentDidMount() {
    this.initContainerSize()
    this.initChart()
    this.setOption(this.props.data.reverse())
  }

  initContainerSize() {
    const elem = $('#' + this.state.id);
    elem.css({
      height: elem.height() + 'px',
      width: elem.width() + 'px'
    })

  }

  componentWillReceiveProps(np) {
    this.setOption(np.data.reverse())
  }

  initChart() {
    this.chart = echarts.init(document.getElementById(this.state.id));
  }

  setOption(data) {

    const option = {
      color: ['red'],
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        show: false,
        data: ['Score', 'Gap']
      },
      grid: {
        left: '60',
        right: '12px',
        bottom: '24',
        containLabel: false
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
        type: 'category',
        data: data.map(item => {
          const start = (item.name - 1.5).toFixed(1)
          return start + '~' + item.name
          //return item.name
        }),
        axisTick: {
          show: false,
        },
      },
      series: [
        {
          name: 'Frequency',
          type: 'bar',
          itemStyle: {
            color: color.p
          },
          label: {
            normal: {
              show: false,
              position: 'insideRight'
            }
          },
          data: data.map(item => {
            return {
              value: item.value
            }
          })
        }
      ]
    }

    this.chart.setOption(option, false)

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
