import {
  SET_POINTS, SEND_POINTS_TO_DB, GET_POINTS_FROM_DB,
} from './types';

const initialState = {
  russian: {
    english: {
      currentLevel: 1,
      langPoints: 0,
      level1: {
        lesson1: 0,
      },
      weekProgress: [],
    },
    japanese: {
      currentLevel: 1,
      langPoints: 0,
      level1: {
        lesson1: 0,
      },
      weekProgress: [],
    },
    french: {
      currentLevel: 1,
      langPoints: 0,
      level1: {
        lesson1: 0,
      },
      weekProgress: [],
    },
  },
  english: {
    russian: {
      currentLevel: 1,
      langPoints: 0,
      level1: {
        lesson1: 0,
      },
      weekProgress: [],
    },
    japanese: {
      currentLevel: 1,
      langPoints: 0,
      level1: {
        lesson1: 0,
      },
      weekProgress: [],
    },
    french: {
      currentLevel: 1,
      langPoints: 0,
      level1: {
        lesson1: 0,
      },
      weekProgress: [],
    },
  },
  german: {
    english: {
      currentLevel: 1,
      langPoints: 0,
      level1: {
        lesson1: 0,
      },
      weekProgress: [],
    },
    japanese: {
      currentLevel: 1,
      langPoints: 0,
      level1: {
        lesson1: 0,
      },
      weekProgress: [],
    },
    french: {
      currentLevel: 1,
      langPoints: 0,
      level1: {
        lesson1: 0,
      },
      weekProgress: [],
    },
  },
};

export default function statsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_POINTS: {
      const {
        appLang, learnLang, level, lesson, points,
      } = action.payload;
      return {
        ...state,
        [appLang]: {
          ...state[appLang],
          [learnLang]: {
            ...state[appLang][learnLang],
            [level]: {
              ...state[appLang][learnLang][level],
              [lesson]: points,
            },
          },
        },
      };
    }
    case GET_POINTS_FROM_DB: {
      if (action.payload) {
        const { json, appLang, learnLang } = action.payload;
        return {
          ...state,
          [appLang]: {
            ...state[appLang],
            [learnLang]: {
              ...state[appLang][learnLang],
              ...json,
            },
          },
        };
      }
      return {
        ...state,
      };
    }
    case SEND_POINTS_TO_DB: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
