/**
 * Created by Administrator on 2018-07-13.
 */
import React from 'react'
import {Col} from 'antd'
export default function(props) {
  return (
    <Col span={12}>
      <div>
        {props.value}
      </div>
      <div>
        {props.name}
      </div>
    </Col>
  )
}
