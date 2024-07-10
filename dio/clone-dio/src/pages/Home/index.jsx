import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import BannerImg from '../../assets/banner.png'

import { Container, TextContent, Title, TitleHighlight } from './styles'

const Home = () => {

    const navigate = useNavigate();

    const handleClickSignIn = () =>{
        navigate('/login')
    }

    return (
        <>
            <Header />
            <Container>
                <div>
                    <Title>
                        <TitleHighlight>
                            Implemente
                            <br />
                        </TitleHighlight>
                        o seu futuro global agora!
                    </Title>
                    <TextContent>
                        Domine as tecnologias utilizadas pelas 
                        empresas mais inovadoras do mundo e 
                        encare seu novo desafio profissional, 
                        evoluindo em comunidade com os melhores experts.
                    </TextContent>
                    <Button title="Começar agora" variant="secondaty" onClick={handleClickSignIn}/>
                </div>
                <div>
                    <img src={BannerImg} alt="Imagem Principal" />
                </div>
            </Container>
        </>
    )
}

export default Home;