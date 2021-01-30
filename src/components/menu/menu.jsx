import React from 'react';

const Menu = () => {
    return (
        <div className="main-nav__site site-nav main-nav__group">
            <span className="site-nav__text">
                <a href="/" className="site-nav__link">
                    Услуги
                </a>
            </span>
            <span className="site-nav__text">
                <a href="/" className="site-nav__link">
                   Рассчитать кредит
                </a>
            </span>
            <span className="site-nav__text site-nav__text--active">
                <a href="/" className="site-nav__link">
                    Конвертер валют
                </a>
            </span>
            <span className="site-nav__text">
                <a href="/" className="site-nav__link">
                    Контакты
                </a>
            </span>
            <span className="site-nav__text">
                <a href="/" className="site-nav__link">
                    Задать вопрос
                </a>
            </span>
        </div>
    );
};

export {Menu};
