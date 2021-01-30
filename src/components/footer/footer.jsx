import React from 'react';
import {Menu} from '../menu/menu';
import {Logo} from '../logo/logo';

const Footer = () => {
    return (
        <footer>
            <a href="/" className="main-nav__logo logo">
                <Logo/>
            </a>
            <div className="page-footer__copyright copyright">
                <p>150015, г.&nbsp;Москва, ул.&nbsp;Московская,&nbsp;д.&nbsp;32 Генеральная&nbsp;лицензия Банка&nbsp;России&nbsp;№1050 Ⓒ&nbsp;Лига&nbsp;Банк, 2021</p>
            </div>

            <Menu/>
            <div>
                <a href="tel:0904" className="tel">*0904</a>
                <p>Бесплатно для&nbsp;абонентов МТС, Билайн, Мегафон, Теле2</p>
            </div>
            <div>
                <a href="tel:88001112233" className="tel">8 800 111 22 33</a>
                <p>Бесплатный для&nbsp;всех городов России</p>
            </div>
            <ul className="page-footer__social social">
                <li className="social__item">
                    <a className="social__link social__link--instagram" href="https://www.instagram.com/htmlacademy">
                      <span>
                        Инстаграм
                      </span>
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export {Footer};
