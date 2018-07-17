/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import helper from '../../utils/helper'

import {
  makeSelectLang,
  makeSelectLocation,
  makeSelectPage1,
  makeSelectPage2,
  makeSelectPage3
  //makeSelectValue
} from '../App/selectors';

import { switchLanguage, setValue } from '../App/actions';

import Page1 from '../Page1'
import Page2 from '../Page2'
import Page3 from '../Page3'
import Page4 from '../Page4'

export class Home extends React.PureComponent {


  componentDidMount() {

  }

  selectFirstNews() {

  }

  componentWillReceiveProps(np) {

  }


  componentDidUpdate() {

  }

  render() {

    const pathname = this.props.history.location.pathname;
    if (pathname == '/') {
      return (
        <div>
          <Page1 {...this.props}></Page1>
        </div>
      )
    }

    if (pathname == '/results') {

      return (
        <div>
          <Page4></Page4>
        </div>
      )

    }

    if (pathname == '/indicators') {

      return (
        <div>
          <Page3 {...this.props}></Page3>
        </div>
      )

    }

    if (pathname == '/city') {
      return (
        <div>
          <Page2 {...this.props}></Page2>
        </div>
      )

    }

  }
}

export function mapDispatchToProps(dispatch) {
  return {
    switchLanguage: (lang) => dispatch(switchLanguage(lang)),
    setValue: (path, value) => dispatch(setValue(path, value))
  };
}

const mapStateToProps = createStructuredSelector({
  lang: makeSelectLang(),
  location: makeSelectLocation(),
  page2: makeSelectPage2(),
  page3: makeSelectPage3(),
  page1: makeSelectPage1()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
  withConnect
)(Home);
