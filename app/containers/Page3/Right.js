/**
 * Created by Administrator on 2018-07-13.
 */
import React from 'react'

import year_option from '../../data/years'
import secondary_cats from '../../data/secondary_cat'
import helper from '../../utils/helper'
import Filter from '../../components/Filter'
import Selecter from '../../components/Selecter'

export default class Right extends React.PureComponent{

  getSecondaryOptions() {
    return secondary_cats.map(cat => {
      return {
        id: cat.id,
        name: cat[this.props.lang]
      }
    })
  }


  render() {
    return (
      <span>
         <Filter
           path="page3.year"
           setValue={this.props.setValue}
           title="Select Year for Data"
           options={year_option}
           value={this.props.page3.year}
         >
         </Filter>

        <Selecter
          path="page3.secondary_cat"
          setValue={this.props.setValue}
          title="Select Categories / Indicators"
          options={this.getSecondaryOptions()}
          value={this.props.page3.secondary_cat}
        >
        </Selecter>
      </span>
    )

  }
}
