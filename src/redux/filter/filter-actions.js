import { SET_FILTER_VALUE } from './filter-types';

export const setFilterValue = value => {
  return {
    type: SET_FILTER_VALUE,
    payload: value,
  };
};
