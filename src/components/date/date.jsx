import React from 'react';
import './date.scss';
import moment from 'moment';
import {PERIOD_IN_DAYS} from '../../const';
import PropTypes from 'prop-types';

const Date = (props) => {
    return (
        <input {...props} className={`${props.className} date`} type="date" min={ moment().subtract(PERIOD_IN_DAYS,'d').format('YYYY-MM-DD')} max={ moment().format('YYYY-MM-DD')}/>
    );
};

Date.propTypes = {
    className: PropTypes.string
};

export {Date};
