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
    this.setOption(this.props.year, this.props.data.reverse())
  }

  initContainerSize() {
    const elem = $('#' + this.state.id);
    elem.css({
      height: elem.height() + 'px',
      width: elem.width() + 'px'
    })

  }

  componentWillReceiveProps(np) {
    this.setOption(np.year, np.data.reverse())
  }

  initChart() {
    this.chart = echarts.init(document.getElementById(this.state.id));
  }

  setOption(year, data) {

    const option = {
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
        }
      },
      xAxis: {
        type: 'category',
        data: [year],
        axisTick: {
          show: false,
        },
      },
      series: data.map((item, index) => {
        return  {
          name: item.name,
          type: 'bar',
          stack: 'sum',
          label: {
            normal: {
              show: true,
              position: 'inside'
            }
          },
          data: [
            {
              value: item.value,
              itemStyle: {
                color: color.list[index]
              },
              label: {
                normal:{
                  show: item.value > 0
                }
              }
            }
          ]
        }
      })
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
