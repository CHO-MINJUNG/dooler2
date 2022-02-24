import React, { useEffect } from 'react';
import ContentListMain from './ContentListMain';
import Header from '../../components/Header';
import {Container, Divider} from '@mui/material';
import ArtBoard from './ArtBoard';
import ButtonsOfMainPage from './ButtonsOfMainPage';
import {Helmet} from "react-helmet";

const MainContentList = () => {
    return (
        <div>
            <h1 hidden>개인 사무실 공유 둘러</h1>
            <Container fixed maxWidth="md">
                <Header></Header>
                <Divider></Divider>
                <br></br>
                <ArtBoard></ArtBoard>
                <br></br>
                <ButtonsOfMainPage></ButtonsOfMainPage>
                <ContentListMain></ContentListMain>
            </Container>
        </div>
    );
};

export default MainContentList;