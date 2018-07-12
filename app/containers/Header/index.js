import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import $ from 'jquery'
import { createStructuredSelector } from 'reselect';
import { 
  makeSelectLang,
  makeSelectLocation
} from '../App/selectors'
import {
  switchLanguage
} from '../App/actions'

import {Row, Col} from 'antd'
import './style.css'

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

 
    return (
      <header className="header-box">
        <Container
          style={{
            background: 'white'
          }}
        >
        <Row style={{height:64}}>
          <Col span={3}>
          </Col>
          <Col span={16} className="fh">
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
          

          </Col>
          <Col span={5}></Col>
        </Row>

        </Container>
        <div className="conatiner"></div>
  
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


