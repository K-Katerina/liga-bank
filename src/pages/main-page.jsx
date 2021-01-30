import React from 'react';
import {Header} from '../components/header/header';
import {Converter} from '../components/converter/converter';
import {Footer} from '../components/footer/footer';

const MainPage = () => {
    return (
        <React.Fragment>
            <Header/>
            <Converter/>
            <Footer/>
        </React.Fragment>
    );
};

export {MainPage};
