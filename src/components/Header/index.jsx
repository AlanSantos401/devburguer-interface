import { ShoppingCart, User, Gear } from '@phosphor-icons/react';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import { useUser } from '../../hooks/UserContext';

import { 
   Container,
   Navigation,
   Options, 
   Logout, 
   Profile, 
   LinkContainer, 
   HeaderLink,
   Content,
   ButtonAdmin,
  } from './styles';

export function Header() {
  const navigate = useNavigate();
  const { logout, userInfo } = useUser();
  

  const { pathname } = useResolvedPath();

  const isAdmin = userInfo?.admin === true;



   function logoutUser() {
      logout();
      navigate('/login')
   }
    return (
        <Container>
          <Content>
           <Navigation>
             <div>
                <HeaderLink to='/' $isActive={pathname === '/'}>
                 Home
                </HeaderLink>
                <HeaderLink to='/cardapio' $isActive={pathname === '/cardapio'}>
                 Cardápio
                </HeaderLink>
             </div>
           </Navigation>
           <Options>
             <Profile>
                 <User size={24} color='#fff'/>

                 {isAdmin && (
              <ButtonAdmin onClick={() => navigate('/admin/produtos')}>
                <Gear size={24} color='#fff'/>
              </ButtonAdmin>
                 )}
                 
                 <div>
                    <p>Olá, <span>{userInfo.name}</span></p>
                    <Logout onClick={logoutUser}>Sair</Logout>
                 </div>
             </Profile>  
             <LinkContainer>
          
                <ShoppingCart color='#fff' size={24}/>
                 <HeaderLink to='/carrinho'>Carrinho</HeaderLink>
            </LinkContainer>          
           </Options>
          
          </Content>
        </Container>
    )
}