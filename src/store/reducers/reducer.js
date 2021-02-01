import moment from 'moment';
import {Actions, CurrencySymbols, INITIAL_SOURCE_CURRENCY} from '../../const';
import {getCurrency, putToHistory} from '../../utils';

const initialState = {
    selectedDate: moment().toDate(),
    sourceCurrency: INITIAL_SOURCE_CURRENCY,
    targetCurrency: 0,
    sourceBase: Object.keys(CurrencySymbols)[0],
    targetBase: Object.keys(CurrencySymbols)[1],
    data: {},
    history: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Actions.UPDATE_SOURCE_INPUT:
            return {
                ...state,
                sourceCurrency: action.payload,
                targetCurrency: getCurrency(state.data.rates, state.sourceBase, state.targetBase, action.payload)
            };
        case Actions.UPDATE_TARGET_INPUT:
            return {
                ...state,
                targetCurrency: action.payload,
                sourceCurrency: getCurrency(state.data.rates, state.targetBase, state.sourceBase, action.payload)
            };
        case Actions.UPDATE_SOURCE_BASE:
            return {
                ...state,
                sourceBase: action.payload,
                targetCurrency: getCurrency(state.data.rates, action.payload, state.targetBase, state.sourceCurrency)
            };
        case Actions.UPDATE_TARGET_BASE:
            return {
                ...state,
                targetBase: action.payload,
                targetCurrency: getCurrency(state.data.rates, state.sourceBase, action.payload, state.sourceCurrency)
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
                targetCurrency: getCurrency(state.data.rates, state.sourceBase, state.targetBase, state.sourceCurrency)
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
