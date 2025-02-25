import Logo from '../../assets/Logo1.svg';
import { Container, LeftContainer, RightContainer, Title, Form, InputContainer, } from './styles';
import { Button } from '../../components/Button';

export function Login() {
    return (
        <Container>
           <LeftContainer>
            <img src={Logo} alt='logo DveBurguer' />
            </LeftContainer> 
            <RightContainer>
              <Title>
                Olá, seja bem vindo ao <span>DevBurguer!</span> 
                <br />
                Acesse com seu 
                <span> Login e senha.</span>
                </Title>  
                <Form>
                    <InputContainer>
                    <label htmlFor="Email">Email</label>
                    <input type="email" />
                    </InputContainer>

                    <InputContainer>
                    <label htmlFor="Senha">Senha</label>
                    <input type="password" />
                    </InputContainer>
                    <Button>Entrar</Button>
                </Form>
                <p>
                  Não possui conta? <a>Clique aqui.</a>
                </p>
            </RightContainer>
        </Container>
    );
}

