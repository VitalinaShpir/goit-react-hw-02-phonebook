import PropTypes from 'prop-types';
// import style from './ContactItem.module.css';

const ContactItem = ({id, name, number, onDeleteContact}) => {
  return (
    <li>
      <span >{name}:</span>
      <span >{number}</span>
      <button
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