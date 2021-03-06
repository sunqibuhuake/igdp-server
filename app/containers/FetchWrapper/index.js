/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectLang,
  makeSelectLocation
} from '../App/selectors';
import {
  switchLanguage
} from '../App/actions';
import saga from './saga';



export class FetchWrapper extends React.PureComponent {

  componentDidMount() {
  }

 

  render() {

    const styles = {
      root: {
        padding: 0,
        margin: 0,
        width: '100%'
      }
    }

    return (
      <div style={styles.root}>
        {this.props.children}
      </div>
    )

  }
}

export function mapDispatchToProps(dispatch) {
  return {
    switchLanguage: (lang) => dispatch(switchLanguage(lang))
  };
}

const mapStateToProps = createStructuredSelector({
  lang: makeSelectLang(),
  location: makeSelectLocation()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withSaga = injectSaga({key: 'fetch', saga});

export default compose(
  withSaga,
  withConnect
)(FetchWrapper);
