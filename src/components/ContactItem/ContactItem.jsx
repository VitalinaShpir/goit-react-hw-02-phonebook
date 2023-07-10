import PropTypes from 'prop-types';
// import style from './ContactItem.module.css';

const ContactItem = ({name, number}) => {
  return (
    <li>
      <span >{name}:</span>
      <span >{number}</span>
      {/* <button
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        x
      </button> */}
    </li>
  );
};

ContactItem.propTypes = {
  // id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired
};
export default ContactItem