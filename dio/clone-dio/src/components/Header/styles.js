import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 80%;
    height: 47px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;


`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    alighn-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    alighn-items: center;
`

export const Wrapper = styled.div`
    background-color: #151515;
    width: 100%;
    height: 47px;
    display: flex;
    justify-conternt: center;
    align-items: center;
`

export const BuscarInputContainer = styled.div`
    background: #2d2d37;
    width: 175px;
    height: 20px;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;
`

export const Menu = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #fff;
    margin-right: 12px;
    text-decoration: none;
`

export const MenuRight = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 12px;
    line-height: 25px;
    color: #fff;
    margin-right: 12px;
    text-decoration: none;
`

export const UserPicture = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 22px;
    border: 2px solid #fff
`

export const Input = styled.input`
    background: transparent;
    flex: 1;
    border: 0;
    color: #fff
`