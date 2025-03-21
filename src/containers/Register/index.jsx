import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';

import Logo from '../../assets/Logo1.png';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
import { Container, 
  LeftContainer, 
  RightContainer, 
  Title, 
  Form,
  Link, 
  InputContainer, 
} from './styles';

export function Register() {
  const navigate = useNavigate();

   const schema = yup
      .object ({
        name: 
          yup.string()
          .required('O nome é Obrigatório'),
       email: 
          yup.string()
          .required('O e-mail é obrigatório'),
       password: 
          yup.string()
          .min(6, 'A senha deve ter pelo menos 6 caracteres')
          .required('Digite uma senha'),
       confirmPassword: 
          yup.string()
          .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
          .required('Confirma sua senha'),
      })
      .required();

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });

    console.log(errors);

    const onSubmit = async (data) => {
      try {
        const { status } = await api.post(
          '/users', 
          {
            name: data.name,
            email: data.email,
            password: data.password,
          },
          {
            validateStatus: () => true,
          },
        );
  
        if (status === 200 || status === 201) {
          setTimeout(() => {
            navigate('/login') ;
          }, 200);
          toast.success('Conta criada com Sucesso 🍔✅');
        } else if (status === 400) {
          toast.error('Email já cadastrado! Faça o login para continuar. 🍔🚷');
        } else {
          throw new Error();  
        }
      } catch (error) {
        toast.error('Falha no Sistema! Tente Novamente 🍔❌')
      }
      
    };

    return (
        <Container>
           <LeftContainer>
            <img src={Logo} alt='logo PrimeBurguer' />
            </LeftContainer> 
            <RightContainer>
              <Title>Criar Conta</Title>  
                <Form onSubmit={handleSubmit(onSubmit)}>
                <InputContainer>
                    <label htmlFor="text">Nome</label>
                    <input type="text" {...register('name')}/>
                    <p>{errors?.name?.message}</p>
                  </InputContainer>

                  <InputContainer>
                    <label htmlFor="email">Email</label>
                    <input type="email" {...register('email')}/>
                    <p>{errors?.email?.message}</p>
                  </InputContainer>

                  <InputContainer>
                    <label htmlFor="password">Senha</label>
                    <input type="password" {...register('password')}/>
                    <p>{errors?.password?.message}</p>
                  </InputContainer>

                  <InputContainer>
                    <label htmlFor="password">Confirmar Senha</label>
                    <input type="password" {...register('confirmPassword')}/>
                    <p>{errors?.confirmPassword?.message}</p>
                  </InputContainer>
                  <Button type="submit">Criar Conta</Button>
                </Form>
                    <p>
                      Já possui conta ? <Link to="/login">Clique aqui.</Link>
                    </p>
            </RightContainer>
        </Container>
    );
}

