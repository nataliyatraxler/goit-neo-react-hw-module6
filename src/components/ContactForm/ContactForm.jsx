import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact, selectContacts } from "../../redux/contactsSlice";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      contacts.some(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      setError(`${name} is already in contacts.`);
      return;
    }

    if (name.length < 3) {
      setError("Name must be at least 3 characters long.");
      return;
    }

    if (!/^\d{3}-\d{2}-\d{2}$/.test(number)) {
      setError("Number must be in the format 123-45-67.");
      return;
    }

    dispatch(addContact({ id: Date.now().toString(), name, number }));

    setName("");
    setNumber("");
    setError("");
  };

  return (
    <form className={styles["contact-form"]} onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
          required
          className={styles.input}
        />
      </label>
      <label>
        Number:
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="123-45-67"
          required
          className={styles.input}
        />
      </label>
      {error && <p className={styles["error-message"]}>{error}</p>}
      <button type="submit" className={styles.button}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
