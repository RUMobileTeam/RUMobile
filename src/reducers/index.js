import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import FoodReducer from './FoodReducer';
import BusReducer from './BusReducer';

export default combineReducers({
  home: HomeReducer,
  food: FoodReducer,
  bus: BusReducer
});
