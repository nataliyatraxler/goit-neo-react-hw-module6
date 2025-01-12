import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { selectContacts, deleteContact } from "./redux/contactsSlice";
import { selectFilter } from "./redux/filtersSlice";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  const contacts = useSelector(selectContacts); // Получаем контакты из Redux
  const filter = useSelector(selectFilter); // Получаем фильтр из Redux
  const dispatch = useDispatch();

  // Фильтрация контактов
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  console.log("Redux state - Contacts:", contacts);
  console.log("Redux state - Filter:", filter);
  console.log("Filtered Contacts (final):", filteredContacts);

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id)); // Удаляем контакт через Redux
  };

  return (
    <div className="app-container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact} // Передаем функцию удаления
      />
    </div>
  );
};

export default App;
