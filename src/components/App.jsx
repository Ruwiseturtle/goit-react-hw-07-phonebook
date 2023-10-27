import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useDispatch } from 'react-redux';
import './App.css';
import { useEffect } from 'react';
import { getRequestContacts } from '../redux/phoneBookSlice';

const App = () => {
  const dispatch = useDispatch();

   
  useEffect(() => {
    dispatch(getRequestContacts());
          
  }, [dispatch]);

  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
