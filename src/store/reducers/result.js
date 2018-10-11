import {
  STORE_RESULT,
  DELETE_RESULT
} from '../actions';

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case (STORE_RESULT):
      return {
        ...state,
        results: state.results.concat({id: new Date(), value: action.payload.result})
      };
    case (DELETE_RESULT):
      const updatedArray = state.results.filter(el => el.id !== action.payload.resultEliD);
      return {
        ...state,
        results: updatedArray
      }
  }

  return state;
};

export default reducer;