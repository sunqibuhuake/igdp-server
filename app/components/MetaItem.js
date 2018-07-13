/**
 * Created by Administrator on 2018-07-13.
 */
import React from 'react'
import {Col} from 'antd'
export default function(props) {
  return (
    <Col
      span={props.span || 12}
      style={{marginBottom: 12}}
      offset={props.offset ? props.offset : 0}
    >
      <div style={{
        color: 'green',
        lineHeight: 2,
        fontSize: 14
      }}>
        {props.value}
      </div>
      <div style={{
        color: '#777777',
        lineHeight: 2,
        fontSize:12
      }}>
        {props.name}
      </div>
    </Col>
  )
}
