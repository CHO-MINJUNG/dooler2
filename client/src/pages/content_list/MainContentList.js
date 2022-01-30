import React, { useEffect } from 'react';
import ContentListMain from './ContentListMain';
import Header from '../../components/Header';
import {Container, Divider} from '@mui/material';
import MainIntroBoard from './LongBanner';
import LongBanner from './LongBanner';

const MainContentList = () => {
    return (
        <Container fixed maxWidth="md">
            <Header></Header>
            <Divider></Divider>
            <LongBanner></LongBanner>
            <ContentListMain></ContentListMain>
        </Container>
    );
};

export default MainContentList;