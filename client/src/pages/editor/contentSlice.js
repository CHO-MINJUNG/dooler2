import { createStore } from 'redux';
import { Provider, useSelector, useDispatch, connect } from 'react-redux';
import { modalUnstyledClasses } from '@mui/material';

import office from '../../assets/office1.jpeg';

const contentReducer = (currentState, action) => {
  if (currentState === undefined) {
    return {
      title: '',
      contact: '',
      location: '',
      deposit: undefined,
      fee: undefined,
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
      newState.fee = action.number;
      break;
    case 'MAINTEXT_CHANGE':
      newState.mainText = action.text;
      break;
    case 'IMAGE_UPLOAD':
      newState.imageList[action.index] = action.image;
      break;
    case 'IMAGE_DELETE':
      newState.imageList[action.index] = null;
      break;
    case 'DEPOSIT_CHANGE':
      newState.deposit = action.number;
      break;
    default:
      console.log('error: content redux error, no type');
  }
  return newState;
}

export const contentStore = createStore(contentReducer);

export default contentReducer;