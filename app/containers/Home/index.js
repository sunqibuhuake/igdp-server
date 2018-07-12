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
} from '../App/selectors';

import { switchLanguage } from '../App/actions';

import Page2 from '../Page2' 

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


    return (
      <div>
        <Page2 {...this.props}></Page2>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    switchLanguage: (lang) => dispatch(switchLanguage(lang))
  };
}

const mapStateToProps = createStructuredSelector({
  lang: makeSelectLang(),
  location: makeSelectLocation(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
  withConnect
)(Home);
