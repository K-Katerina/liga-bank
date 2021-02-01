import React from 'react';
import PropTypes from 'prop-types';
import './menu.scss';

const Menu = ({className}) => {
    return (
        <div className={`${className} menu`}>
            <span className="menu__item">
                <a href="/" className="menu__link">
                    Услуги
                </a>
            </span>
            <span className="menu__item">
                <a href="/" className="menu__link">
                   Рассчитать кредит
                </a>
            </span>
            <span className="menu__item">
                <a href="/" className="menu__link menu__link--active">
                    Конвертер валют
                </a>
            </span>
            <span className="menu__item">
                <a href="/" className="menu__link">
                    Контакты
                </a>
            </span>
            <span className="menu__item">
                <a href="/" className="menu__link">
                    Задать вопрос
                </a>
            </span>
        </div>
    );
};

Menu.propTypes = {
    className: PropTypes.string
};

export {Menu};
