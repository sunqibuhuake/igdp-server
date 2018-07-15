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
import NavBtn from './NavBtn'
import './style.css'

import helper from '../../utils/helper'
import Container from '../../components/Container.js'
import Logos from './Logos'
import Bottom from './Bottom'
class Footer extends React.Component {

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
      <footer>
        <Container
          style={{
            background: '#e6e6e6'
          }}
        >
        <Row style={{height:64}}>

          <NavBtn>
            Home
          </NavBtn>

          <NavBtn>
            2017 LOGIC<br/>RESULTS
          </NavBtn>

          <NavBtn>
            RESULTS BY<br/>INDICATOR
          </NavBtn>
          <NavBtn>
            RESULTS<br/>BY CITY
          </NavBtn>
          <NavBtn>
            COMPARE<br/>CITIES
          </NavBtn>
          <NavBtn>
            RESULTS BY<br/>CITY GROUP
          </NavBtn>
          <NavBtn>
            LOGIC<br/>METHODS
          </NavBtn>
          <NavBtn>
            ABOUT<br/>LOGIC
          </NavBtn>

        </Row>
          <Logos></Logos>

        </Container>
        <Bottom></Bottom>

      </footer>
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
)(Footer);


