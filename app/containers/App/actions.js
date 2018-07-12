import {
  SWITCH_LANGUAGE,
SET_VALUE
} from './constants';

export function switchLanguage(lang) {
  return {
    type: SWITCH_LANGUAGE,
    lang
  }
}

export function setValue(path, value) {
  return {
    type: SET_VALUE,
    path, value
  }
}
