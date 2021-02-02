import {
  CHANGE_APP_LANG, CHANGE_LEARN_LANG, CHANGE_LEVEL, CHANGE_LESSON, TOGGLE_SOUND,
} from './types';

const initialState = {
  appLang: 'russian',
  learnLang: 'english',
  level: 1,
  lesson: 1,
  isSoundOn: 'true',
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
    case CHANGE_LEVEL: {
      const level = action.payload;
      return {
        ...state,
        level,
      };
    }
    case CHANGE_LESSON: {
      const lesson = action.payload;
      return {
        ...state,
        lesson,
      };
    }
    case TOGGLE_SOUND: {
      const isSoundOn = action.payload;
      return {
        ...state,
        isSoundOn,
      };
    }
    default:
      return state;
  }
}
