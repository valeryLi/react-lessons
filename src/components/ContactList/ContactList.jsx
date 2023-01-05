import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contacts-selectors';
import { getFilterValue } from 'redux/filter/filter-selectors';
import s from './ContactList.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const filtredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
  return (
    <ul className={s.contact_list}>
      {filtredContacts.map(({ name, number, id }) => {
        return <Contact key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
};
