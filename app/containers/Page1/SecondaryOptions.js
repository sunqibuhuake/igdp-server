/**
 * Created by Administrator on 2018-07-15.
 */
import React from 'react'
import {Col} from 'antd'

import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'
import icon5 from './assets/icon5.png'
import icon6 from './assets/icon6.png'
import icon7 from './assets/icon7.png'
import OptionItem from './OptionItem'
export default function (props) {

  const options = [
    {
      icon: icon1,
      color: '#f19489',
      text: (<span>Economic<br/>Dimension</span>),
      value: '1'
    },
    {
      icon: icon2,
      color: '#f8c370',
      text: (<span>Energy<br/>& Power</span>),
      value: '2'
    },
    {
      icon: icon3,
      color: '#f7dc6f',
      text: (<span>Industry</span>),
      value: '3'
    },
    {
      icon: icon4,
      color: '#76d7c3',
      text: (<span>Transportation</span>),
      value: '4'
    },
    {
      icon: icon5,
      color: '#76d7c3',
      text: (<span>Buildings</span>),
      value: '5'
    },
    {
      icon: icon6,
      color: '#85c1e9',
      text: (<span>Environment<br/>& Land Use</span>),
      value: '6'
    },
    {
      icon: icon7,
      color: '#c39bd2',
      text: (<span>Policy<br/>Dimension</span>),
      value: '7'
    },

  ]

  return (
    <Col span={24}>
      {options.map(option => (
        <OptionItem
          setValue={props.setValue}
          active={props.value == option.value}
          key={'page1-option-' + option.value}
          {...option}
        >
        </OptionItem>
      ))}

    </Col>
  )
}
