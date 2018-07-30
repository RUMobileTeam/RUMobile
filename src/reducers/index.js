import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import FoodReducer from './FoodReducer';
import BusReducer from './BusReducer';
import LinkReducer from './LinkReducer';

export default combineReducers({
  home: HomeReducer,
  food: FoodReducer,
  bus: BusReducer,
  link: LinkReducer
});
