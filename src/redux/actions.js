import {
  CHANGE_APP_LANG, CHANGE_LEARN_LANG, CHANGE_LEVEL, CHANGE_LESSON, TOGGLE_SOUND, FETCH_DATA,
} from './types';
import content from '../content.json';

const getLearningLang = (lang) => {
  const langsEN = ['Английский', 'Englisch'];
  const langsFR = ['Французский', 'French', 'Französisch'];
  const langsJA = ['Японский', 'Japanese', 'Japanisch'];
  const langsRU = ['Russian'];
  if (langsEN.indexOf(lang) > -1) return 'english';
  if (langsFR.indexOf(lang) > -1) return 'french';
  if (langsJA.indexOf(lang) > -1) return 'japanese';
  if (langsRU.indexOf(lang) > -1) return 'russian';
  return 'english';
};

export function changeAppLang(lang) {
  return {
    type: CHANGE_APP_LANG,
    payload: lang,
  };
}

export function changeLearnLang(learnLang) {
  const learningLang = getLearningLang(learnLang);
  return {
    type: CHANGE_LEARN_LANG,
    payload: learningLang,
  };
}

export function changeLevel(level) {
  return {
    type: CHANGE_LEVEL,
    payload: level,
  };
}

export function changeLesson(lesson) {
  return {
    type: CHANGE_LESSON,
    payload: lesson,
  };
}

export function toggleSound(isSoundOn) {
  return {
    type: TOGGLE_SOUND,
    payload: isSoundOn,
  };
}

export function fetchData(appLang, learnLang) {
  const learningLang = getLearningLang(learnLang);
  return async (dispatch) => {
    try {
      // eslint-disable-next-line no-undef
      const response = await fetch(`/api/lessons/?appLang=${appLang}&learnLang=${learningLang}`);
      const jsonDB = await response.json();
      let data;
      if (jsonDB.content) {
        data = jsonDB.content;
      } else {
        console.log('Something went wrong:', jsonDB);
        data = content[appLang][learningLang];
      }
      dispatch({ type: FETCH_DATA, payload: data });
    } catch (e) {
      console.log('Something went wrong:', e);
      const data = content[appLang][learningLang];
      dispatch({ type: FETCH_DATA, payload: data });
    }
  };
}
