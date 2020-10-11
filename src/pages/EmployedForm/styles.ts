import styled from 'styled-components';
import {shade} from 'polished';

// Template literals

export const Title = styled.h1`
    font-size: 48px;
    color: #3a3a3a;
    max-width: 450px;
    line-height: 56px;
    margin-top: 80px;
`;

export const Form = styled.form`
    margin-top: 40px;
    max-width: 700px;
    display: flex;
    flex-direction: column;

    label {
        flex: 1;
        padding: 0 24px;
        margin-bottom: 10px;
        border: 0;
        border-radius: 5px;
        color: #3a3a3a;
    }

    input {
        flex: 1;
        height: 60px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px;
        color: #3a3a3a;

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        height: 60px;
        background: #04D361;
        border-radius: 5px;
        border: 0;
        color: #FFF;
        font-weight: bold;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#04D361')}
        }
    }
`;

export const Repositories = styled.div``;

export const Branding = styled.div`
    margin-top: 40px;
    max-width: 700px;
    display: flex;


    label {
        flex: 1;
        padding: 0 24px;
        margin-bottom: 10px;
        border: 0;
        border-radius: 5px;
        color: #3a3a3a;
    }

    img {
        width: 70px;
        height: 70px;
    }

`;
