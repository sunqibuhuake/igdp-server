/**
 * Created by Administrator on 2018-07-13.
 */
import React from 'react'
import helper from '../../utils/helper'
import {getAllSecondaryData} from '../../utils/calc'
import {Row} from 'antd'

export default class Meta extends React.PureComponent {
  render() {
    const city_index = this.props.page2.city_index;
    const year = this.props.page2.year;
    const lang = this.props.lang;



    console.log(getAllSecondaryData(city_index, year,lang));
    return (
      <div>


      </div>
    )
  }

}
