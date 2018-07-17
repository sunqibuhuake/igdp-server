/**
 * Created by sunqi on 2018/7/16.
 */
import React from 'react'
export default class Legend extends React.PureComponent{

  render() {
    return (
      <div>

        {this.props.data.map(d => (
          <span
            key={Math.random()}
            className="legend"
          >
          <div
            className="legend-color"
            style={{
              background: d.color
            }}
          ></div>
            {d.text}
        </span>
        ))}


      </div>
    )
  }
}
