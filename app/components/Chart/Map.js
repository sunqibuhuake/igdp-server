/**
 * Created by Administrator on 2018-07-15.
 */
/**
 * Created by sunqi on 16/12/29.
 */
/**
 * Created by sunqi on 16/9/24.
 */
/**
 * Created by sunqi on 16/9/7.
 */

// App.js
import React, { Component } from 'react'

import echarts from 'echarts'

import ChinaGeo from '../../data/china'

import _ from 'lodash'

import pos from '../../data/pos'

export default class Map extends Component {

  constructor(props, context) {

    super(props, context)

    this.state = {
      id: 'chart-' + (Math.random() + '').split('.')[1]
    }

  }



  initMap() {
    const elem = $('#' + this.state.id)
    elem.css({
      width: elem.width(),
      height: elem.height()
    })
    this.chart = echarts.init(document.getElementById(this.state.id))
    echarts.registerMap('china', ChinaGeo);
  }


  setOption(data) {

    const max = _.max(data.cities.map((city) => city.value[2] ))

    const option = {
      backgroundColor: 'transparent',
      title : {
        show: false,
      },
      tooltip: {},
      geo: {
        map: 'china',
        label: {
          emphasis: {
            show: false
          }
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: '#d4d4d4',
            borderColor: 'white'
          },
          emphasis: {
            areaColor: '#c3c2c2'
          }
        }
      },
      series: [{
        name: 'Score',
        type: 'scatter',
        label: {
          normal: {
            show: false,
            formatter: '{b}',
            position: 'right'
          }
        },
        itemStyle: {
          normal: {
            color: `rgba(${data.color},0.5)`,
          }
        },
        symbolSize: function (val) {
          return 8
        },
        coordinateSystem: 'geo',
        data: data.cities.map(city => {
          const opacity = (city.value[2] / max) + 0.2
          city.itemStyle = {
            normal: {
              color: `rgba(${data.color},${opacity})`
            }
          }
          return city
        })
      }]
    }

    this.chart.setOption(option, false)
  }


  componentDidMount() {

    this.initMap()
    this.setOption(this.props.data)


  }

  componentWillReceiveProps(np) {
    this.setOption(np.data)
  }


  render() {

    const styles = {
      root: {
        width: '100%',
        height: '100%',
        padding: 0,
        margin: 0
      }
    }

    return (

      <div id={this.state.id} style={styles.root}>

      </div>

    )
  }
}
