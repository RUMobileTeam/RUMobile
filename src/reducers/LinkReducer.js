import {
  LINK_LIST
} from '../actions/types';

const INITIAL_STATE = { data: {} };

export default (state = INITIAL_STATE, action) => {
  //console.log(action);
  switch (action.type) {
    case LINK_LIST:
      return { ...state, nb_data: action.payload };
    default:
      return state;
  }
};
