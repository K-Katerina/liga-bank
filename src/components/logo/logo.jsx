import React from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as LogoImg} from './logo.svg';
import {ReactComponent as LogoImgText} from './logo-text.svg';
import './logo.scss';

const Logo = ({className}) => {
    return (
        <a href="/" className={`${className} logo`}>
            <LogoImg className="logo__img"/>
            <LogoImgText className="logo__txt"/>
        </a>
    );
};

Logo.propTypes = {
    className: PropTypes.string,
    wImg: PropTypes.string,
    wTxt: PropTypes.string
};

export {Logo};
