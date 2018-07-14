/**
 * Created by Administrator on 2018-07-15.
 */
import React from 'react'
export default function(props) {
  const styles = {
    root: {
      width: 100,
      height: 100,
      position: 'relative',
      margin: '0 auto',
      cursor: 'pointer',
      padding: 6,
      borderRadius: '50%',
      border: props.active ? `2px solid ${props.color}` : 'none'
    },
    text: {
      color: props.active ? props.color : 'black',
      textAlign: 'center',
      msoPaddingTop: 24

    }
  }
  return (
    <div className="col-1-7">
      <div
        onClick={() => {
          props.setValue('page1.secondary_cat', props.value)
        }}
        style={styles.root}>
        <img src={props.icon} style={{
          width: '100%',
          height: '100%'
        }} />
      </div>
      <div style={styles.text}>
        {props.text}
      </div>
    </div>
  )
}
