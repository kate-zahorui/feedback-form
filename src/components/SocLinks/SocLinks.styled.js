import styled from 'styled-components';
import { device } from '../../device';

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.mobile} {
    justify-content: flex-start;
    width: 430px;
    margin: 0 auto;
  }

  @media ${device.tablet} {
    width: 550px;
  }

  @media ${device.laptop} {
    width: 100%;
  }
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
