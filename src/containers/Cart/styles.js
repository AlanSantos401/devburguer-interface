import styled from "styled-components";
import Texture from '../../assets/Texture.svg';
import FundoPadrao from '../../assets/Padrao1.png';

export const Container = styled.div`
  width: 100%;
  background-color: ${props => props.theme.secondWhite};
  background: url('${FundoPadrao}');
  min-height: 100vh;
`;
export const Banner = styled.div`
  background: url('${Texture}');
  background-size: cover;
  background-position: center;
  background-color: ${props => props.theme.mainBlack};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  height: 180px;

  img {
    height: 130px;
  }
`;
export const Title = styled.div`
   font-size: 32px;
   font-weight: 800;
   padding-bottom: 12px;
   color: ${props => props.theme.gren};
   text-align: center;
   position: relative;

   &:after {
    position: absolute;
    left: calc(50% + -28px);
    content: '';
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: ${props => props.theme.gren};

   }
`;
export const Content = styled.div`
   display: grid;
   grid-template-columns: 1fr 30%;
   gap: 40px;
   width: 100%;
   max-width: 1280px;
   padding: 40px;
   margin: 0 auto;

`;