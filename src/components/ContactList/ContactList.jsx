import './ContactList.css';
import { deleteContact} from '../../redux/phoneBookSlice';
import { useDispatch, useSelector } from 'react-redux';

const ContactList = () => {

  const filter = useSelector(state => state.contactBook.filter);
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactBook.contacts);
  const selectedContacts = filteredContacts();

   function filteredContacts() {
    if (filter === '') {
      return contacts;
    } else {
      return contacts.filter(
        ({ name, number }) =>
          name.toLowerCase().includes(filter.toLowerCase()) ||
          number.split('-').join('').includes(filter)
      );
    }
  }
      
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(deleteContact(e.target.name));
    // deleteContact(e.target.name);
  };

  return (
    <div className="conteinerContactList">
      <ul className="contactList">
        {selectedContacts.map(contact => (
          <li key={`${contact.name}_${contact.number}`} className="contactInfo">
            <p className="contactName">{contact.name}: </p>
            <p className="contactPhone"> {contact.number}</p>
            <button
              className="btnContact"
              name={contact.id}
              onClick={handleSubmit}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
