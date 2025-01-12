import PropTypes from "prop-types";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => (
  <li className={styles["contact-card"]}>
    <div className={styles["contact-info"]}>
      <span className={styles["contact-icon"]}>👤</span>
      <p>{name}</p>
    </div>
    <div className={styles["contact-info"]}>
      <span className={styles["contact-icon"]}>📞</span>
      <p>{number}</p>
    </div>
    <button className={styles["delete-button"]} onClick={() => onDelete(id)}>
      Delete
    </button>
  </li>
);

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
