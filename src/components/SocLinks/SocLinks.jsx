import svg from '../../images/sprite.svg';
import { List, Item, Link, SvgIcon } from './SocLinks.styled';

const SocLinks = () => {
  return (
    <List>
      <Item>
        <Link
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SvgIcon width="16" height="16">
            <use href={`${svg}#icon-soc1`}></use>
          </SvgIcon>
        </Link>
      </Item>
      <Item>
        <Link
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SvgIcon width="16" height="16">
            <use href={`${svg}#icon-soc2`}></use>
          </SvgIcon>
        </Link>
      </Item>
      <Item>
        <Link
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SvgIcon width="16" height="16">
            <use href={`${svg}#icon-soc3`}></use>
          </SvgIcon>
        </Link>
      </Item>
      <Item>
        <Link
          href="https://www.pinterest.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SvgIcon width="16" height="16">
            <use href={`${svg}#icon-soc4`}></use>
          </SvgIcon>
        </Link>
      </Item>
    </List>
  );
};

export default SocLinks;
