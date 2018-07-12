import {
  SWITCH_LANGUAGE
} from './constants';

export function switchLanguage(lang) {
  return {
    type: SWITCH_LANGUAGE,
    lang
  }
}

