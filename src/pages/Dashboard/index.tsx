import React from 'react';

import logo from '../../assets/logo.svg';
import {Title, Form, Repositories} from './styles'

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logo} alt="logo"/>
            <Title>Dashboard</Title>

            <Form>
                <input placeholder="digite aqui..."></input>
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories></Repositories>
        </>
    );
};

export default Dashboard
