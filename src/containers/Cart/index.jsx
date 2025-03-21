import Logo from '../../assets/Logo1.png';
import { CartItems, CartResume } from '../../components';
import { Content, Container, Banner, Title, } from './styles';

export function Cart() {
return (
    <Container>
        <Banner>
            <img src={Logo} alt={'logo devburguer'}/>
        </Banner>
        <Title>Checkout - Pedido </Title>
        <Content>
            <CartItems />
            <CartResume /> 
        </Content>
    </Container>
)

}