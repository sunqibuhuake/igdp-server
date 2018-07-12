import React from 'react'
import { Radio, Input } from 'antd';
const RadioGroup = Radio.Group;
import helper from '../utils/helper'

const radioStyle = {
  display: 'block',
  height: '24px',
  lineHeight: '24px',
};


export default class ListOptions extends React.PureComponent {

  constructor(props) {
    super(props)
  }


  onChange = (e) => {
    this.props.setValue(this.props.path, e.target.value)
  }

  render() {
    return (
      <div style={{height: 288, overflowY: 'auto', margin: '12px 0'}}>
        <RadioGroup onChange={this.onChange} value={this.props.value}>

          {this.props.options.map(o => (
            <Radio
              key={Math.random()}
              style={radioStyle}
              value={o.id}
            >
              {o.name}
            </Radio>
          ))}
        </RadioGroup>
      </div>

    )
  }
}
