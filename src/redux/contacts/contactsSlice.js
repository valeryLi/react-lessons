// При проектировании, структура состояния Redux делится на слайсы (slice, часть), за каждый из которых отвечает отдельный редюсер.
// Функция createSlice() это надстройка над createAction() и createReducer(), которая стандартизирует и еще больше упрощает объявление слайса.
// Если в других случаях нельзя мутировать стейт, то в случае со слайсом - можно.(т.к. библиотека сама создает копию стейта)

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    deleteContact: (state, { payload }) => {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
