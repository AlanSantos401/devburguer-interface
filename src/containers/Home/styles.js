import styled from 'styled-components';

import BannerHome from '../../assets/banner-home.svg';
import FundoPadrao from '../../assets/Padrao1.png';

export const Banner = styled.div`
   background: url('${BannerHome}');
   background-size: cover;
   background-position: center;
   height: 450px;

h1 {
    font-family: "Road Rage", serif;
    font-size: 80px;
    color: ${props => props.theme.darkWhite};
    position: absolute;
    right: 20%;
    top: 10vh;
}
`

export const Container = styled.section`
   background: url('${FundoPadrao}');
   

`

