import styled from "styled-components";
import BannerHamburguer from '../../assets/Banner.svg';
import FundoPadrao from '../../assets/Padrao1.png';
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f0f0f0;

  background: url('${FundoPadrao}');
`

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 480px;
  width: 100%;
  position: relative;

  background: url('${BannerHamburguer}') no-repeat;
  background-color: #1f1f1f ;
  background-position: center;
  background-size: cover;

h1 {
  font-family: 'Road Rage', sans-serif;
  font-size  : 80px;
  line-height: 65px;
  color: #ffffff;
  position: absolute;

  right: 20%;
  top: 30%;

  span {
    display: block;
    color: #ffffff;
    font-size: 20px;
  }
}`;

export const CategoryMenu = styled.div`
   display: flex;
   justify-content: center;
   gap: 50px;
   margin-top: 30px;
`

export const CategoryButton = styled(Link)`
   text-decoration: none;
   cursor: pointer;
  background: none;
  color:${props => (props.$isActiveCategory?'#9758a6' : '#696969')};
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 5px;
  line-height: 20px;
  border: none;
  border-bottom: ${ props => props.$isActiveCategory && '3px solid #9758a6'};
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 40px;
  gap: 60px;
  justify-content: center;
  max-width: 1280px;
  margin: 50px auto 10px;
`;
export const ReturnButton = styled(Link)`
 text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  background: none;
  color:#9758a6;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 80px;
  line-height: 20px;
  border: none;

  &:hover {
    color:rgb(129, 60, 146);
    text-decoration: underline;
  }
`