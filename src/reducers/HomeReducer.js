import { FIREBASE_LOGIN, BANNER_PULL, HOME_DATE, TIME } from '../actions/types';

const INITIAL_STATE = { login: '', banner: 'Welcome to RUMobile 🐻', time: [], dateText: '' };

export default (state = INITIAL_STATE, action) => {
  //console.log(action);
  switch (action.type) {
    case FIREBASE_LOGIN:
      return { ...state, login: action.payload };
    case BANNER_PULL:
      return { ...state, banner: action.payload };
    case TIME:
      return { ...state, time: action.payload };
    case HOME_DATE:
      return { ...state, dateText: action.payload };
    default:
      return state;
  }
};
