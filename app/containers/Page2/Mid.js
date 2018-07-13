/**
 * Created by Administrator on 2018-07-13.
 */
import React from 'react'
import helper from '../../utils/helper'
import {getAllSecondaryData, getAllIndicatorData,getAllPrimaryData} from '../../utils/calc'
import NormalBar from '../../components/Chart/NormalBar'
import {Row} from 'antd'

export default class Meta extends React.PureComponent {
  render() {
    const city_index = this.props.page2.city_index;
    const year = this.props.page2.year;
    const lang = this.props.lang;


    const primaryData = getAllPrimaryData(city_index, year,lang);
    const secondaryData = getAllSecondaryData(city_index, year,lang);
    const indicatorData = getAllIndicatorData(city_index, year,lang)
    console.log(secondaryData)
    return (
      <div style={{padding: '0 12px'}}>


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


      </div>
    )
  }

}
