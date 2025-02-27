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
    color: #f4f4f4;
    position: absolute;
    right: 20%;
    top: 10%;
}
`

export const Container = styled.section`
   background:linear-gradient(
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0.4)
      ),
    url('${FundoPadrao}');
   height: 500px;

`

export const Content = styled.div`

`
