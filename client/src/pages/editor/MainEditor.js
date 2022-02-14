import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Container, Divider, Typography} from '@mui/material';

import Header from '../../components/Header';

import FormContainer from './FormContainer';


export const API_BASE_URL = process.env.REACT_APP_API_ROOT;

const MainEditor = () => {
	return (
		<Container fixed maxWidth="md">
			<Header></Header>
			<Divider></Divider>
			<FormContainer></FormContainer>
		</Container>
	);
}

export default MainEditor;