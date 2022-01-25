import React from 'react';
import Header from '../../components/Header';
import {Container} from '@mui/material';

const ContentSingle = () => {
    return (
        <Container fixed>
            <Header></Header>
            하나의 게시물입니다.
        </Container>
    );
};

export default ContentSingle;