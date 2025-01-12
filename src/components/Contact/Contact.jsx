import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id)); // Используем useDispatch для удаления контакта
  };

  return (
    <li className={styles["contact-card"]}>
      <div className={styles["contact-info"]}>
        <span className={styles["contact-icon"]}>👤</span>
        <p>{name}</p>
      </div>
      <div className={styles["contact-info"]}>
        <span className={styles["contact-icon"]}>📞</span>
        <p>{number}</p>
      </div>
      <button className={styles["delete-button"]} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
