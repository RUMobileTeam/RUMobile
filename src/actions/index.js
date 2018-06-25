import { TEST } from './types';

export const testAction = () => {
  return {
    type: TEST,
    payload: '12345'
  };
};
