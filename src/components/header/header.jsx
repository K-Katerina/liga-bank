import React from 'react';
import {Preview} from '../preview/preview';
import {MainNav} from '../main-nav/main-nav';

const Header = () => {
    return (
        <header className="header">
            <MainNav className="header__nav"/>
            <Preview className="header__preview"/>
        </header>
    );
};

export {Header};
