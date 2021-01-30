import React from 'react';
import {Preview} from '../preview/preview';
import {MainNav} from '../main-nav/main-nav';

const Header = () => {
    return (
        <header className="wrapper page-header">
            <MainNav/>
            <Preview/>
        </header>
    );
};

export {Header};
