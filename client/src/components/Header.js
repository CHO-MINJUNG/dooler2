import React from 'react';
import { AppBar, Divider, Toolbar, Typography } from '@mui/material';
import logo from '../assets/logo.png';

const Header = () => {
    return (
            <Toolbar sx={{ justifyContent: "center" }}>
                <a href="/">
                    <img height='30' src={logo} alt="logo"/>
                </a>
                
                {/* <Typography variant='h1' fontSize={20} fontWeight={20}>둘러 - 개인사무실 공유는 둘러에서</Typography> */}
            </Toolbar>
    );
};

export default Header;