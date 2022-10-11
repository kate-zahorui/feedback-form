import svg from '../../images/sprite.svg';

const SocLinks = () => {
  return (
    <ul>
      <li>
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg width="16" height="16">
            <use href={`${svg}#icon-soc1`}></use>
          </svg>
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg width="16" height="16">
            <use href={`${svg}#icon-soc2`}></use>
          </svg>
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg width="16" height="16">
            <use href={`${svg}#icon-soc3`}></use>
          </svg>
        </a>
      </li>
      <li>
        <a
          href="https://www.pinterest.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg width="16" height="16">
            <use href={`${svg}#icon-soc4`}></use>
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default SocLinks;
