import { useRouter } from 'next/router';
import {Container, Divider, Typography} from '@mui/material';

import FormContainer from './officeInfoEditor/FormContainer';
import axios from 'axios';
import {React, useEffect} from 'react';
axios.defaults.withCredentials=true;


export const API_BASE_URL = process.env.NEXT_PUBLIC_REACT_APP_API_ROOT;

const MainEditor = () => {
	const router = useRouter();

	// axios({
	// 	method: 'get',
	// 	url: `${API_BASE_URL}/api/office_info/create`
	// })
	// .then((response) => {
	// 	if (response.data.message){
	// 		// TODO: 왜 alert가 두 번 나오지?
	// 		console.log(response.data.message);
	// 		router.push('/auth/login').then(r => {
	// 		alert(response.data.message);
	// 			console.log(r)
	// 		});
	// 	}
	// })
	axios({
		method:'get',
		url: `${API_BASE_URL}/api/auth/session`})  
		.then(response => {
			if(response.data.isLoggedIn===false){
				// alert('로그인이 필요합니다')
				router.push('/auth/login')
			}
		});

	return (
		<Container fixed maxWidth="md">
			<FormContainer state={'create'}></FormContainer>
		</Container>
	);
}

export default MainEditor;