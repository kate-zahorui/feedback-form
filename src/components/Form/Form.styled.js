import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  &:last-of-type {
    margin-bottom: 25px;
  }
`;

export const Input = styled.input`
  padding: 30px 45px;
  width: 550px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  /* font */
  font-size: 18px;
  line-height: 1.8;

  &:focus {
    border: 1px solid #fad34f;
  }
`;

export const Textarea = styled.textarea`
  resize: none;
  margin: 0;
  padding: 30px 45px;
  width: 550px;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  /* font */
  font-size: 18px;
  line-height: 1.8;

  &:hover,
  &:focus {
    border: 1px solid #fad34f;
  }
`;

export const StyledButton = styled.button`
  padding: 25px 50px;
  color: #ffffff;
  background-color: #fad34f;
  border-radius: 50px;
  border: none;
  transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #fad34f;
    background-color: #ffffff;
    border: 2px solid #fad34f;
  }
`;
