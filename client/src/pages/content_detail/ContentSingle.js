import React from 'react';
import Header from '../../components/Header';
import {Container} from '@mui/material';

import office from '../../assets/office1.jpeg';
import OfficeImageContainer from './OfficeImageContainer';
import OfficeInfoContainer from './OfficeInfoContainer';

import './style.css';

const ContentSingle = () => {
    return (
        <Container fixed>
            <Header></Header>
            <h1>하나의 게시물입니다.</h1>
            <OfficeImageContainer image={office}></OfficeImageContainer>
            <OfficeInfoContainer></OfficeInfoContainer>
        </Container>
    );
};

export default ContentSingle;