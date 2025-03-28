import { navLinks } from "./navLink";
import Logo from '../../assets/Logo1.png';
import { useUser } from '../../hooks/UserContext';
import { SignOut } from "@phosphor-icons/react/dist/ssr";
import { useResolvedPath } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { Container, NavLink, NavLinkContainer, ImageButton, Footer } from './styles';


export function SideNavAdmin() {
    const { logout } = useUser();
    const { pathname } = useResolvedPath();

    const navigate = useNavigate();

    return (
        <Container>
            <ImageButton onClick={() => navigate("/")}>
               <img src={Logo} alt="logo-PrimeBurguer"/>
            </ImageButton>
            <NavLinkContainer>
                {navLinks.map( link => (
                    <NavLink 
                    key={link.id} 
                    to={link.path}
                    $isActive={pathname === link.path}
                    >
                        {link.icon}
                        <span>
                          {link.label}
                        </span>
                    </NavLink>
                ))}
            </NavLinkContainer>

            <Footer>
                <NavLink to="/login" onClick={logout}>
                    <SignOut />
                    <span>Sair</span>
                </NavLink>
            </Footer>
        </Container>
    )
}