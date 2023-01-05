// Объект, который содержит полное состояние приложения, методы доступа к состоянию и отправки экшенов. В приложении может быть только один стор.
import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactsReducer } from './contacts/contacts-reducers';
import { filterReducer } from './filter/filter-reducers';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
