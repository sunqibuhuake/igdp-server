/**
 * Created by Administrator on 2018-07-15.
 */
import React from 'react'
import {Col} from 'antd'
export default function(props) {
  return (
    <Col span={3} className="fh">
      <div className="vertical-center">
        <span>
          {props.children}
        </span>
      </div>

    </Col>
  )
}
