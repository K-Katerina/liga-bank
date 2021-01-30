import {getResultForBase} from '../api/api';
import {getData, recalculateTarget} from './actions/actions';

export const fetchData = (date) => {
  return (dispatch) => {
    getResultForBase(date)
        .then(data => dispatch(getData(data)))
        .then(() => dispatch(recalculateTarget()));
  };
};
