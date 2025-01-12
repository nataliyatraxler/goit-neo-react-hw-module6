import PropTypes from "prop-types";
import Contact from "../Contact/Contact";
import "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className="contact-list">
    {contacts.map(({ id, name, number }) => (
      <Contact
        key={id}
        id={id}
        name={name}
        number={number}
        onDelete={onDeleteContact}
      />
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
