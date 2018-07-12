import React from 'react'
import Container from '../../components/Container.js'
import {Row,Col} from 'antd'
import Right from './Right'
import Left from './Left'


import helper from '../../utils/helper'
export default class Page2 extends React.PureComponent {



  render() {
    return (
      <Container style={{background: 'white', padding: '24px 0'}}>

        <Row>
          <Col span={6}>
            <Left {...this.props}></Left>
          </Col>
          <Col span={12}></Col>
          <Col span={6}>
            <Right {...this.props}></Right>
          </Col>
        </Row>
      </Container>

    )
  }
}
