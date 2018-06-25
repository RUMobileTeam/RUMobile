import { TEST } from '../actions/types';

const INITIAL_STATE = { testString: 'Hello' };

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case TEST:
      return { ...state, testString: action.payload };
    default:
      return state;
  }
};
