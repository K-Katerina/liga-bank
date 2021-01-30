export const updateSourceInput = (payload) => ({
    type: 'UPDATE_SOURCE_INPUT',
    payload: payload
});

export const updateTargetInput = (payload) => ({
    type: 'UPDATE_TARGET_INPUT',
    payload: payload
});

export const updateSourceBase = (payload) => ({
    type: 'UPDATE_SOURCE_BASE',
    payload: payload
});

export const updateTargetBase = (payload) => ({
    type: 'UPDATE_TARGET_BASE',
    payload: payload
});

export const updateDate = (payload) => ({
    type: 'UPDATE_SELECTED_DATE',
    payload: payload
});

export const getData = (payload) => ({
    type: 'GET_DATA',
    payload: payload
});

export const recalculateTarget = () => ({
    type: 'RECALCULATE_TARGET',
});

export const updateHistory = (payload) => ({
    type: 'UPDATE_HISTORY',
    payload: payload
});

export const clearHistory = () => ({
    type: 'CLEAR_HISTORY',
});