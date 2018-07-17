import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import $ from 'jquery'
import { createStructuredSelector } from 'reselect';
import {Link} from 'react-router-dom'
import {
  makeSelectLang,
  makeSelectLocation
} from '../App/selectors'
import {
  switchLanguage
} from '../App/actions'

import {Row, Col} from 'antd'
import './style.css'
import logo from './assets/logo.png'

import helper from '../../utils/helper'
import Container from '../../components/Container.js'

class Header extends React.Component {

  componentWillMount() {
  }


  componentDidMount() {
  }
  componentWillReceiveProps(np) {

  }

  componentDidUpdate() {

  }


  render() {

    const pathname = this.props.history.location.pathname;

    return (
      <header className="header-box">
        <Container
          style={{
            background: 'white'
          }}
        >
        <Row style={{height:64}}>
          <Col span={20} className="fh">
            <div style={{width: 48, height: '100%', float: 'left', paddingTop: 8}}>
              <img src={logo} style={{width: '100%'}} />
            </div>
            <div style={{width: 'calc(100% - 48px)', float: 'left', height: '100%', paddingLeft: 24}}>
              <div className="vertical-center">
                <div className="fw tal">
                  <div style={{ color: 'black', fontSize: 20}}>
                    LOGIC
                  </div>
                  <div style={{color: '#777777', fontSize: 12}}>
                    Low Carbon & Green Index for Cities in China
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col span={4}></Col>
        </Row>
        </Container>
        <Container style={{background:'#6ab131'}}>
          <Row style={{height: 72}} className="nav-btns">
            <Col span={2} className="fh">
              <div className="vertical-center">
                <div className="tal" style={{width: '100%', color: 'white'}}>
                  <Link to="/">
                    <span className={pathname == '/' ? 'normalNavBtn activeNavBtn' : 'normalNavBtn'}>Home</span>
                  </Link>
                </div>
              </div>

            </Col>
            <Col offset={2} span={14} className="fh">
              <div className="vertical-center">
                <Row style={{width: '100%'}}>
                  <Col span={5}>
                    <Link to="/results">
                      <span className={pathname == '/results' ? 'normalNavBtn activeNavBtn' : 'normalNavBtn'} >2017 LOGIC<br/>RESULTS</span>
                    </Link>
                  </Col>
                  <Col span={5}>
                    <Link to="/indicators">
                      <span className={pathname == '/indicators' ? 'normalNavBtn activeNavBtn' : 'normalNavBtn'}>RESULTS BY<br/>INDICATOR</span>
                    </Link>
                  </Col>
                  <Col span={4}>
                    <Link to="/city">
                      <span className={pathname == '/city' ? 'normalNavBtn activeNavBtn' : 'normalNavBtn'}>RESULTS<br/>BY CITY</span>
                    </Link>
                  </Col>
                  <Col span={5}>
                    <span>COMPARE<br/>CITIES</span>

                  </Col>
                  <Col span={5}>
                    <span>RESULTS BY<br/>CITY GROUP</span>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col  offset={2} span={4} className="fh">
              <div className="vertical-center">
                <Row style={{width:'100%'}}>
                  <Col span={12}>
                    <span>LOGIC<br/>METHODS</span>

                  </Col>
                  <Col span={12}>
                    <span>ABOUT<br/>LOGIC</span>

                  </Col>
                </Row>
              </div>
            </Col>

          </Row>
        </Container>
      </header>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    switchLanguage: (lang) => dispatch(switchLanguage(lang)),
  };
}

const mapStateToProps = createStructuredSelector({
  location: makeSelectLocation(),
  lang: makeSelectLang(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
  withConnect
)(Header);


