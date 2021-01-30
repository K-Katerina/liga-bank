import React from 'react';
import {ReactComponent as LogoImg} from '../logo/logo.svg';
import {ReactComponent as LogoImgText} from '../logo/logo-text.svg';
import PropTypes from 'prop-types';
import './logo.scss';

const Logo = ({wImg= '28', wTxt= '112'}) => {
    return (
        <div className="logo">
            <LogoImg className="logo__img" width={wImg}/>
            <LogoImgText className="logo__txt" width={wTxt}/>
        </div>
    );
};

Logo.propTypes = {
    wImg: PropTypes.string,
    wTxt: PropTypes.string
};

export {Logo};
