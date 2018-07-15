/**
 * Created by Administrator on 2018-07-15.
 */
import React from 'react'
import Container from '../../components/Container'
import {Row ,Col} from 'antd'
export default function (props) {
  return (
    <Container style={{background: '#d4d4d4',padding: '12px 0'}}>
      <Row>
        <Col span={3}>
          Legal
        </Col>
        <Col span={4}>
          <div className="footer-item">
            Privacy Policy
          </div>
        </Col>
        <Col span={4}>
          <div className="footer-item">
            Contact iGDP
          </div>
        </Col>
        <Col span={13}>
          <div className="footer-item">
            © 2018 Innovative Green Development (iGDP),All Rights Reserved
          </div>
        </Col>
      </Row>


    </Container>
  )
}
