import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {Container, Divider} from '@mui/material';

import Header from '../../components/Header';

import office from '../../assets/office1.jpeg';
import OfficeImageContainer from './OfficeImageContainer';
import OfficeInfoContainer from './OfficeInfoContainer';

import './style.css';

const MainContentSingle = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const param = useParams();

	const callApi = async () => {
		const id = param.id;
		
		try {
			const response = await axios.get(`/api/${id}`);
			setData(response.data);
			setLoading(false);
		} catch(err) {
			console.log("Error >>", err);
		}
	}

  useEffect(() => {
    callApi();
  }, loading);


	if (loading) {
		//TODO: loading UI 디자인
		return (<div></div>);
	} else {
		return (
			<Container fixed maxWidth="md">
				<Header></Header>
				<Divider></Divider>
				<h1>하나의 게시물입니다.</h1>
				<OfficeImageContainer imageList={renderImageListOrDefault(data.image_link)}></OfficeImageContainer>
				<OfficeInfoContainer office={data}></OfficeInfoContainer>
			</Container>
		);
	}
};

const renderImageListOrDefault = function (officeImageData) {
	var imageList = Array.from(officeImageData);
	if (imageList.length >= 4) {
		return imageList;
	} else {
		imageList.push(office);
		console.log('renderImageListOrDefault before iteration', officeImageData);
		imageList = renderImageListOrDefault(imageList);
		console.log('renderImageListOrDefault RETURN', officeImageData);
		return imageList;
	}
}

export default MainContentSingle;