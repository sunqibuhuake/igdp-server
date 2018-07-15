/**
 * Created by Administrator on 2018-07-13.
 */
import React from 'react'
import helper from '../../utils/helper'
import color from '../../utils/color'
import {Row} from 'antd'
import HBar from '../../components/Chart/HBar'
import NormalBar from '../../components/Chart/NormalBar'
import {
  getSecondaryFreq,
  getFilteredIndicatorAvg
} from '../../utils/calc'
export default class Left extends React.PureComponent {
  render() {
    const lang = this.props.lang;
    const secondary_cat = this.props.page3.secondary_cat;
    const year = this.props.page3.year;
    const freqData = getSecondaryFreq(secondary_cat, year);
    const avgIndicatorData = getFilteredIndicatorAvg(secondary_cat, year, lang)

    console.log(avgIndicatorData)




    return (
      <div>
        <h1>
          LOGIC Category & Indicator Results
        </h1>
        <div style={{
          color: color.p,
          fontSize: 18
        }}>
          {helper.getSecondaryCatName(secondary_cat, lang)}
        </div>


        <div style={{fontSize: 18, color: 'black', padding: '36px 0 24px'}}>
          Logic Score Breakdown
        </div>
        <div style={{height: 400}}>
          <HBar
            data={freqData.reverse()}
          ></HBar>
        </div>
        <div style={{fontSize: 18, color: 'black', padding: '36px 0 24px'}}>
          Avg Score of Cities and Score Gap Avg by LabelName
        </div>
        <div style={{height: 300 }}>
          <NormalBar
            data={avgIndicatorData}
          ></NormalBar>
        </div>



      </div>
    )
  }

}
