import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';

export const ContactList = ({SavedContacts}) => {

  return (
    <ul>
      {SavedContacts.length !== 0 ? (
        SavedContacts.map(({id, name, number}) => {
          return (
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
            />
          );
        })
      ) : (
        <li>Not found name</li>
      )}
    </ul>
  );
}
ContactList.propTypes = {
  SavedContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
