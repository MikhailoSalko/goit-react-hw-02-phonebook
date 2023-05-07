import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import ContactItem from './ContactItem/ContactItem';

const ContactList = ({ contacts, onClick }) => {
  return (
    <ul className={styles.list}>
      <ContactItem contacts={contacts} onClick={onClick} />
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  onClick: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
