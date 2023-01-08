import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';
import s from './Contact.module.css';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.contact_item}>
      <p>
        <span className={s.contact_name}>{name}:</span>{' '}
        <span className={s.contact_number}>{number}</span>
      </p>
      <button
        className={s.delete_btn}
        type="button"
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
