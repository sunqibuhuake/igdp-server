/**
 * Created by Administrator on 2018-07-13.
 */
import React from 'react'
import helper from '../../utils/helper'
import MetaItem from '../../components/MetaItem'

export default class Meta extends React.PureComponent {
  render() {
    const lang = this.props.lang;
    const city_index = this.props.page2.city_index
    const meta = helper.getCityMeta(this.props.page2.city_index)
    const eco = helper.getCityEco(this.props.page2.city_index)

    const metas = [
      {
        name: 'Province',
        value: meta.prov[lang]
      },
      {
        name: '',
        value: ''
      },
      {
        name: 'Population-Total',
        value: eco.population
      },
      {
        name: 'Region',
        value: helper.getCityRegion(city_index, lang)
      },
      {
        name: 'Land Area [km2]',
        value: eco.area
      },
      {
        name: 'City Group',
        value: helper.getCityGroup(city_index, lang)
      },
      {
        name: 'GDP Value',
        value: eco['GDP']
      },
      {
        name: 'Size Group',
        value: helper.getCityGroup(city_index, lang)
      },
      {
        name: 'City Group',
        value: helper.getCityGroup(city_index, lang)
      },
      {
        name: 'City Group',
        value: helper.getCityGroup(city_index, lang)
      },

    ]
    return (
      <div>
        <div>
          {meta.name[lang]}
        </div>
        <div>

        </div>

      </div>
    )
  }

}
