import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';
import {Container, Divider, Typography} from '@mui/material';

import FormContainer from './officeInfoEditor/FormContainer';
import axios from 'axios';
axios.defaults.withCredentials=true;


export const API_BASE_URL = process.env.NEXT_PUBLIC_REACT_APP_API_ROOT;

const MainEditor = () => {
	const router = useRouter();

	axios({
		method: 'get',
		url: `${API_BASE_URL}/api/office_info/create`
	})
	.then((response) => {
		if (response.data.message){
			// TODO: 왜 alert가 두 번 나오지?
			console.log(response.data.message);
			router.push('/auth/login').then(r => {
			alert(response.data.message);
				console.log(r)
			});
		}
	})

	return (
		<Container fixed maxWidth="md">
			<FormContainer></FormContainer>
		</Container>
	);
}

export default MainEditor;