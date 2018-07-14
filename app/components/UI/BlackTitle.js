/**
 * Created by Administrator on 2018-07-14.
 */
import React from 'react'
export default function(props) {
  return (
    <div style={{
      fontSize: 22,
      color: '#464646',
      lineHeight: 3,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 24,
      ...props.style

    }}>
      {props.children}
    </div>
  )
}
