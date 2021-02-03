import { combineReducers } from 'redux';
import appReducer from './appReducer';
import dataReducer from './dataReducer';
import statsReducer from './statsReducer';

const rootReducer = combineReducers({
  app: appReducer,
  data: dataReducer,
  stats: statsReducer,
});

export default rootReducer;
