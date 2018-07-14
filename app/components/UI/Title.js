/**
 * Created by Administrator on 2018-07-14.
 */
import React from 'react'
export default class Title extends React.PureComponent {
  render() {
    return (
      <div className="big-title">
        {this.props.children}
      </div>
    )
  }

}
