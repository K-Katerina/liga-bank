import React, {useEffect} from 'react';
import {Button} from '../button/button';
import {Input} from '../input/input';
import {Arrow} from '../arrow/arrow';
import {Select} from '../select/select';
import {Date} from '../date/date';
import {fetchData} from '../../store/api-actions';
import {
    updateDate, updateHistory,
    updateSourceBase,
    updateSourceInput,
    updateTargetBase,
    updateTargetInput
} from '../../store/actions/actions';
import {useDispatch, useSelector} from 'react-redux';
import {CurrencySymbols} from '../../const';
import PropTypes from 'prop-types';
import moment from 'moment';
import './form.scss';

const Form = ({className}) => {
    const dispatch = useDispatch();
    const sourceCurrency = useSelector(state => state.sourceCurrency);
    const targetCurrency = useSelector(state => state.targetCurrency);
    const selectedDate = useSelector(state => state.selectedDate);
    const sourceBase = useSelector(state => state.sourceBase);
    const targetBase = useSelector(state => state.targetBase);

    useEffect(() => {
        dispatch(fetchData(selectedDate));
    }, [selectedDate]);

    const onChangeSourceInput = (evt) => {
        dispatch(updateSourceInput(evt.target.value));
    };

    const onChangeTargetInput = (evt) => {
        dispatch(updateTargetInput(evt.target.value));
    };

    const onChangeSourceBase = (evt) => {
        dispatch(updateSourceBase(evt.target.value));
    };

    const onChangeTargetBase = (evt) => {
        dispatch(updateTargetBase(evt.target.value));
    };

    const onChangeDate = (evt) => {
        dispatch(updateDate(evt.target.value));
    };

    const onClickSaveButton = () => {
        dispatch(updateHistory({
            data: moment(selectedDate).format('DD.MM.YYYY'),
            source: `${sourceCurrency} ${sourceBase}`,
            target: `${targetCurrency} ${targetBase}`
        }));
    };

    return (
        <form className={`${className} form`}>
            <div className="form__left">
                <Input className="form__source-input" onChange={(evt) => onChangeSourceInput(evt)} value={sourceCurrency} label={'У меня есть'}/>
                <Select className="form__source-select" onChange={(evt) => onChangeSourceBase(evt)} value={sourceBase} options={Object.keys(CurrencySymbols)}/>
            </div>
            <div className="form__center">
                <Arrow isRotate={true}/>
                <Arrow/>
            </div>
            <div className="form__right">
                <Input className="form__target-input" onChange={(evt) => onChangeTargetInput(evt)} value={targetCurrency} label={'Хочу приобрести'}/>
                <Select className="form__target-select" onChange={(evt) => onChangeTargetBase(evt)} value={targetBase} options={Object.keys(CurrencySymbols)}/>
            </div>
            <Date className="form__date" onChange={(evt) => onChangeDate(evt)} value={selectedDate}/>
            <Button className="form__button-save" onClick={() => onClickSaveButton()} nameButton={'Сохранить результат'}/>
        </form>
    );
};

Form.propTypes = {
    className: PropTypes.string
};

export {Form};
