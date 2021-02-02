import moment from 'moment';
import {Actions, CurrencySymbols, INITIAL_SOURCE_CURRENCY} from '../../const';
import {getCurrency, putToHistory} from '../../utils';

const initialState = {
    selectedDate: moment().toDate(),
    sourceCurrency: INITIAL_SOURCE_CURRENCY,
    targetCurrency: 0,
    sourceSymbol: Object.keys(CurrencySymbols)[0],
    targetSymbol: Object.keys(CurrencySymbols)[1],
    data: {},
    history: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.UPDATE_SOURCE_INPUT:
            return {
                ...state,
                sourceCurrency: action.payload,
                targetCurrency: getCurrency(state.data.rates, state.sourceSymbol, state.targetSymbol, action.payload)
            };
        case Actions.UPDATE_TARGET_INPUT:
            return {
                ...state,
                targetCurrency: action.payload,
                sourceCurrency: getCurrency(state.data.rates, state.targetSymbol, state.sourceSymbol, action.payload)
            };
        case Actions.UPDATE_SOURCE_SYMBOL:
            return {
                ...state,
                sourceSymbol: action.payload,
                targetCurrency: getCurrency(state.data.rates, action.payload, state.targetSymbol, state.sourceCurrency)
            };
        case Actions.UPDATE_TARGET_SYMBOL:
            return {
                ...state,
                targetSymbol: action.payload,
                targetCurrency: getCurrency(state.data.rates, state.sourceSymbol, action.payload, state.sourceCurrency)
            };
        case Actions.UPDATE_SELECTED_DATE:
            return {
                ...state,
                selectedDate: action.payload,
            };
        case Actions.GET_DATA:
            return {
                ...state,
                data: action.payload
            };
        case Actions.RECALCULATE_TARGET:
            return {
                ...state,
                targetCurrency: getCurrency(state.data.rates, state.sourceSymbol, state.targetSymbol, state.sourceCurrency)
            };
        case Actions.UPDATE_HISTORY:
            return {
                ...state,
                history: putToHistory(state.history, action.payload)
            };
        case Actions.CLEAR_HISTORY:
            return {
                ...state,
                history: []
            };
        default:
            return state;
    }
};

export default reducer;
