import React from 'react'
import Container from '../../components/Container.js'
import {Row,Col} from 'antd'
import Right from './Right'
import Left from './Left'
import Mid from './Mid'
import helper from '../../utils/helper'
import './style.css'
export default class Page2 extends React.PureComponent {



  render() {
    return (
      <Container style={{background: 'white', padding: '24px 0'}}>

        <Row>
          <Col span={18}>
            <Left {...this.props}></Left>
          </Col>
          <Col span={6}>
            <Right {...this.props}></Right>
          </Col>
        </Row>
        <Row>
          <Mid {...this.props}></Mid>
        </Row>
      </Container>

    )
  }
}
