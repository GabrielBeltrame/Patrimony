import React from 'react';

import logo from '../../assets/icone.png';
import {Title, Form, Branding} from './styles';

const EmployedFrom: React.FC = () => {
    return (
    <>
        <Branding>
            <img src={logo} alt="logo" />
            <label>Patrimony</label>
        </Branding>

        <Title>Cadastro</Title>

        <Form>
            <label>Nome da empresa</label>
            <input placeholder="Ex: Patrimony"/>
        </Form>
    </>
    );
};

export default EmployedFrom
