import {
  INCREMENT,
  DECREMENT,
  ADD,
  SUBTRACT
} from '../actions';

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (INCREMENT):
      return {
        ...state,
        counter: state.counter + 1
      };
    case (DECREMENT):
      return {
        ...state,
        counter: state.counter - 1
      };
    case (ADD):
      return {
        ...state,
        counter: state.counter + action.payload.value
      };
    case (SUBTRACT):
      return {
        ...state,
        counter: state.counter - action.payload.value
      };
  }

  return state;
};

export default reducer;