/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';
import initData from '../../data/init'
import {
  SWITCH_LANGUAGE,
SET_VALUE
} from './constants';


const initialState = fromJS(initData);

function appReducer(state = initialState, action) {
  switch (action.type) {

    case SWITCH_LANGUAGE:
      return state.set('language', action.lang);
    case SET_VALUE:
          return state.setIn(action.path.split('.'), action.value);

    default:
      return state;
  }
}

export default appReducer;
