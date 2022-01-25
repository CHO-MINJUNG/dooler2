import React from 'react';
import ContentListMain from './content_list/ContentListMain';
import Header from '../components/Header';
import {Container} from '@mui/material';
import MainIntroBoard from './content_list/MainIntroBoard';

const ContentSingle = () => {
    return (
        <Container fixed>
            <Header></Header>
            하나의 게시물입니다.
        </Container>
    );
};

export default ContentSingle;