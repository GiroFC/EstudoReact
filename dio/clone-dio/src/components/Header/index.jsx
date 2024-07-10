import React from "react";
import { Button } from "../Button";
import logo from "../../assets/logo-dio.png";

import {
  Container,
  Row,
  Wrapper,
  BuscarInputContainer,
  Menu,
  MenuRight,
  Input,
  UserPicture,
} from "./styles";

const Header = ({ autenticado }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <img src={logo} alt="Logo da Dio" />
          {autenticado ? (
            <>
              <BuscarInputContainer>
                <Input placeholder="Buscar..." />
              </BuscarInputContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/83724295?s=400&u=51b55648c42211d8140eb6ab0f04f11787fff872&v=4"></UserPicture>
          ) : (
            <>
              <MenuRight href="#">Home</MenuRight>
              <Button title="Entrar" />
              <Button title="Cadastrar" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
