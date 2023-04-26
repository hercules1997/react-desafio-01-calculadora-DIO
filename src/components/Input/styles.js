import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;


    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto';
    

    input {
        width: 100%;
        height: 75px;
        background-color: gray;
        border: 0;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        padding: 0 20px;
        margin-bottom: 20px;

        text-align: end;
        font-size: 40px;
        font-family: 'Roboto';
        color: #FFFFFF;
    }
`