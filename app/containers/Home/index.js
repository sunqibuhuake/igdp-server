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
  makeSelectPage2,
  makeSelectPage3
  //makeSelectValue
} from '../App/selectors';

import { switchLanguage, setValue } from '../App/actions';

import Page1 from '../Page1'
import Page2 from '../Page2'
import Page3 from '../Page3'

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

    const styles = {
      root: {
        padding: 0,
        margin: 0
      }
    }

    const page2Props = {
      lang:　this.props.lang,
      location: this.props.location,
      page2: this.props.page2
    }


    return (
      <div>
        <Page1 {...this.props}></Page1>
        <Page2 {...this.props}></Page2>
        <Page3 {...this.props}></Page3>

      </div>
    );
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
  page3: makeSelectPage3()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
  withConnect
)(Home);
