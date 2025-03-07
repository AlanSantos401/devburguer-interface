import styled from "styled-components";
import Texture from '../../assets/Texture.svg';
import FundoPadrao from '../../assets/Padrao1.png';

export const Container = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  background: url('${FundoPadrao}');
  min-height: 100%;
  height: 100vh;
`;
export const Banner = styled.div`
  background: url('${Texture}');
  background-size: cover;
  background-position: center;
  background-color: #1f1f1f;
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
   color: #61a120;
   text-align: center;
   position: relative;

   &:after {
    position: absolute;
    left: calc(50% + -28px);
    content: '';
    bottom: 0;
    width: 56px;
    height: 4px;
    background-color: #61a120;

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