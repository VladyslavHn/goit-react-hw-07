import { useSelector } from "react-redux";
import Contact from "../contact/contact";
import css from './contactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name) || "";

  const filteredContacts = 
    filter.trim() === ''
      ? contacts.slice()
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
