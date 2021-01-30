import React from 'react';
import {Menu} from '../menu/menu';
import {Logo} from '../logo/logo';

const MainNav = () => {
    return (
        <nav className="page-header__nav main-nav">
            <a href="/" className="main-nav__logo">
                <Logo/>
            </a>
            <Menu/>
            <div className="main-nav__user user-nav main-nav__group">
              <span className="user-nav__text">
                <a href="#" className="user-nav__link user-nav__link--login">
                  Войти в Интернет-банк
                </a>
              </span>
            </div>
        </nav>
    );
};

export {MainNav};
