import React from 'react'
import Container from '../../components/Container.js'
import {Row,Col} from 'antd'
import Right from './Right'
import Left from './Left'
import Mid from './Mid'

import helper from '../../utils/helper'
import './style.css'

import Footer from '../Footer'
import Header from '../Header'
export default class Page2 extends React.PureComponent {



  render() {
    return (
      <div>
        <Header/>
        <Container style={{background: 'white', padding: '24px 0'}}>

          <Row>
            <Col span={6}>
              <Left {...this.props}></Left>
            </Col>
            <Col span={12}>
              <Mid {...this.props}></Mid>
            </Col>
            <Col span={6}>
              <Right {...this.props}></Right>
            </Col>
          </Row>
        </Container>
        <Footer/>

      </div>
    )
  }
}
