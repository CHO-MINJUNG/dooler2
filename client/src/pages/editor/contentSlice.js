import { createStore } from 'redux';
import { Provider, useSelector, useDispatch, connect } from 'react-redux';
import { modalUnstyledClasses } from '@mui/material';

const contentReducer = (currentState, action) => {
  if (currentState === undefined) {
    return {
      title: '',
      contact: '',
      location: '',
      fee: '',
      mainText: '',
      imageList: [null, null, null, null],
    };
  }

  const newState = { ...currentState };
  switch (action.type) {
    case 'TITLE_CHANGE':
      newState.title = action.text;
      break;
    case 'CONTACT_CHANGE':
      newState.contact = action.text;
      break;
    case 'LOCATION_CHANGE':
      newState.location = action.text;
      break;
    case 'FEE_CHANGE':
      newState.fee = action.text;
      break;
    case 'MAINTEXT_CHANGE':
      newState.mainText = action.text;
    case 'PLUS':
      newState.imageList[0] = 5;
      break;
    case 'DELETE':
      newState.imageList[action.index] = null;
    default:
      console.log('error: content redux error, no type');
  }
  return newState;
}

export const contentStore = createStore(contentReducer);

export default contentReducer;