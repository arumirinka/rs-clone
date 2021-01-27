import { CHANGE_APP_LANG, FETCH_DATA } from './types';
import content from '../content.json';

export function changeAppLang(lang) {
  return {
    type: CHANGE_APP_LANG,
    payload: lang,
  };
}

export function fetchData(appLang) {
  return async (dispatch) => {
    // eslint-disable-next-line no-undef
    // const response = await fetch(url);
    // const json = await response.json();
    const json = content[appLang];
    dispatch({ type: FETCH_DATA, payload: json });
  };
}
