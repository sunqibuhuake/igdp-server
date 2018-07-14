/**
 * Created by Administrator on 2018-07-14.
 */
import React from 'react'
export default function(props) {
  return (
    <div style={{
      fontSize: 14,
      color: '#818181',
      lineHeight: 2,
      marginBottom: 12
    }}>
      {props.text}
    </div>
  )
}
