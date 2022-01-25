import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import logo from '../assets/logo.png';

const Header = () => {
    return (
            <Toolbar>
                <a href="/">
                    <img height='30' src={logo} alt="logo"/>
                </a>
            </Toolbar>
    );
};

export default Header;