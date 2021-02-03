import {
  SET_POINTS, SEND_POINTS_TO_DB, GET_POINTS_FROM_DB,
} from './types';

const initialState = {
  russian: {
    english: {
      level1: {
        lesson1: 0,
      },
    },
    japanese: {
      level1: {
        lesson1: 0,
      },
    },
    french: {
      level1: {
        lesson1: 0,
      },
    },
  },
  english: {
    russian: {
      level1: {
        lesson1: 0,
      },
    },
    japanese: {
      level1: {
        lesson1: 0,
      },
    },
    french: {
      level1: {
        lesson1: 0,
      },
    },
  },
  german: {
    english: {
      level1: {
        lesson1: 0,
      },
    },
    japanese: {
      level1: {
        lesson1: 0,
      },
    },
    french: {
      level1: {
        lesson1: 0,
      },
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
