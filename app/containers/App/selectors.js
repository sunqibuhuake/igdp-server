/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const makeSelectPage1 = () => createSelector(
  selectGlobal,
  (state) => state.get('page1').toJS()
);


const makeSelectPage2 = () => createSelector(
  selectGlobal,
  (state) => state.get('page2').toJS()
);
const makeSelectPage3 = () => createSelector(
  selectGlobal,
  (state) => state.get('page3').toJS()
);



const makeSelectLang = () => createSelector(
  selectGlobal,
  (state) => state.get('language')
);
//const makeSelectValue = (path) => createSelector(
//  selectGlobal,
//  (state) => state.getIn(path.split('.'))
//);
export {
  selectGlobal,
  makeSelectLocation,
  makeSelectLang,
  makeSelectPage1,
  makeSelectPage2,
  makeSelectPage3
  //makeSelectValue
};
