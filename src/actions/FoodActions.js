import {
  FOOD_PULL,
  TRYING_FOOD_PULL,
  BROWER_FOOD,
  BUSCH_FOOD,
  LIVINGSTON_FOOD,
  NEILSON_FOOD,
  FOOD_TAB_CHANGED
} from './types';
import axios from 'axios';

export const foodPull = (url) => {
  return (dispatch) => {
    dispatch({ type: TRYING_FOOD_PULL, payload: 'pulling' });

    axios.get(url).then(response => {
      //console.log(response);
      dispatch({ type: BROWER_FOOD, payload: response.data[0] });
      dispatch({ type: BUSCH_FOOD, payload: response.data[1] });
      dispatch({ type: LIVINGSTON_FOOD, payload: response.data[2] });
      dispatch({ type: NEILSON_FOOD, payload: response.data[3] });
      dispatch({ type: TRYING_FOOD_PULL, payload: 'pulled' });
    });
  }
}

export const foodTab = (val) => {
  return {
    type: FOOD_TAB_CHANGED,
    payload: val
  };
};
