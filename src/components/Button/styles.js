import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid gray;
 background-image: linear-gradient( 1deg, rgba(0 0 0) 0.2%, gray 100% );
    color: #FFFFFF;
    border-radius: 30px;
    font-size: 24px;
    font-weight: 700;
    width: 70%;
    margin: 5px;
    opacity: 0.8;
    
    &:hover {
        opacity: 1;
        cursor: pointer;
    }
    &:active {
        opacity: 0.5;
    }
`