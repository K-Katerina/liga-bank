import React from 'react';
import PropTypes from 'prop-types';
import {HEIGHT_IMG_CARD, WIDTH_IMG_CARD} from '../../const';
import whiteCard from './white-card.png';
import blackCard from './black-card.png';
import './preview.scss';

const Preview = ({className}) => {
    return (
        <section className={`${className} preview`}>
            <div className="preview__wrapper wrapper">
                <div className="preview__left">
                    <h1 className="preview__title">
                        Лига Банк
                        <span className="preview__subtitle">Кредиты на любой случай</span>
                    </h1>
                    <a href="/" className="preview__button">Рассчитать кредит</a>
                </div>
                <div className="preview__right">
                    <img className="preview__img-white"
                         width={WIDTH_IMG_CARD}
                         height={HEIGHT_IMG_CARD}
                         alt="Пример черной карты клиента нашего банка"
                         src={whiteCard}/>
                    <img className="preview__img-black"
                         width={WIDTH_IMG_CARD}
                         height={HEIGHT_IMG_CARD}
                         alt="Пример белой карты клиента нашего банка"
                         src={blackCard}/>
                </div>
            </div>
        </section>
    );
};

Preview.propTypes = {
    className: PropTypes.string
};

export {Preview};
