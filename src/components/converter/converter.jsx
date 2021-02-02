import React from 'react';
import {Form} from '../form/form';
import {History} from '../history/history';

const Converter = () => {
    return (
        <main className="converter wrapper">
            <h2 className="converter__title">Конвертер валют</h2>
            <Form className="converter__form"/>
            <History className="converter__history"/>
        </main>
    );
};

export {Converter};
