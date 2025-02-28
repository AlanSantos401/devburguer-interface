import styled from "styled-components";
import BannerHamburguer from '../../assets/Banner.svg';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #f0f0f0;
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

export const CategoryMenu = styled.div``

export const ProductsContainer = styled.div``