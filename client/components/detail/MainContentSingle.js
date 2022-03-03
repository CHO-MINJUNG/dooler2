import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Container, Divider, Typography} from '@mui/material';

// import OfficeImageContainer from './OfficeImageContainer';
// import OfficeInfoContainer from './OfficeInfoContainer';
// import OfficeButtonContainer from './OfficeButtonContainer';


// import './style.css';
// import { Title } from './Title';

export const API_BASE_URL = process.env.REACT_APP_API_ROOT;

const MainContentSingle = ({query}) => {
	return <div>
		hi
	</div>;
	// const [data, setData] = useState([]);
	// const [loading, setLoading] = useState(true);
	// const [userIsCorrect, setUserIsCorrect] = useState(false);
	// const param = useParams();
	//
	// const callApi = async () => {
	// 	const id = query.id;
	//
	// 	try {
	// 		const response = await axios.get(`${API_BASE_URL}/api/${id}`);
	// 		setData(response.data);
	// 		setLoading(false);
	// 		setUserIsCorrect(response.data.userIsCorrect);
	// 	} catch(err) {
	// 		console.log("Error >>", err);
	// 	}
	// }
	//
  // useEffect(() => {
  //   callApi();
  // }, loading);
	//
	// if (loading) {
	// 	//TODO: loading UI 디자인
	// 	return (<div>로딩중</div>);
	// } else {
  //   const title = data.office_title;
	// 	return (
	// 		<>
	// 		<Container fixed maxWidth="md">
	// 			<Header></Header>
	// 			<Divider></Divider>
	// 			<Title title={title}></Title>
	// 			{ userIsCorrect && <OfficeButtonContainer office_id={param.id} ></OfficeButtonContainer>}
	// 			<OfficeImageContainer imageList={data.image_link}></OfficeImageContainer>
	// 			<OfficeInfoContainer office={data}></OfficeInfoContainer>
	// 		</Container>
	// 		</>
	// 	);
	// }
};

export default MainContentSingle;