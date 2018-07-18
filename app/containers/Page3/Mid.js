/**
 * Created by Administrator on 2018-07-13.
 */
import React from 'react'
import helper from '../../utils/helper'
import {
  getSecondaryScoreByYear,
  filterIndicatorScoreByYear,
  getScatterData,
getSpecBarData

} from '../../utils/calc'
import Line from '../../components/Chart/Line'
import Scatter from '../../components/Chart/Scatter'
import SpecBar from '../../components/Chart/SpecBar'
import {Row, Col} from 'antd'

import ChartContainer from '../../components/UI/ChartContainer'

export default class Mid extends React.PureComponent {
  render() {
    const sid = this.props.page3.secondary_cat;
    const year = this.props.page2.year;
    const lang = this.props.lang;

    const secondaryLineData = getSecondaryScoreByYear(sid, lang)
    const indicatorLineData = filterIndicatorScoreByYear(sid, lang)
    const scatterData = getScatterData(sid, year, lang)
    const specData = getSpecBarData(indicatorLineData)

    return (
      <div>
      <Row>
        <Col span={12} style={{padding: '12px 24px'}}>

          <ChartContainer
            title="Category Score, Change by Year(avg.all cities)"
            titleStyle={{fontSize: 18, color: '#6ab131'}}
          >
            <div style={{height: 240}}>
              <Line
                data={secondaryLineData}
              ></Line>
            </div>
          </ChartContainer>

        </Col>

        <Col span={12} style={{padding: '12px 24px'}}>

          <ChartContainer
            title="Category Score vs. Overall LOGIC Score(all cities)"
            titleStyle={{fontSize: 18, color: '#6ab131'}}
          >
            <div style={{height: 240}}>
              <Scatter
                data={{list: scatterData}}
              ></Scatter>
            </div>
          </ChartContainer>
        </Col>
      </Row>
        <Row>
          <Col span={12} style={{padding: '12px 24px'}}>
            <ChartContainer
              title="Category Indicators Scores, Change by Year(avg.all cities)"
              titleStyle={{fontSize: 18, color: '#6ab131'}}
            >
              <div style={{height: 300}}>
                <Line
                  data={indicatorLineData}
                ></Line>
              </div>
            </ChartContainer>
          </Col>

          <Col span={12} style={{padding: '12px 24px'}}>
            <ChartContainer
              title="Category Indicators Scores Change by Year"
              titleStyle={{fontSize: 18, color: '#6ab131'}}
            >
              <div style={{height: 300}}>
                <SpecBar
                  data={specData}
                ></SpecBar>
              </div>
            </ChartContainer>
          </Col>
        </Row>
        </div>
    )
  }

}
