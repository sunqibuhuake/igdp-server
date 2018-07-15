/**
 * Created by Administrator on 2018-07-13.
 */
import React from 'react'
import helper from '../../utils/helper'
import {
  getAllSecondaryData,
  getAllIndicatorData,
  getAllPrimaryData,
  getPrimaryLineData,
  getAllSecondaryLineData,
  getAllIndicatorLineData,
  getSecondaryAvg,
  getSecondaryMax,
  getSecondaryMin
} from '../../utils/calc'
import NormalBar from '../../components/Chart/NormalBar'
import StackBar from '../../components/Chart/StackBar'
import Line from '../../components/Chart/Line'
import Radar from '../../components/Chart/Radar'

import ChartContainer from '../../components/UI/ChartContainer'
import {Row} from 'antd'

export default class Meta extends React.PureComponent {
  render() {
    const city_index = this.props.page2.city_index;
    const year = this.props.page2.year;
    const lang = this.props.lang;

    const primaryData = getAllPrimaryData(city_index, year,lang);
    const secondaryData = getAllSecondaryData(city_index, year,lang);
    const indicatorData = getAllIndicatorData(city_index, year,lang)
    const primaryLineData = getPrimaryLineData(city_index)
    const secondaryLineData = getAllSecondaryLineData(city_index, lang)
    const indicatorLineData = getAllIndicatorLineData(city_index, lang)

    const secondaryAvg = getSecondaryAvg(lang, year)
    const secondaryMin = getSecondaryMin(lang, year)
    const secondaryMax = getSecondaryMax(lang, year)


    console.log(secondaryAvg)

    return (
      <div style={{padding: '0 12px'}}>

        <ChartContainer
          title={(<span>Logic Scores VS. Maxium</span>)}
        >
          <div style={{height: 270}}>
            <NormalBar
              data={primaryData}
            ></NormalBar>
          </div>

          <div style={{height: 400}}>
            <NormalBar
              data={secondaryData}
            ></NormalBar>
          </div>
          <div style={{height: indicatorData.length  * 40}}>
            <NormalBar
              data={indicatorData}
            ></NormalBar>
          </div>

        </ChartContainer>



        <div style={{height: 600}}>
          <StackBar
            year={this.props.page2.year}
            data={secondaryData}
          ></StackBar>
        </div>

        <div style={{height: 600}}>
          <Line
            data={primaryLineData}
          ></Line>
        </div>


        <div style={{height: 600}}>
          <Line
            data={secondaryLineData}
          ></Line>
        </div>


        <div style={{height: 600}}>
          <Line
            data={indicatorLineData}
          ></Line>
        </div>

        <div style={{height: 600}}>
          <Radar
            data={{
              max:secondaryMax,
              min:secondaryMin,
              avg:secondaryAvg,
              ratio: secondaryData
            }}
          ></Radar>
        </div>




      </div>
    )
  }

}
