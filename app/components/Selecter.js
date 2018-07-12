/**
 * Created by Administrator on 2018-07-13.
 */
import React from 'react'
import ActionCard from './ActionCard.js'
import ListOptions from './ListOptions.js'
export default class Selecter extends React.PureComponent{
  render() {
    return (
      <ActionCard
        title={this.props.title}
      >
        <ListOptions
          {...this.props}
        ></ListOptions>
      </ActionCard>
    )
  }
}
