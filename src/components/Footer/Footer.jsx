import { SocLinks } from '../';
import { StyledFooter, SvgLeft, SvgRight } from './Footer.styled';

import svg from '../../images/sprite.svg';

const Footer = () => {
  return (
    <StyledFooter>
      <SvgLeft width="290" height="290">
        <use href={`${svg}#footer-pink-cartoon`}></use>
      </SvgLeft>
      <SocLinks />
      <SvgRight width="243" height="172">
        <use href={`${svg}#footer-group-cartoon`}></use>
      </SvgRight>
    </StyledFooter>
  );
};

export default Footer;
