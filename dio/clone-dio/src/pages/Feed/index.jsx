import { Link } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Card } from '../../components/Card'
import BannerImg from '../../assets/banner.png'

import { Container, TextContent, Title, TitleHighlight } from './styles'

const Feed = () => {
    return (
        <>
            <Header />
            <Container>
                <Card></Card>
            </Container>
        </>
    )
}

export default Feed;