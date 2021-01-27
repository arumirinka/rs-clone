import { CHANGE_APP_LANG } from './types';

const initialState = {
  appLang: 'russian',
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_APP_LANG: {
      const lang = action.payload;
      return {
        ...state,
        appLang: lang,
      };
    }
    default:
      return state;
  }
}
