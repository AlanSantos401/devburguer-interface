import styled from "styled-components";
import BannerHamburguer from '../../assets/Banner.svg';
import FundoPadrao from '../../assets/Padrao1.png';
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.secondWhite};

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
  background-color: ${props => props.theme.mainBlack} ;
  background-position: center;
  background-size: cover;

h1 {
  font-family: 'Road Rage', sans-serif;
  font-size  : 80px;
  line-height: 65px;
  color: ${props => props.theme.white};
  position: absolute;

  right: 20%;
  top: 30%;

  span {
    display: block;
    color: ${props => props.theme.white};
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
  color:${props => (props.$isActiveCategory 
    ? `${props => props.theme.purple}` 
    : '#696969')};
  font-size: 24px;
  font-weight: 500;
  padding-bottom: 5px;
  line-height: 20px;
  border: none;
  border-bottom: ${props => props.$isActiveCategory ? `3px solid ${props.theme.purple}` : 'none'};
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
  color: ${props => props.theme.purple};
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 80px;
  line-height: 20px;
  border: none;

  &:hover {
    color:#813c92;
    text-decoration: underline;
  }
`