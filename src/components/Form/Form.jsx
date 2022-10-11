import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFeedback } from '../../redux/feedback/feedbackOperations';

import {
  StyledForm,
  Label,
  Input,
  StyledButton,
  Textarea,
} from './Form.styled';

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
    <StyledForm name="feedback" onSubmit={handleSubmit}>
      <Label htmlFor="">
        <Input
          type="text"
          name="name"
          placeholder="Your name*"
          required
          value={name}
          onChange={handleInputChange}
        />
      </Label>
      <Label htmlFor="">
        <Input
          type="email"
          name="email"
          placeholder="Your e-mail*"
          required
          value={email}
          onChange={handleInputChange}
        />
      </Label>
      <Label htmlFor="">
        <Textarea
          name="message"
          placeholder="Your message*"
          rows="3"
          required
          value={message}
          onChange={handleInputChange}
        />
      </Label>
      <StyledButton type="submit">Send message</StyledButton>
    </StyledForm>
  );
};

export default Form;
