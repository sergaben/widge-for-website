import ActionTypes from '../constants/action-types';

export function incomeAction(data) {
  return (dispatch) => {
        dispatch({
            type: ActionTypes.INCOME_INPUT_VALUE,
            payload: data
        });
    }
}