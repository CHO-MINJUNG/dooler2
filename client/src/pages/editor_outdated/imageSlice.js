import { createStore } from 'redux';
import { Provider, useSelector, useDispatch, connect } from 'react-redux';

function reducer(currentState, action) {
  if (currentState === undefined) {
    return {
      imageList: [null, null, null, null],
    };
  }

  const newState = { ...currentState };
  switch (action.type) {
    case 'PLUS':
      newState.imageList[0] = 5;
      break;
    case 'DELETE':
      newState.imageList[action.index] = null;
  }
  return newState;
}

function dispatch() {

}

export default reducer;