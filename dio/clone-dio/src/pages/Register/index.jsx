import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { MdEmail, MdLock, MdPerson } from "react-icons/md";

import {
    Container, Title,
    Column,
    LoginText,
    Row,
    SubTitleLogin,
    TitleLogin,
    Wrapper,
    JatenhoConta,
    TextCard,
} from './styles'

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import {api} from '../../services/api'

const schema = yup
  .object({
    nome: yup.string().required('Nome é obrigatório'),
    email: yup.string().email('Email nao é valido').required('Email é obrigatório'),
    password: yup.string().min('4', 'minimo de 4 caracteres').required('Senha é obrigatória'),
  })
  .required()


const Register = () => {

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange'
    })


    const onSubmit = async formData => {
        try{
            const {data} = await api.post(`users`, {
                id: 4,
                name: formData.nome,
                email: formData.email,
                senha: formData.password,
            });
            alert('conta criada com sucesso, você será redirecionado para o login')
            handleLogin();
        }catch{
            alert('Houve um erro inesperado, tente novamente')
        }
    }

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/feed')
    }

    const handleLogin = () => {
        navigate('/login')
    }

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts,
                        dominar as principais tecnologias e entrar mais
                        rápido nas empresas desejadas.
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Comece agora grátis</TitleLogin>
                        <SubTitleLogin>Crie sua conta e make the change._</SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input errorMensage={errors?.nome?.message} control={control} required={true} name="nome" placeholder="Nome Completo" type="text" leftIcon={<MdPerson />} />
                            <Input errorMensage={errors?.email?.message}  control={control} required={true} name="email" placeholder="Email" leftIcon={<MdEmail />} />
                            <Input errorMensage={errors?.password?.message} control={control} required={true} name="password" placeholder="Senha" type="password" leftIcon={<MdLock />} />

                            <Button title="Criar Minha Conta" variant="secundary" type="submit" />
                        </form>
                        <TextCard>
                            Ao Clicar em "Criar minha conta", declaro que aceito
                            as Políticas de Privacidade e os Termos de Uso da DIO.
                        </TextCard>
                        <Row>
                            <JatenhoConta><b>Já tenho Conta.</b></JatenhoConta>
                            <LoginText onClick={handleLogin}>Fazer login</LoginText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export default Register;