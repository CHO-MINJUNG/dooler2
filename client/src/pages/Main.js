import React, { useEffect } from 'react';
import ContentListMain from './content_list/ContentListMain';
import Header from '../components/Header';
import {Container} from '@mui/material';
import MainIntroBoard from './content_list/MainIntroBoard';

const Main = () => {
    return (
        <Container fixed>
            <Header></Header>
            <MainIntroBoard></MainIntroBoard>
            <ContentListMain></ContentListMain>
        </Container>
    );
};

export default Main;