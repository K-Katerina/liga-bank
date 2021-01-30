import React from 'react';
import {ReactComponent as ArrowImg} from '../arrow/arrow.svg';
import PropTypes from 'prop-types';
import './arrow.scss';

const Arrow = ({isRotate= false}) => {
    return (
        <div className="arrow">
            <ArrowImg className={`arrow__img ${isRotate && 'rotate180'}`}/>
        </div>
    );
};

Arrow.propTypes = {
    isRotate: PropTypes.bool
};

export {Arrow};
