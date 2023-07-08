import PropTypes from 'prop-types';

export const ContactItem = ({name, number }) => {
  return (
    <li>
      <span>{name}</span>
      <span>{number}</span>
      {/* <button onClick={() => deleteContact(id)}>Delete</button> */}
    </li>
  );
};
