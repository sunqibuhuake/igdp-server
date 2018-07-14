/**
 * Created by Administrator on 2018-07-15.
 */
import React from 'react'
import {Row,Col} from 'antd'
import icon1 from './assets/list-icon-1.png'
import icon2 from './assets/list-icon-2.png'
import icon3 from './assets/list-icon-3.png'
import icon4 from './assets/list-icon-4.png'

import GreenTitle from '../../components/UI/GreenTitle'
import BlackText from '../../components/UI/BlackText'
export default function(props) {

  const items = [
    {
      t: 'Explore the relative performance of the LOGIC categories/indicators',
      c: 'Examine and compare performance of cities “grouped” by: city size, city economy,geography, and low-carbon pilot status',
      icon: icon1
    },
    {
      t: 'Explore LOGIC results for an individual city',
      c: 'See the LOGIC results any of the 115 cities, across 7 categories, and 23 indicators from 2010 to 2015',
      icon: icon2
    },
    {
      t: 'Compare LOGIC results from multiple cities',
      c: 'Select two or more cities to compare LOGIC scores across categories, indicators, and for different years',
      icon: icon3
    },
    {
      t: 'Explore average LOGIC scores for different types of cities',
      c: 'Examine and compare performance of cities “grouped” by: city size, city economy,geography, and low-carbon pilot status',
      icon: icon4
    }
  ]
  return (
    <div>
      {items.map((item, index) => (
        <Row
          key={'page1-list-' + index}
          style={{marginBottom: 24}}
        >
          <div style={{width: '120', float: 'left', textAlign: 'center'}}>
            <img src={item.icon} style={{width: '64px'}} />
          </div>
          <div style={{
            width: 'calc(100% - 120px)',
            float: 'left'

          }}>
            <GreenTitle
              style={{marginBottom:12}}
            >
              {item.t}
            </GreenTitle>
            <BlackText>
              {item.c}
            </BlackText>
          </div>

        </Row>
      ))}
    </div>

  )
}
