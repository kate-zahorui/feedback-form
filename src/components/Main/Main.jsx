import { useSelector } from 'react-redux';

import { Form } from '../';
import map from '../../images/Map1.png';
import background from '../../images/clouds-background.png';
import svg from '../../images/sprite.svg';
import {
  StyledMain,
  Container,
  Title,
  Image,
  ImageBackground,
  SvgLeft,
  SvgRight,
  SvgRightUp,
} from './Main.styled';

const Main = () => {
  const { isLoading, error } = useSelector(state => state.feedback);

  return (
    <StyledMain>
      <ImageBackground src={background} alt="background" />
      <SvgLeft width="125" height="125">
        <use href={`${svg}#main-left-cartoon`}></use>
      </SvgLeft>
      <Container>
        <Title>Reach out to us!</Title>
        <Form />
        {isLoading && <p>Loading...</p>}
        {error && <p>Error. {error.message}</p>}
      </Container>
      <Image src={map} alt="Map" />
      <SvgRight width="300" height="300">
        <use href={`${svg}#main-pink_cartoon`}></use>
      </SvgRight>
      <SvgRightUp width="125" height="125">
        <use href={`${svg}#main-right-cartoon`}></use>
      </SvgRightUp>
    </StyledMain>
  );
};

export default Main;
