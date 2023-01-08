import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilterValue: (state, { payload }) => {
      state.filter = payload.toLowerCase();
    },
  },
});

export const { setFilterValue } = filterSlice.actions;
export default filterSlice.reducer;
