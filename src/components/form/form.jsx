import React, {useEffect} from 'react';
import {Button} from '../button/button';
import {Input} from '../input/input';
import {Arrow} from '../arrow/arrow';
import {Select} from '../select/select';
import {Date} from '../date/date';
import {useDispatch, useSelector} from 'react-redux';
import {
    updateDate, updateHistory,
    updateSourceBase,
    updateSourceInput,
    updateTargetBase,
    updateTargetInput
} from '../../store/actions/actions';
import {fetchData} from '../../store/api-actions';
import {CurrencySymbols} from '../../const';

const Form = () => {
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
            data: selectedDate,
            source: `${sourceCurrency} ${sourceBase}`,
            target: `${targetCurrency} ${targetBase}`
        }));
    };

    return (
        <form>
            <Input onChange={(evt) => onChangeSourceInput(evt)} value={sourceCurrency} label={'У меня есть'}/>
            <Select onChange={(evt) => onChangeSourceBase(evt)} value={sourceBase} options={Object.keys(CurrencySymbols)}/>
            <div>
                <Arrow isRotate={true}/>
                <Arrow/>
            </div>
            <Input onChange={(evt) => onChangeTargetInput(evt)} value={targetCurrency} label={'Хочу приобрести'}/>
            <Select onChange={(evt) => onChangeTargetBase(evt)} value={targetBase} options={Object.keys(CurrencySymbols)}/>
            <Date onChange={(evt) => onChangeDate(evt)} value={selectedDate}/>
            <Button onClick={() => onClickSaveButton()} nameButton={'Сохранить результат'}/>
        </form>
    );
};

export {Form};
