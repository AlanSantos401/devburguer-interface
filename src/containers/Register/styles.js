import styled from "styled-components";

import BackgroundLeft from "../../assets/BackgroundLeft.svg";
import BackgroundRigth from "../../assets/BackgroundRigth.png";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;

 
`;

export const LeftContainer = styled.div`
  background: url('${BackgroundLeft}');
  background-size: cover;
  background-position: center;

  height: 100%;
  width: 100%;
  max-width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
  }

`;
export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  height: 100%;
  width: 100%;
  max-width: 50%;

  background: url('${BackgroundRigth}');
  background-color:#1e1e1e;

  p {
    color:#ffffff;
    font-size: 18px;
    font-weight: 800;
    a {
        text-decoration: underline;
        color:#05c9ff;
        
        &:hover{
          color:#0185fd;
        }
      }
   }
`;
export const Title = styled.h2`
font-family: "Road Rage", serif;
  font-weight: 400;
  font-size: 40px;
  color:#9758a6;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 400px;

`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    width: 100%;
    border: none;
    height: 52px;
    border-radius: 5px;
    padding: 0 16px;
    
  }

  label {
    font-size: 18px;
    font-weight: 600;
    color: #ffffff;
    
  }

  p {
    font-size: 14px;
    line-height: 80%;
    color:#cf3057;  
    font-weight: 600;
    height: 10px;
  }

`;

