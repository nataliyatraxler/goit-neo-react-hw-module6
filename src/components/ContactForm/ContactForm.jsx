import { useState } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate name: allow letters, numbers, spaces; check length
    if (name.length < 3) {
      setError("Name must be at least 3 characters long.");
      return;
    }

    // Validate number format
    if (!/^\d{3}-\d{2}-\d{2}$/.test(number)) {
      setError("Number must be in the format 123-45-67.");
      return;
    }

    // Clear errors and submit
    setError("");
    onSubmit({ name, number });
    setName("");
    setNumber("");
  };

  return (
    <form className={styles["contact-form"]} onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          required
          className={styles.input}
        />
      </label>
      {/* Display error message */}
      {error && <p className={styles["error-message"]}>{error}</p>}
      <button type="submit" className={styles.button}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
