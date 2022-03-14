import { useRouter } from 'next/router';
import {Container, Divider, Typography} from '@mui/material';

import FormContainer from '../officeInfoEditor/FormContainer';
import {React, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";

import axios from 'axios';
axios.defaults.withCredentials=true;


export const API_BASE_URL = process.env.NEXT_PUBLIC_REACT_APP_API_ROOT;

const MainUpdateEditor = ({response}) => {
	const router = useRouter();

	console.log(response)
	
	return (
		<Container fixed maxWidth="md">
			<FormContainer state={'update'} response={response}></FormContainer>
		</Container>
	);
}

export default MainUpdateEditor;