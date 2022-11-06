import styled from 'styled-components';
import { device } from '../../device';
import background from '../../images/clouds-background.png';

export const StyledMain = styled.main`
  flex-grow: 1;

  position: relative;
  overflow: hidden;
  padding: 0 0 5px 0;
  /* background */
  background-image: url(${background});
  background-repeat: repeat-y;
  background-position: 0 20px;
  background-size: contain;

  @media ${device.desktop} {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    padding: 0 0 5px 145px;
    /* background */
    background-repeat: no-repeat;
    background-position: 50% 20px;
    background-size: cover;
  }
`;

export const FormContainer = styled.section`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding: 150px 10px 0 10px;
  width: 100%;

  @media ${device.mobile} {
    margin-bottom: 0;
    width: 450px;
  }

  @media ${device.tablet} {
    width: 550px;
    padding: 150px 0 0 0;
  }

  @media ${device.desktop} {
    margin-right: 110px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 40px;
  color: #3e3e3e;
  /* font */
  font-weight: 400;
  font-size: 40px;
  line-height: 1.3;
`;

export const MapContainer = styled.section`
  position: relative;
  width: 280px;
  margin-left: auto;

  @media ${device.mobile} {
    width: 400px;
  }

  @media ${device.tablet} {
    width: 620px;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

const Svg = styled.svg`
  position: absolute;
`;

export const SvgLeft = styled(Svg)`
  top: 40px;
  left: 45px;
`;

export const SvgRight = styled(Svg)`
  top: 190px;
  right: 90px;
  scale: 0.4;

  @media ${device.mobile} {
    top: 310px;
    right: 210px;
    scale: 0.7;
  }

  @media ${device.tablet} {
    top: 560px;
    right: 390px;
    scale: 1;
  }
`;

export const SvgRightUp = styled(Svg)`
  top: 225px;
  right: 205px;
  scale: 0.4;

  @media ${device.mobile} {
    top: 310px;
    right: 340px;
    scale: 0.7;
  }

  @media ${device.tablet} {
    top: 515px;
    right: 550px;
    scale: 1;
  }
`;
