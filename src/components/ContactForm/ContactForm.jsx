import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: ' ',
    number: ' ',
  };

  handleSubmitContact = event => {
    const { name, number } = this.state;
    event.preventDefault();
    // const form = e.currentTarget
    // const name = e.currentTarget.elements.name.value.trim();
    // const number = e.currentTarget.elements.number.value.trim();

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    this.props.onSubmit(newContact);
    this.reset();
  };
  
  reset = () => {
    this.setState({
      name: ' ',
      number: ' ',
    })
  }

  nameChange = event =>{
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });

  };


  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmitContact}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.nameChange}
            value={name}
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.nameChange}
            value={number}
          />
        </label>
        <button type='submit'>Add contact</button>
      </form>
    );
  }
}
