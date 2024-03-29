import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Container, Divider, Typography} from '@mui/material';

import OfficeImageContainer from './OfficeImageContainer';
import OfficeInfoContainer from './OfficeInfoContainer';
import OfficeButtonContainer from './OfficeButtonContainer';


import { Title } from './Title';

export const API_BASE_URL = process.env.NEXT_PUBLIC_REACT_APP_API_ROOT;

export default function MainContentSingle({response, id}){
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userIsCorrect, setUserIsCorrect] = useState(false);

  useEffect(() => {
	  setData(response)
	  setLoading(false);
	  axios({
		method:'get',
		url: `${API_BASE_URL}/api/${id}/isUser`})  
		.then(response => {
			setIsLoggedIn(response.data.isLoggedIn)
			setUserIsCorrect(response.data.userIsCorrect)});

  }, [loading]);
//   axios.get(`${API_BASE_URL}/api/${id}`)
//   .then((response) => {
// 	  setData(response)
// 	  setLoading(false);
// 	  setUserIsCorrect(response.userIsCorrect);}
//   )

	if (loading) {
		//TODO: loading UI 디자인
		return (<div>로딩중</div>);
	} else {
    const title = data.office_title;
		const views_count = data.views_count;
		return (
			<>
			<Container fixed maxWidth="md">
				<Title title={title} views_count={views_count}></Title>
				{ userIsCorrect && <OfficeButtonContainer office_id={id} ></OfficeButtonContainer>}
				<OfficeImageContainer imageList={data.image_link}></OfficeImageContainer>
				<OfficeInfoContainer office={data}></OfficeInfoContainer>
			</Container>
			</>
		);
	}

};

