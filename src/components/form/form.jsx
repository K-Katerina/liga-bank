import React, {useEffect} from 'react';
import {Button} from '../button/button';
import {Input} from '../input/input';
import {Arrow} from '../arrow/arrow';
import {Select} from '../select/select';
import {RateDatePicker} from '../rate-date-picker/rate-date-picker';
import {fetchData} from '../../store/api-actions';
import {
    updateDate,
    updateHistory,
    updateSourceSymbol,
    updateSourceInput,
    updateTargetSymbol,
    updateTargetInput
} from '../../store/actions/actions';
import {useDispatch, useSelector} from 'react-redux';
import {CurrencySymbols, DATE_FORMAT} from '../../const';
import PropTypes from 'prop-types';
import moment from 'moment';

const Form = ({className}) => {
    const dispatch = useDispatch();
    const sourceCurrency = useSelector(state => state.sourceCurrency);
    const targetCurrency = useSelector(state => state.targetCurrency);
    const selectedDate = useSelector(state => state.selectedDate);
    const sourceSymbol = useSelector(state => state.sourceSymbol);
    const targetSymbol = useSelector(state => state.targetSymbol);

    useEffect(() => {
        if (selectedDate) {
            dispatch(fetchData(selectedDate));
        }
    }, [selectedDate]);

    const onChangeSourceInput = (evt) => {
        dispatch(updateSourceInput(Number(evt.target.value)));
    };

    const onChangeTargetInput = (evt) => {
        dispatch(updateTargetInput(Number(evt.target.value)));
    };

    const onChangeSourceSymbol = (evt) => {
        dispatch(updateSourceSymbol(evt.target.value));
    };

    const onChangeTargetSymbol = (evt) => {
        dispatch(updateTargetSymbol(evt.target.value));
    };

    const onChangeDate = (value) => {
        dispatch(updateDate(value));
    };

    const onClickSaveButton = () => {
        dispatch(updateHistory({
            date: moment(selectedDate).format(DATE_FORMAT),
            source: `${sourceCurrency} ${sourceSymbol}`,
            target: `${targetCurrency} ${targetSymbol}`
        }));
    };

    return (
        <form className={`${className} form`}>
            <div className="form__left">
                <Input className={`${sourceCurrency >= 0 || 'input--error'} form__source-input`}
                       onChange={(evt) => onChangeSourceInput(evt)}
                       value={sourceCurrency}
                       label={'У меня есть'}/>
                <Select className="form__source-select"
                        onChange={(evt) => onChangeSourceSymbol(evt)}
                        value={sourceSymbol}
                        options={Object.keys(CurrencySymbols)}/>
            </div>
            <div className="form__center">
                <Arrow isRotate={true}/>
                <Arrow/>
            </div>
            <div className="form__right">
                <Input className={`${sourceCurrency >= 0 || 'input--error'} form__target-input`}
                       onChange={(evt) => onChangeTargetInput(evt)}
                       value={targetCurrency}
                       label={'Хочу приобрести'}/>
                <Select className="form__target-select"
                        onChange={(evt) => onChangeTargetSymbol(evt)}
                        value={targetSymbol}
                        options={Object.keys(CurrencySymbols)}/>
            </div>
            <RateDatePicker className={`${selectedDate || 'rate-date-picker--error'} form__date`}
                            onChange={(value) => onChangeDate(value)}
                            value={selectedDate}/>
            <Button className="form__button-save"
                    onClick={() => onClickSaveButton()}
                    nameButton={'Сохранить результат'}
                    disabled={!(selectedDate && (sourceCurrency >= 0) && (targetCurrency >= 0))}/>
        </form>
    );
};

Form.propTypes = {
    className: PropTypes.string
};

export {Form};
