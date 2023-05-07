import PropTypes from 'prop-types';
import styles from './ContactItem.module.css';

const ContactItem = ({ contacts, onClick }) => {
  return contacts.map(({ id, name, number }) => {
    return (
      <li key={id} className={styles.item}>
        <p className={styles.itemText}>
          {name}: {number}
        </p>
        <button
          type="button"
          className={styles.itemButton}
          onClick={() => onClick(id)}
        >
          Delete
        </button>
      </li>
    );
  });
};

export default ContactItem;

ContactItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
