// eslint-disable-next-line no-unused-vars
import {FRACTION_DIGITS} from './const';

// export const getCurrency = (rate, currency) => {
//     return (rate * currency).toFixed(FRACTION_DIGITS);
// };

export const getCurrency = (rates, s, t, currency) => {
    return (1/rates[s] * rates[t] * currency).toFixed(FRACTION_DIGITS);
};
