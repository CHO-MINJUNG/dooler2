import React, { useEffect } from 'react';
import ContentListMain from './ContentListMain';
import Header from '../../components/Header';
import {Container, Divider} from '@mui/material';
import ArtBoard from './ArtBoard';
import ButtonsOfMainPage from './ButtonsOfMainPage';

const MainContentList = () => {
    return (
        <Container fixed maxWidth="md">
            <Header></Header>
            <Divider></Divider>
            <br></br>
            <ArtBoard></ArtBoard>
            <br></br>
            <ButtonsOfMainPage></ButtonsOfMainPage>
            <ContentListMain></ContentListMain>
        </Container>
    );
};

export default MainContentList;