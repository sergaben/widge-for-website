import ActionTypes from '../constants/action-types'

const initialState = {};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case ActionTypes.INCOME_INPUT_VALUE:
      return {...state, data: action.payload};
    default:
      return state;
  }
}