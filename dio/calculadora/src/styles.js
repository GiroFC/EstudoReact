import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #0D1321;
    display: flex;
    justify-content: center;
    align-items: center;
`


export const Content = styled.div`
    background-color: #1D2D44;
    width: 20%;
    min-height: fit-content;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`