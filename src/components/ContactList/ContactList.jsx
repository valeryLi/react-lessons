import { Contact } from 'components/Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';
import { selectFilter } from 'redux/filter/filter-selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import s from './ContactList.module.css';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filtredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
  return (
    <>
      {isLoading && <Loader />}
      <ul className={s.contact_list}>
        {filtredContacts.map(({ name, phone, id }) => {
          return <Contact key={id} id={id} name={name} number={phone} />;
        })}
      </ul>
    </>
  );
};
