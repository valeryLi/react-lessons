// Redux Toolkit предоставляет функцию configureStore(options), которая оборачивает оригинальный createStore(), единственным аргументом ожидает объект параметров и настраивает некоторые полезные инструменты разработки как часть процесса создания стора.
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
