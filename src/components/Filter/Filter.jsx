import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/filter/filterSlice';
import s from './Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label className={s.filter}>
      Find contacts by name:
      <input
        className={s.filter_input}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={event => dispatch(setFilterValue(event.target.value))}
      />
    </label>
  );
};
