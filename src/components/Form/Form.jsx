import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFeedback } from '../../redux/feedback/feedbackOperations';

const Form = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newFeedback = { name, email, message };
    dispatch(addFeedback(newFeedback));

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        <input
          type="text"
          name="name"
          placeholder="Your name*"
          required
          value={name}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="">
        <input
          type="email"
          name="email"
          placeholder="Your e-mail*"
          required
          value={email}
          onChange={handleInputChange}
        />
      </label>
      <label htmlFor="">
        <input
          type="text"
          name="message"
          placeholder="Your message*"
          required
          value={message}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Send message</button>
    </form>
  );
};

export default Form;
