import { FETCH_DATA } from './types';

const initialState = {
  fetchedData: {},
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA: {
      const data = action.payload;
      return { ...state, fetchedData: data };
    }
    default:
      return state;
  }
}
