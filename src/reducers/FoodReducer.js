import {
  FOOD_PULL,
  TRYING_FOOD_PULL,
  BROWER_FOOD,
  BUSCH_FOOD,
  LIVINGSTON_FOOD,
  NEILSON_FOOD,
  FOOD_TAB_CHANGED
} from '../actions/types';

const INITIAL_STATE = { trying_food_pull: 'not trying', brower: [], busch: [], livingston: [], neilson: [], tab_index: 0 };

export default (state = INITIAL_STATE, action) => {
  //console.log(action);
  switch (action.type) {
    case TRYING_FOOD_PULL:
      return { ...state, trying_food_pull: action.payload };
    case BROWER_FOOD:
      return { ...state, brower: action.payload };
    case BUSCH_FOOD:
      return { ...state, busch: action.payload };
    case LIVINGSTON_FOOD:
      return { ...state, livingston: action.payload };
    case NEILSON_FOOD:
      return { ...state, neilson: action.payload };
      case FOOD_TAB_CHANGED:
        return { ...state, tab_index: action.payload };
    default:
      return state;
  }
};
