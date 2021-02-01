import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({nameButton = 'Кнопка', onClick, className}) => {

    return (
        <button onClick={() => onClick()}
                className={`button ${className}`}
                type="button">
                {nameButton}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    nameButton: PropTypes.string,
    onClick: PropTypes.func
};

export {Button};
