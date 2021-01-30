import React from 'react';
import {Button} from '../button/button';
import {useDispatch, useSelector} from 'react-redux';
import {clearHistory} from '../../store/actions/actions';
import {Arrow} from '../arrow/arrow';
import './history.scss';

const History = () => {
    const dispatch = useDispatch();
    const history = useSelector(state => state.history);

    const onClickClearButton = () => {
        dispatch(clearHistory());
    };

    return (
        <section className='history'>
            <h3>История конвертация</h3>
            <ul className='history__list'>
                {history.map((log, i) =>
                    <li key={log + i} className='history__item'>
                        <span className='history__log'>{log.data}</span>
                        <span>{log.source}</span>
                        <Arrow/>
                        <span>{log.target}</span>
                    </li>
                )}
            </ul>
            <Button onClick={() => onClickClearButton()} nameButton={'Очистить историю'}/>
        </section>
    );
};

export {History};
