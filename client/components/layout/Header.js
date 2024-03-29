import {React, useState} from 'react';
import { Toolbar } from '@mui/material';
import Link from "next/link";
import {authButtons} from './HeaderAuth';
import axios from 'axios';
axios.defaults.withCredentials=true;
export const API_BASE_URL = process.env.NEXT_PUBLIC_REACT_APP_API_ROOT;

const Header = ({isAuthNeeded = true}) => {
	const [isLogin, setIsLogin] = useState(false);
  
	axios({
		method:'get',
		url: `${API_BASE_URL}/api/auth/session`})  
		.then(response => {
			setIsLogin(response.data.isLoggedIn)});
			
	return (
		<Toolbar sx={{ justifyContent: "space-between" }}>
			<Link href="/">
			<a>
				<img height='30' src="/logo.png" alt="logo"/>
			</a>
			</Link>
			{authButtons(isAuthNeeded, isLogin)}
		</Toolbar>
		);
	};


export default Header;