import PropTypes from 'prop-types';

export const Filter = ({ filter, onChange }) => {
    const handleChange = (e) =>{
        onChange(e.target.value.toLowerCase())
    }
  return <input type="text" value={filter} onChange={handleChange} />;
};


Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}