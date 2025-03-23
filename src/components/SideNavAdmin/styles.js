import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: ${props => props.theme.black};
 
 `

export const NavLinkContainer = styled.nav`
   display: flex;
   flex-direction: column;
   width: 100%;
`
export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  text-decoration: none;
  color: ${props => props.theme.white};
  background-color: ${props => props.$isActive ? props.theme.purple : 'transparent'};

  &:hover {
    background-color: ${ props => props.theme.purple};
  }
`
export const ImageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  img {
    width: 60%;
    margin: 40px 0;
  }
`

export const Footer= styled.footer`
    width: 100%;
    margin-top: auto;

`