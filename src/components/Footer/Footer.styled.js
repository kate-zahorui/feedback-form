import styled from 'styled-components';

export const StyledFooter = styled.footer`
  height: 200px;
  padding: 80px 340px;
  position: relative;
  background-color: #fafafa;
  border-top: 1px solid #d8d8d8;
  overflow: hidden;
`;

const Svg = styled.svg`
  position: absolute;
`;

export const SvgLeft = styled(Svg)`
  bottom: -25px;
  left: 15px;
`;

export const SvgRight = styled(Svg)`
  top: 0;
  right: -15px;
`;
