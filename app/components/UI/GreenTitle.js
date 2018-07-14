/**
 * Created by Administrator on 2018-07-14.
 */
import React from 'react'
export default function(props) {
  return (
    <div style={{
      fontSize: 22,
      color: '#009944',
      lineHeight: 1.5,
      marginBottom: 36,
      ...props.style
    }}>
      {props.children}
    </div>
  )
}
