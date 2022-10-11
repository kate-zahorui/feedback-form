import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Link = styled.a`
  padding: 5px;
  color: #696969;

  &:hover,
  &:focus {
    color: #fad34f;
  }
`;

export const SvgIcon = styled.svg`
  fill: currentColor;
`;
