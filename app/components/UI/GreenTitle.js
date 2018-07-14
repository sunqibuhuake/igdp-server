/**
 * Created by Administrator on 2018-07-14.
 */
import React from 'react'
export default function(props) {
  return (
    <div style={{
      fontSize: 18,
      color: '#009944',
      lineHeight: 2,
      marginBottom: 18
    }}>
      {props.text}
    </div>
  )
}
