import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

const Input = (props) => {
    return (
        <label className={`${props.className} input`}>
            <span className="input__label">
              {props.label}
            </span>
            <input {...props} className="input__text" type="number"/>
        </label>
    );
};

Input.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string
};

export {Input};
