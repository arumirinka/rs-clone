import { CHANGE_APP_LANG, CHANGE_LEARN_LANG } from './types';

const initialState = {
  appLang: 'russian',
  learnLang: 'english',
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
    case CHANGE_LEARN_LANG: {
      const lang = action.payload;
      return {
        ...state,
        learnLang: lang,
      };
    }
    default:
      return state;
  }
}
