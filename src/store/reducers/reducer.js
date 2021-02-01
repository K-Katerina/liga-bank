import moment from 'moment';
import {CurrencySymbols} from '../../const';
import {getCurrency} from '../../utils';

const initialState = {
    selectedDate: moment().format('YYYY-MM-DD'),
    sourceCurrency: 1000,
    targetCurrency: 0,
    sourceBase: Object.keys(CurrencySymbols)[0],
    targetBase: Object.keys(CurrencySymbols)[1],
    data: {},
    history: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_SOURCE_INPUT':
            return {
                ...state,
                sourceCurrency: action.payload,
                targetCurrency: getCurrency(state.data.rates, state.sourceBase, state.targetBase, action.payload)
            };
        case 'UPDATE_TARGET_INPUT':
            return {
                ...state,
                targetCurrency: action.payload,
                sourceCurrency: getCurrency(state.data.rates, state.targetBase, state.sourceBase, action.payload)
            };
        case 'UPDATE_SOURCE_BASE':
            return {
                ...state,
                sourceBase: action.payload,
                targetCurrency: getCurrency(state.data.rates, action.payload, state.targetBase, state.sourceCurrency)
            };
        case 'UPDATE_TARGET_BASE':
            return {
                ...state,
                targetBase: action.payload,
                targetCurrency: getCurrency(state.data.rates, state.sourceBase, action.payload, state.sourceCurrency)
            };
        case 'UPDATE_SELECTED_DATE':
            return {
                ...state,
                selectedDate: moment(action.payload).format('YYYY-MM-DD'),
            };
        case 'GET_DATA':
            return {
                ...state,
                data: action.payload
            };
        case 'RECALCULATE_TARGET':
            return {
                ...state,
                targetCurrency: getCurrency(state.data.rates, state.sourceBase, state.targetBase,  state.sourceCurrency)
            };
        case 'UPDATE_HISTORY':
            return {
                ...state,
                history: [...state.history, action.payload]
            };
        case 'CLEAR_HISTORY':
            return {
                ...state,
                history: []
            };
        default:
            return state;
    }
};

export default reducer;
