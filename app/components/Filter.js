/**
 * Created by Administrator on 2018-07-13.
 */
import React from 'react'
import ActionCard from './ActionCard.js'
import DropOptions from './DropOptions.js'
export default class Filter extends React.PureComponent{
  render() {
    return (
      <ActionCard
        title={this.props.title}
      >
        <DropOptions
          {...this.props}
        ></DropOptions>
      </ActionCard>
    )
  }
}
