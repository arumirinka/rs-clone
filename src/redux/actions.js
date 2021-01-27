import { CHANGE_APP_LANG } from './types';

// eslint-disable-next-line import/prefer-default-export
export function changeAppLang(lang) {
  return {
    type: CHANGE_APP_LANG,
    payload: lang,
  };
}
