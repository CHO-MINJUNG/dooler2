import React from 'react';
import Header from '../../components/Header';
import {Container, Divider} from '@mui/material';
import EditorSection from './EditorSection';
import ImageUploaderSection from './ImageUploaderSection';
import MidHeader from '../../components/MidHeader';
import EditorForm from './EditorForm';

const MainEditor = ({}) => {

	return (
    <Container fixed maxWidth="md">
        <Header></Header>
        <Divider></Divider>
        <br></br>
        {/* <MidHeader title={"글쓰기"}></MidHeader> */}
        <EditorForm></EditorForm>
    </Container> 
  );
}

export default MainEditor;