/**
 * Created by Administrator on 2018-07-15.
 */
import React from 'react'
import {Row,Col} from 'antd'

import logo1 from './assets/footer-logo-0.png'
import logo2 from './assets/footer-logo-1.png'
import logo3 from './assets/footer-logo-2.png'
export default function() {


  return(
    <Row style={{padding: '24px 0 42px'}}>
      <Col span={24}>
        <div style={{textAlign: 'center', fontSize: 14, padding: '12px 0 24px'}}>
          - A Joint project From -
        </div>
      </Col>
      <Col offset={6} span={4} className="footer-logo-box">
        <img style={{height: 92}} src={logo1}/>
      </Col>
      <Col span={4} className="footer-logo-box">
        <a href="https://china.lbl.gov" target="_blank">
          <img style={{width: 96}} src={logo2}/>
        </a>
      </Col>
      <Col span={4} className="footer-logo-box">
        <a href="http://www.efchina.org/?set_language=en" target="_blank">
          <img style={{height: 64, marginTop: 12}} src={logo3}/>
        </a>
      </Col>
    </Row>
  )
}
