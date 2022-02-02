import React from 'react';
import { AppBar, Divider, Toolbar, Typography } from '@mui/material';
import logo from '../assets/logo.png';

import authenticationButtons from './HeaderAuth';

const Header = (isAuthNeeded = true, isLoggedIn) => {
    return (
			<Toolbar sx={{ justifyContent: "space-between" }}>
				<a href="/">
						<img height='30' src={logo} alt="logo"/>
				</a>
				{authenticationButtons(isAuthNeeded=true, isLoggedIn=false)}
				{/* <Typography variant='h1' fontSize={20} fontWeight={20}>둘러 - 개인사무실 공유는 둘러에서</Typography> */}
			</Toolbar>
    );
};


export default Header;