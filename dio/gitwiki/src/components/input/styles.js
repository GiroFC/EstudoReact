import styled from "styled-components";

export const InputContainer = styled.div`
  height: 62px;
  width: 80%;

  padding: 40px;

  button {
    border: 2px solid #fafafa;
    border-radius: 0 32px 32px 0;
    background: #99999940;
    box-shadow: none;
    outline: none;
    width: 10%;
    height: 66px;
    padding: 0 20px;
    color: white;
    font-size: 24px;
    cursor: pointer;
  }

  button: hover{
    background: #99999910;
  }

  input {
    border: 2px solid #fafafa;
    border-radius: 32px 0 0 32px;
    background: transparent;
    box-shadow: none;
    outline: none;
    width: 87%;
    height: 62px;
    padding: 0 20px;
    color: white;
    font-size: 24px;
  }
`;
