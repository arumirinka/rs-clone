import { CHANGE_APP_LANG, FETCH_DATA } from './types';

export function changeAppLang(lang) {
  return {
    type: CHANGE_APP_LANG,
    payload: lang,
  };
}

export function fetchData() {
  return async (dispatch) => {
    // eslint-disable-next-line no-undef
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const json = await response.json();
    dispatch({ type: FETCH_DATA, payload: json });
  };
}
