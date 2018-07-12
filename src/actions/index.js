import { TEST } from './types';
import nextbusjs from 'nextbusjs';
//var rutgers = require('nextbusjs').client();

export const testAction = () => {
  return {
    type: TEST,
    payload: '12345'
  };
};

export const testDataPull = () => {
  var nearest = rutgers.closestStops(40.40264, -74.3840120);
  console.log(nearest);
  return {
    type: DataPull,
    payload: nearest
  };

};
