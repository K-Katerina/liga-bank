import axios from 'axios';
import {BASE_SYMBOL, BASE_URL, CurrencySymbols} from '../const';
import moment, {HTML5_FMT} from 'moment';

const apiClient = axios.create({
    baseURL: BASE_URL,
});

export const getResultForBase = (selectedDate) =>
    apiClient
        .get(`${moment(selectedDate).format(HTML5_FMT.DATE)}?base=${BASE_SYMBOL}&symbols=${Object.keys(CurrencySymbols).toString()}`)
        .then(({data}) => data);
