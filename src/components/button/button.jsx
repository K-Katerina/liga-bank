import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({nameButton = 'Кнопка', onClick}) => {

  return (
    <button onClick={() => onClick()}
      className="button" type="button">
      {nameButton}
    </button>
  );
};

Button.propTypes = {
  nameButton: PropTypes.string,
  onClick: PropTypes.func
};

export {Button};
