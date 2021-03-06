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
import indicator_list from '../../data/indicator'
import secondary_cat_list from '../../data/secondary_cat'
import NormalBar from '../../components/Chart/NormalBar'
import StackBar from '../../components/Chart/StackBar'
import Line from '../../components/Chart/Line'
import Radar from '../../components/Chart/Radar'
import {Row} from 'antd'
import ChartContainer from '../../components/UI/ChartContainer'
import Legend from '../../components/UI/Legend'

import color from '../../utils/color'
import radar_name from '../../data/radar_name'
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

    const legend_data_1 = [
      {
        text:  'Score Value',
        color: color.p
      },
      {
        text: 'Gap from Maximum',
        color: color.s
      }
    ]

    const legend_data_2 = color.list.map( (c, index) => {
      return {
        text: secondary_cat_list[index][lang],
        color: c
      }
    })

    const legend_radar = []
    for (let name in color.radar) {
      legend_radar.push({
        text: radar_name[name][lang],
        color: color.radar[name]
      })
    }


    console.log(secondaryAvg)

    return (
      <div style={{padding: '0 12px'}}>


        <ChartContainer
          title={(<span>Logic Scores VS. Maximum<br/><span style={{fontSize: 14, color: 'gray'}}>(Category, 2nd Category, Indicators)</span></span>)}
        >
          <Legend
            style={{padding:"12px 0"}}
            data={legend_data_1}
          ></Legend>
          <div style={{height: 270, marginBottom: 24}}>
            <NormalBar
              data={primaryData}
            ></NormalBar>
          </div>
          <div style={{height: 400, marginBottom:24}}>
            <NormalBar
              data={secondaryData}
            ></NormalBar>
          </div>

          <div style={{height: 400, overflowY: 'scroll'}}>
            <div style={{height: indicatorData.length  * 40}}>
              <NormalBar
                data={indicatorData}
              ></NormalBar>
            </div>
          </div>

        </ChartContainer>

        <ChartContainer
          title="LOGIC Score, Breakdown by Category"
        >
          <Legend
            style={{padding:"12px 0 0"}}
            data={legend_data_2}
          ></Legend>
          <div style={{height: 560}}>
            <StackBar
              year={this.props.page2.year}
              data={secondaryData}
            ></StackBar>
          </div>
        </ChartContainer>

        <ChartContainer
          title="LOGIC Score, Change by Year"
        >
          <div style={{height: 360}}>
            <Line
              data={primaryLineData}
            ></Line>
          </div>
        </ChartContainer>

        <ChartContainer
          title="LOGIC Categories, Change by Year"
        >
          <Legend
            style={{padding:"12px 0 0"}}
            data={legend_data_2}
          ></Legend>
          <div style={{height: 420}}>
            <Line
              data={secondaryLineData}
            ></Line>
          </div>
        </ChartContainer>
        <ChartContainer
          title="LOGIC Indicators, Change by Year"
        >
          <div style={{height: 420}}>
            <Line
              data={indicatorLineData}
            ></Line>
          </div>
        </ChartContainer>
        <ChartContainer
          title="City Performance Across Categories"
        >
          <Legend data={legend_radar} style={{padding: '12xp 0'}}></Legend>
          <div style={{height: 420}}>
            <Radar
              data={{
              max:secondaryMax,
              min:secondaryMin,
              avg:secondaryAvg,
              ratio: secondaryData
            }}
            ></Radar>
          </div>
        </ChartContainer>

      </div>
    )
  }

}
