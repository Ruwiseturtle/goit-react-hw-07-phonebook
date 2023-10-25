import Notiflix from 'notiflix';
import './ContactForm.css';
import { addContact, setName, setNumber } from '../../redux/phoneBookSlice';
import { useDispatch, useSelector } from 'react-redux';

const ContactForm = () => {

  const contacts = useSelector(state => state.contactBook.contacts);
  const name = useSelector(state => state.contactBook.name);
  const number = useSelector(state => state.contactBook.number);
   const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      dispatch(setName(e.target.value));
    } else if (e.target.name === 'number') {
      dispatch(setNumber(e.target.value));
    }
  };

  //при натисненні на кнопку add contact викликається ф-ція з app, яка додає новий контакт
  //і в ту ф-цію відправляється обьект з даними нового користувача
  const handleSubmit = e => {
    e.preventDefault();
    const nameInput = name.trimStart().trimEnd();
    const numberInput = number.trimStart().trimEnd();
    
    const isThereSuchUser = contacts.some(
      ({ name, number }) =>
        name.toLowerCase() === nameInput.toLowerCase() && number === numberInput
    );
    
    if (isThereSuchUser) {
      Notiflix.Notify.info(`${name} is slready in contact`);
      dispatch(setName(''));
      dispatch(setNumber(''));
      return;
    }
    dispatch(addContact({ id: `${name}_${number}`, name: name, number: number }));
    dispatch(setName(''));
    dispatch(setNumber(''));
  };

  return (
    <div>
      <form className="contactForm" onSubmit={handleSubmit}>
        <label>
          <p className="textLabel">Name</p>
          <input
            className="inputName"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={name}
          />
        </label>

        <label>
          <p className="textLabel">Number</p>
          <input
            className="inputTel"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={number}
          />
        </label>

        <button className="btnAdContact" type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
