import {Actions} from '../../const';

export const updateSourceInput = (payload) => ({
    type: Actions.UPDATE_SOURCE_INPUT,
    payload: payload
});

export const updateTargetInput = (payload) => ({
    type: Actions.UPDATE_TARGET_INPUT,
    payload: payload
});

export const updateSourceSymbol = (payload) => ({
    type: Actions.UPDATE_SOURCE_SYMBOL,
    payload: payload
});

export const updateTargetSymbol = (payload) => ({
    type: Actions.UPDATE_TARGET_SYMBOL,
    payload: payload
});

export const updateDate = (payload) => ({
    type: Actions.UPDATE_SELECTED_DATE,
    payload: payload
});

export const getData = (payload) => ({
    type: Actions.GET_DATA,
    payload: payload
});

export const recalculateTarget = () => ({
    type: Actions.RECALCULATE_TARGET,
});

export const updateHistory = (payload) => ({
    type: Actions.UPDATE_HISTORY,
    payload: payload
});

export const clearHistory = () => ({
    type: Actions.CLEAR_HISTORY
});
