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
			console.log(response.data);
			setData(response.data);
		} catch(err) {
			console.log("Error >>", err);
		}
	}

  useEffect(() => {
    callApi();
  }, loading);


	return (
		<Container fixed>
			<Header></Header>
			<h1>하나의 게시물입니다.</h1>
			<OfficeImageContainer image={office}></OfficeImageContainer>
			<OfficeInfoContainer></OfficeInfoContainer>
		</Container>
	);
};

export default ContentSingle;