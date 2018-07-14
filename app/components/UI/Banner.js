/**
 * Created by Administrator on 2018-07-15.
 */
import React from 'react'
export default class Banner extends React.PureComponent{
  render() {
    return (
      <div className="banner">
        {this.props.children}

      </div>
    )
  }
}
