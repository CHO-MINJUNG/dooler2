import React from 'react';
import EditorSection from './EditorSection';
import ImageUploaderSection from './ImageUploaderSection';
import { Button, Grid, Toolbar } from '@mui/material';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch, connect } from 'react-redux';
import reducer from './imageSlice';
import { Fab } from '@mui/material';

const store = createStore(reducer);

const EditorForm = ({}) => {

	return (
    <div>
      <Provider store={store}>
        <EditorSection></EditorSection>
        {/* <ImageUploaderSection></ImageUploaderSection> */}
      </Provider>
      <Toolbar sx={{paddingRight: '0px', justifyContent: 'end'}}>
        <Button
          variant='outlined'
          sx={{
            width: '60%',
            position: {
              right: '0px',
            }
          }}
          onClick={function(e) {
            console.log('button');
          }}
        >
          완료
        </Button>
      </Toolbar>
      <Fab variant="extended" size="small" color="primary" aria-label="add" sx={{
    margin: '0',
    top: 'auto',
    right: '20',
    bottom: '20',
    left: 'auto',
    position: 'fixed',}}>\
  Extended
</Fab>
    </div>
  );
}

export default EditorForm;