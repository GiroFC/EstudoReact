import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    font-family: "Roboto", sans-serif;
    padding: 10px 20px;
 
    h3{
        font-size: 32px;
        color: #fafafa;
        margin-block: 20px;
    }

    p{
        font-size: 18px;
        color: color: #fafafa;
        opacity: 60%;
        margin: 5px 0;
    }

    .options{
        display:flex;
        width: 100%!important;
        justify-content: flex-end;
        gap: 20px;
    }

    .vizualizar{
        color: #669bbc;
        cursor: pointer;
        text-decoration: none;
    }

    .remover{
        color: #c1121f;
        cursor: pointer;
        text-decoration: none;
    }

    hr{
        margin: 20px 0;
    }
`