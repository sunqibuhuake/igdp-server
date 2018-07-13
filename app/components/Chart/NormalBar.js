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
        left: '120',
        right: '12px',
        bottom: '24',
        containLabel: false
      },
      xAxis:  {
        type: 'value',
        axisLine: {
          show: false
        },
        axisTick: {
          show: false,
        },

      },
      yAxis: {
        type: 'category',
        data: data.map(item => {
          if (item.name.length > 16) {
            return item.name.slice(0, 14) + '...';
          } else {
            return item.name
          }
        }),
        axisTick: {
          show: false,
        },
      },
      series: [
        {
          name: 'Score',
          type: 'bar',
          stack: 'sum',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: data.map(item => {
            return {
              value: item.value,
              itemStyle: {
                color: color.p
              },
              label: {
                normal: {
                  show: item.value > 0,
                  position: 'inside'
                }
              }
            }
          })
        },
        {
          name: 'Gap',
          type: 'bar',
          stack: 'sum',
          label: {
            normal: {
              show: true,
              position: 'insideRight'
            }
          },
          data: data.map(item => {
            return {
              value: item.gap,
              itemStyle: {
                color: color.s
              },
              label: {
                normal: {
                  show: item.gap > 0,
                  position: 'inside'
                }
              }
            }
          })
        },
      ]
    }

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
