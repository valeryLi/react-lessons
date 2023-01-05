import { SET_FILTER_VALUE } from './filter-types';

export const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case SET_FILTER_VALUE:
      return [payload];

    default:
      return state;
  }
};
