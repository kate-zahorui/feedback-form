import styled from 'styled-components';
import { device } from '../../device';

export const StyledFooter = styled.footer`
  padding: 50px 50px;
  position: relative;
  background-color: #fafafa;
  border-top: 1px solid #d8d8d8;
  overflow: hidden;

  @media ${device.mobile} {
    padding: 60px 80px;
  }

  @media ${device.tablet} {
    height: 200px;
    padding: 80px 0;
  }

  @media ${device.laptop} {
    padding: 80px 340px;
  }
`;

const Svg = styled.svg`
  position: absolute;
`;

export const SvgLeft = styled(Svg)`
  display: none;

  @media ${device.laptop} {
    display: block;
    bottom: -25px;
    left: 15px;
  }
`;

export const SvgRight = styled(Svg)`
  display: none;

  @media ${device.mobile} {
    display: block;
    top: 0;
    right: -15px;
  }
`;
