import styled from 'styled-components';

export const StyledMain = styled.main`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  padding: 0 0 5px 145px;

  background-image: url('../../images/clouds-background.png');
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: contain;
`;

export const Container = styled.section`
  margin-right: 110px;
  padding: 150px 0 0 0;
  z-index: 1;
  /* padding: 180px 0 0 145px; */
`;

export const Title = styled.h1`
  margin-bottom: 40px;
  color: #3e3e3e;
  /* font */
  font-weight: 400;
  font-size: 40px;
  line-height: 1.3;
`;

export const Image = styled.img`
  width: 620px;
`;

export const ImageBackground = styled.img`
  position: absolute;
  width: 100%;
  height: auto;
  left: 0;
  top: 20px;
`;

const Svg = styled.svg`
  position: absolute;
`;

export const SvgLeft = styled(Svg)`
  top: 40px;
  left: 45px;
`;

export const SvgRight = styled(Svg)`
  top: 560px;
  right: 390px;
`;

export const SvgRightUp = styled(Svg)`
  top: 515px;
  right: 550px;
`;
