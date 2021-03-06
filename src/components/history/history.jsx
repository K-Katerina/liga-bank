import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from '../button/button';
import {clearHistory} from '../../store/actions/actions';
import {Arrow} from '../arrow/arrow';

const History = () => {
    const dispatch = useDispatch();
    const history = useSelector(state => state.history);

    const onClickClearButton = () => {
        dispatch(clearHistory());
    };

    return (
        <section className="history">
            <h3 className="history__title">История конвертации</h3>
            {history && history.length ?
                <ul className="history__list">
                    {history.map((log, i) =>
                        <li key={log + i} className="history__item">
                            <span className="history__data">{log.date}</span>
                            <span className="history__source">{log.source}</span>
                            <Arrow/>
                            <span className="history__target">{log.target}</span>
                        </li>
                    )}
                </ul> :
                <p className="history__help">
                    Для того, чтобы добавить историю конвертации, нажмите кнопку
                    выше &ndash; &quot;Сохранить результат&quot;
                </p>
            }
            <Button className="history__button button--small"
                    onClick={() => onClickClearButton()}
                    nameButton={'Очистить историю'}
                    disabled={!(history && history.length)}/>
        </section>
    );
};

export {History};
