/**
 * Created by Administrator on 2018-07-13.
 */
import React from 'react'

import year_option from '../../data/years'
import group_options from '../../data/filter/groups'
import region_options from '../../data/filter/regions'
import pilot_options from '../../data/filter/pilotStatus'
import city_options from '../../data/cities'
import helper from '../../utils/helper'

import Filter from '../../components/Filter'
import Selecter from '../../components/Selecter'

export default class Right extends React.PureComponent{

  filterCityOptions() {
    const {region, group, pilot } = this.props.page2.filter;
    const cities = this.filterGroup(group, this.filterPilot(pilot, this.filterRegion(region, city_options)))
    return cities.map(city => {
      return {
        id: city.id,
        name: city.name[this.props.lang]
      }
    })
  }

  filterRegion(region, list) {
    if (region == 'all') {
      return list
    }
    return list.filter(l => l.region == region)
  }
  filterPilot(pilot, list) {
    if (pilot == 'all') {
      return list
    }
    return list.filter(l => l.status == pilot)
  }
  filterGroup(group, list) {
    if (group == 'all') {
      return list
    }
    return list.filter(l => l.group == group)
  }



  render() {
    return (
      <span>
         <Filter
           path="page2.year"
           setValue={this.props.setValue}
           title="Select Year for Data"
           options={year_option}
           value={this.props.page2.year}
         >
         </Filter>

            <div style={{height: 30}}></div>

            <Filter
              path="page2.filter.group"
              setValue={this.props.setValue}
              title="Filter List by Economic Group"
              options={helper.addAllOption(helper.getOptionsByLanguage(group_options, this.props.lang))}
              value={this.props.page2.filter.group}
            >
            </Filter>

            <Filter
              path="page2.filter.region"
              setValue={this.props.setValue}
              title="Filter List by Region"
              options={helper.addAllOption(helper.getOptionsByLanguage(region_options, this.props.lang))}
              value={this.props.page2.filter.region}
            >
            </Filter>

            <Filter
              path="page2.filter.pilot"
              setValue={this.props.setValue}
              title="Filter List by LC Pilot Status"
              options={helper.addAllOption(helper.getOptionsByLanguage(pilot_options, this.props.lang))}
              value={this.props.page2.filter.pilot}
            >
            </Filter>

            <Selecter
              path="page2.city_index"
              setValue={this.props.setValue}
              title="Select a City"
              options={this.filterCityOptions()}
              value={this.props.page2.city_index}
            >
            </Selecter>

      </span>
    )

  }
}
