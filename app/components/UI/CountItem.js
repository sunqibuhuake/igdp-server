/**
 * Created by Administrator on 2018-07-15.
 */
import React from 'react'
export default function(props) {
  return (
    <div style={{fontSize: 18, color: '#6b6b6b', marginBottom: 24}}>
      <span style={{fontSize: 24, color: '#009944', marginRight: 12}}>
        {props.num}
      </span>
      {props.name}
    </div>
  )
}
