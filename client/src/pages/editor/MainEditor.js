import React from 'react';
import Header from '../../components/Header';
import {Container, Divider} from '@mui/material';
import EditorSection from './EditorSection';

const MainEditor = ({}) => {

	return (
    <Container fixed maxWidth="md">
        <Header></Header>
        <Divider></Divider>
        <br></br>
        <EditorSection></EditorSection>
    </Container> 
  );
}

export default MainEditor;