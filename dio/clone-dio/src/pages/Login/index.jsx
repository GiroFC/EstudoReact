import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { MdEmail, MdLock } from "react-icons/md";

import {
    Container, Title,
    Column,
    CriarText,
    EsqueciText,
    Row,
    SubTitleLogin,
    TitleLogin,
    Wrapper,
} from './styles'

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import {api} from '../../services/api'

const schema = yup
  .object({
    email: yup.string().email('Email nao é valido').required('Email é obrigatório'),
    password: yup.string().min('4', 'minimo de 4 caracteres').required('Senha é obrigatória'),
  })
  .required()


const Login = () => {

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
            const {data} = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
            if(data.length === 1){
                handleClickSignIn()
            }else{
                alert('Email ou senha incorretos')
            }
        }catch{
            alert('Houve um erro inesperado, tente novamente')
        }
    }

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/feed')
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
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change.</SubTitleLogin>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input errorMensage={errors?.email?.message}  control={control} required={true} name="email" placeholder="Email" leftIcon={<MdEmail />} />

                            <Input errorMensage={errors?.password?.message} control={control} required={true} name="password" placeholder="Senha" type="password" leftIcon={<MdLock />} />

                            <Button title="Entrar" variant="secundary" type="submit" />
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar Conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export default Login;