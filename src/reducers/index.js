import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import FoodReducer from './FoodReducer';

export default combineReducers({
  home: HomeReducer,
  food: FoodReducer
});
