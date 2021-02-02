import React from 'react';
import moment from 'moment';
import {PERIOD_IN_DAYS} from '../../const';
import PropTypes from 'prop-types';
import DatePicker from 'react-date-picker';

const RateDatePicker = (props) => {
    return (
        <DatePicker {...props}
                    className={`${props.className} rate-date-picker`}
                    minDate={moment().subtract(PERIOD_IN_DAYS, 'd').toDate()}
                    maxDate={moment().toDate()}
        />
    );
};

RateDatePicker.propTypes = {
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    className: PropTypes.string
};

export {RateDatePicker};
