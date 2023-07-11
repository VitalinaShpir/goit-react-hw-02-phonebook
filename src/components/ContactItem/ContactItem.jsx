import PropTypes from 'prop-types';
import css from './ContactItem.module.css';

const ContactItem = ({id, name, number, onDeleteContact}) => {
  return (
    <li className={css.contactListItem} >
      <span className={css.contactItem} >{name}:</span>
      <span className={css.contactItem} >{number}</span>
      <button
      className={css.deleteBtn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        x
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactItem