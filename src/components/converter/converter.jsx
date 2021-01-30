import React from 'react';
import {Form} from '../form/form';
import {History} from '../history/history';

const Converter = () => {
    return (
        <main>
            <h2>Конвертер валют</h2>
            <Form/>
            <History/>
        </main>
    );
};

export {Converter};
