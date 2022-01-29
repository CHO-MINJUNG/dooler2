import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Container} from '@mui/material';

import Header from '../../components/Header';

import office from '../../assets/office1.jpeg';
import OfficeImageContainer from './OfficeImageContainer';
import OfficeInfoContainer from './OfficeInfoContainer';

import './style.css';

const ContentSingle = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const param = useParams();

	const callApi = async () => {
		const id = param.id;
		
		try {
			const response = await axios.get(`/api/${id}`);
			console.log(`ContentSingle.js response data : ${response.data}`);
			console.log(response.data);
			setData(response.data);
			setLoading(false);
		} catch(err) {
			console.log("Error >>", err);
		}
	}

  useEffect(() => {
    callApi();
  }, loading);


	console.log(`ContentSingle.js: ${data}`);
	console.log(`ContentSingle.js: laoding is ${loading}`);

	if (loading) {
		//TODO: loading UI 디자인
		return (<div></div>);
	} else {
		return (
			<Container fixed maxWidth="sm">
				<Header></Header>
				<h1>하나의 게시물입니다.</h1>
				<OfficeImageContainer imageList={office}></OfficeImageContainer>
				<OfficeInfoContainer office={data}></OfficeInfoContainer>
			</Container>
		);
	}
};

export default ContentSingle;