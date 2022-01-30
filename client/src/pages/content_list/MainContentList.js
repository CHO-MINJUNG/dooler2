import React, { useEffect } from 'react';
import ContentListMain from './ContentListMain';
import Header from '../../components/Header';
import {Container, Divider} from '@mui/material';
import MainIntroBoard from './MainIntroBoard';

const MainContentList = () => {
    return (
        <Container fixed maxWidth="md">
            <Header></Header>
            <Divider></Divider>
            {/* <MainIntroBoard></MainIntroBoard> */}
            <ContentListMain></ContentListMain>
        </Container>
    );
};

export default MainContentList;