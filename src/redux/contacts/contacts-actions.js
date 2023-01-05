// Экшены - это объекты, которые передают данные из компонентов в стор, тем самым сигнализируя о том, какое событие произошло в интерфейсе. Они являются единственным источником информации для стора.

import { ADD_CONTACT, DELETE_CONTACT } from './contacts-types';

export const addContact = contact => {
  return {
    type: ADD_CONTACT,
    payload: contact,
  };
};

export const deleteContact = id => {
  return {
    type: DELETE_CONTACT,
    payload: id,
  };
};
