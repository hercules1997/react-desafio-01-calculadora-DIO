import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: gray;

    display: flex;
    align-items: center;
    justify-content: center;
`


export const Content = styled.div`
    background-color: black;
    width: 50%;
    padding: 50px;
    border-radius: 50px;
    box-shadow: 0 0 15px black;
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

