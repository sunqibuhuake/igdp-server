/**
 * Created by Administrator on 2018-07-13.
 */
import React from 'react'
import $ from 'jquery'
import echarts from 'echarts'
import color from '../../utils/color'
export default class Line extends React.PureComponent{
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
      tooltip : {
        trigger: 'axis',
      },
      legend: {
        show: false,
        //data: ['2010', '2015']
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
        data: ['2010','2015'],
        axisTick: {
          show: false,
        },
      },
      series: data.map((item, index) => {
        return  {
          name: item.name,
          type: 'line',
          lineStyle: {
            color: color.list[index]
          },
          itemStyle: {
            color: color.list[index]
          },
          data: item.list.map(obj => {
            return {
              name: obj.name,
              value: obj.value,
              //itemStyle: {
              //  color: color.list[index]
              //},
              //label: {
              //  normal:{
              //    show: item.value > 0
              //  }
              //}
            }
          })
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
