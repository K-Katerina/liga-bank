import React from 'react';
import PropTypes from 'prop-types';
import './select.scss';

const Select = ({options, onChange, value}) => {
  return (
    <select value={value} onChange={(evt) => onChange(evt)} className="select">
       {options.map((option) =>
            <option key={option} value={option}>{option}</option>
        )}
    </select>
  );
};

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  value: PropTypes.string
};

export {Select};
