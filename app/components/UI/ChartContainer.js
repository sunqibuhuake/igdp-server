/**
 * Created by Administrator on 2018-07-15.
 */
import React from 'react'
export default function(props) {
  return (
    <div style={{marginBottom: 36}}>
      <div style={{fontSize: 24,padding: '0 0 24px',...props.titleStyle}}>
        {props.title}
      </div>
      <div style={{border: '1px solid black', height: 'auto', padding: '24px'}}>
        {props.children}

      </div>
    </div>
  )
}
