import {React, useState} from 'react';
import { AppBar, Divider, Toolbar, Typography } from '@mui/material';
import logo from '../assets/logo.png';

import {authenticationButtons} from './HeaderAuth';
import axios from 'axios';
axios.defaults.withCredentials=true;
export const API_BASE_URL = process.env.REACT_APP_API_ROOT;

const Header = ({isAuthNeeded = true}) => {
	const [isLogin, setIsLogin] = useState(false);
	axios({
		method:'get',
		url: `${API_BASE_URL}/api/auth/session`})  
		.then(response => {
			setIsLogin(response.data.isLoggedIn)})
	return (
		<Toolbar sx={{ justifyContent: "space-between" }}>
			<a href="/">
				<img height='30' src={logo} alt="logo"/>
			</a>
			{authenticationButtons(isAuthNeeded, isLogin)}
			{/* <Typography variant='h1' fontSize={20} fontWeight={20}>둘러 - 개인사무실 공유는 둘러에서</Typography> */}
		</Toolbar>
		);
	};


export default Header;