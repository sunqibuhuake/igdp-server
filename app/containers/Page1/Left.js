/**
 * Created by Administrator on 2018-07-13.
 */
import React from 'react'
import helper from '../../utils/helper'
import MetaItem from '../../components/MetaItem'
import {Row} from 'antd'
export default class Meta extends React.PureComponent {
  render() {
    const lang = this.props.lang;
    const city_index = this.props.page2.city_index

    const meta = helper.getCityMeta(this.props.page2.city_index)
    const city_region_code = meta.region
    const city_pilot_code = meta.status;
    const city_group_code = meta.group;
    const city_size_code = meta.size;

    const eco = helper.getCityEco(this.props.page2.city_index)

    const metas = [
      {
        name: 'Province',
        value: meta.prov[lang],
        span: 24
      },
      {
        name: 'Population-Total',
        value: eco.population
      },
      {
        name: 'Region',
        value: helper.getCityRegion(city_region_code, lang)
      },
      {
        name: 'Land Area [km2]',
        value: eco.area
      },
      {
        name: 'City Group',
        value: helper.getCityGroup(city_group_code, lang)
      },
      {
        name: 'GDP Value',
        value: eco['gdp']
      },
      {
        name: 'Size Group',
        value: helper.getCitySize(city_size_code, lang)
      },
      {
        name: 'GDP per Cap - RMB',
        value: eco['gdp_per_cap']
      },
      {
        name: 'Pilot Cities',
        value: helper.getCityPilot(city_pilot_code, lang)
      }

    ]
    return (
      <div>
        <div>
          {meta.name[lang]}
        </div>
        <div className="meta-groups">
          <Row>
            {metas.map(m => (
              <MetaItem
                key={Math.random()}
                {...m}
              ></MetaItem>
            ))}
          </Row>

        </div>

      </div>
    )
  }

}
