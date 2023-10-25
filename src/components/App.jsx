
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import './App.css';

const App = () => {
  const contacts = useSelector(state => state.contactBook.contacts);
  console.log(contacts);
  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;
