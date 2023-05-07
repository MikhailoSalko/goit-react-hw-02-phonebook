import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ filterInput }) => {
  return (
    <>
      <label className={styles.labelFilter} htmlFor="filter">
        Find contacts by name
      </label>

      <input
        type="text"
        className={styles.inputFilter}
        id="filter"
        name="filter"
        onChange={filterInput}
        placeholder="Enter contact name"
      />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  filterInput: PropTypes.func.isRequired,
};
