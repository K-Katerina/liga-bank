import React from 'react';
import moment from 'moment';
import {PERIOD_IN_DAYS} from '../../const';
import PropTypes from 'prop-types';
import DatePicker from 'react-date-picker';
import './date.scss';

const Date = (props) => {
    return (
        <DatePicker {...props}
                    className={`${props.className} date`}
                    minDate={moment().subtract(PERIOD_IN_DAYS, 'd').toDate()}
                    maxDate={moment().toDate()}
        />
    );
};

Date.propTypes = {
    value: PropTypes.object, // Date // moment
    onChange: PropTypes.func,
    className: PropTypes.string
};

export {Date};
