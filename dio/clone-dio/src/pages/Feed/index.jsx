import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";
import BannerImg from "../../assets/banner.png";

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado={true}/>
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># RAKING 5 TOP DA SEMANA</TitleHighlight>
          <UserInfo
            percentual={28}
            nome="Igor Franco"
            image="https://avatars.githubusercontent.com/u/83724295?s=400&u=51b55648c42211d8140eb6ab0f04f11787fff872&v=4"
          />
          <UserInfo
            percentual={28}
            nome="Igor Franco"
            image="https://avatars.githubusercontent.com/u/83724295?s=400&u=51b55648c42211d8140eb6ab0f04f11787fff872&v=4"
          />
          <UserInfo
            percentual={28}
            nome="Igor Franco"
            image="https://avatars.githubusercontent.com/u/83724295?s=400&u=51b55648c42211d8140eb6ab0f04f11787fff872&v=4"
          />
          <UserInfo
            percentual={28}
            nome="Igor Franco"
            image="https://avatars.githubusercontent.com/u/83724295?s=400&u=51b55648c42211d8140eb6ab0f04f11787fff872&v=4"
          />
          <UserInfo
            percentual={28}
            nome="Igor Franco"
            image="https://avatars.githubusercontent.com/u/83724295?s=400&u=51b55648c42211d8140eb6ab0f04f11787fff872&v=4"
          />
          <UserInfo
            percentual={28}
            nome="Igor Franco"
            image="https://avatars.githubusercontent.com/u/83724295?s=400&u=51b55648c42211d8140eb6ab0f04f11787fff872&v=4"
          />
        </Column>
      </Container>
    </>
  );
};

export default Feed;
