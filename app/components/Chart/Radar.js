/**
 * Created by Administrator on 2018-07-13.
 */
import React from 'react'
import $ from 'jquery'
import echarts from 'echarts'
import color from '../../utils/color'
import helper from '../../utils/helper'
export default class Radar extends React.PureComponent{
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

    const max = helper.getMax(data.max.map(item => {
      return item.value;
    }))

    const area_opacity = 0.4

    const option = {
      title: {
        show: false,
        text: '基础雷达图'
      },
      tooltip: {},
      legend: {
        show: false,
        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
      },
      radar: {
        // shape: 'circle',
        name: {
          textStyle: {
            color: '#fff',
            backgroundColor: '#999',
            borderRadius: 3,
            padding: [3, 5]
          }
        },
        indicator: data.max.map(item => {
          return {
            name: item.name,
            max: max
          }
        }),
        splitArea: {
          areaStyle: {
            color: 'white'
          }
        },
      },
      series: [{
        name: '',
        type: 'radar',
        // areaStyle: {normal: {}},
        data : [
          {
            value : data.max.map(item => item.value),
            name : 'Max Any City_I to Imax',
            lineStyle: {
              normal: {
                color: 'transparent',
              }
            },
            areaStyle: {
              normal: {
                opacity: area_opacity,
                color: color.radar['max']
              }
            }
          },
          {
            value : data.min.map(item => item.value),
            name : 'Min Any City_I to Imax',
            lineStyle: {
              normal: {
                color: 'transparent',
              }
            },
            areaStyle: {
              normal: {
                opacity: area_opacity,
                color: color.radar['min']
              }
            }
          },
          {
            value : data.avg.map(item => item.value),
            name : 'Avg All Cities_I to Imax',
            lineStyle: {
              normal: {
                color: 'transparent',
              }
            },
            areaStyle: {
              normal: {
                opacity: area_opacity,
                color: color.radar['avg']
              }
            }
          },
          {
            value : data.ratio.map(item => item.value),
            name : 'I to Imax Ratio',
            lineStyle: {
              normal: {
                color: 'transparent',
              }
            },
            areaStyle: {
              normal: {
                opacity: area_opacity,
                color: color.radar['ratio']
              }
            }
          },
        ]
      }]
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
