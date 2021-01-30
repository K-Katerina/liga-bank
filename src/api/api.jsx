import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import {BASE_URL, CurrencySymbols} from '../const';

// eslint-disable-next-line no-unused-vars
const apiClient = axios.create({
    baseURL: BASE_URL,
});

// eslint-disable-next-line no-unused-vars
const mock = (selectedDate, selectedBase) => ({
    'base': selectedBase,
    'rates':
        {
            'USD': 0.0132059601,
            'RUB': 1.0,
            'GBP': 0.0096175212,
            'CNY': 0.0849279472,
            'EUR': 0.0108816415
        },
    'date': selectedDate
});

// export const getResultForBase = (selectedDate, base = 'RUB') => apiClient.get(`${selectedDate}?base=${base}&symbols=${Object.keys(CurrencySymbols).toString()}`).then(({data}) => data);
export const getResultForBase = (selectedDate) => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(mock(selectedDate)), 1000);
    });
};

