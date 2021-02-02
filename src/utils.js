import {FRACTION_DIGITS, MAX_HISTORY_SIZE} from './const';

export const getCurrency = (rates, s, t, currency) => {
    return Number((1 / rates[s] * rates[t] * currency).toFixed(FRACTION_DIGITS));
};

export const putToHistory = (history, log) => {
    if (history.length >= MAX_HISTORY_SIZE) {
        return [...history.slice(1), log];
    } else {
        return [...history, log];
    }
};
