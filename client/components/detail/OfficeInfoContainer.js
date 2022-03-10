import React, {useState} from 'react';
import {Button, Grid} from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MediaQuery from 'react-responsive';
import { MetaInfo } from "./MetaInfo";
import MapContainer from "./MapContainer";

const OfficeInfoCard = ({title, content, address}) => {
  return (
    <React.Fragment>
      <CardContent>
      <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} color="black" gutterBottom>
        호스트 메시지
      </Typography>
        <Typography variant="body2" color="text.secondary" style={{whiteSpace: 'pre-line'}}>
          {content}
        </Typography>
        <MapContainer address_road={address} />
      </CardContent>
    </React.Fragment>
  );
}

const BillLikeCard = ({create_time, views_count, deposit, fee, address, phoneCard, setPhoneCard}) => {
  const phoneButtonClick = () => {
    setPhoneCard(!phoneCard)
    console.log(phoneCard)
  }
  
  return (
  <React.Fragment>
    <CardContent>
			<MetaInfo views_count={views_count} create_time={create_time}></MetaInfo>
      <Typography sx={{ marginTop: '20px', fontSize: 22,fontWeight: '600' }} color="black">
        월세 {deposit} / {fee}
      </Typography>
      <Typography sx={{ fontSize: 14, fontWeight: 'light'}} color="black" gutterBottom>
				{address}
      </Typography>
			<Button
				fullWidth
				style={{
					marginTop: '20px',
					backgroundColor: '#F6A730',
					color: '#ffffff',
				}}
				onClick={phoneButtonClick}
			>연락처 보기
			</Button>
			{/*TODO: 연락처 보기 누르면 뜨는 것으로 수정*/}
    </CardContent>
  </React.Fragment>
  );
}

const PhoneCard = ({phoneNumber}) => {
	return (
		<React.Fragment>
		<CardContent>
      <Typography sx={{ fontSize: 17, fontWeight: '700'}} color="black" gutterBottom>
				연락처
      </Typography>
			<Typography sx={{background:'#F9F8F5', textAlign: 'center', fontSize: 17, padding: 1}} 
        variant="body2" 
        color="text.secondary">
			{phoneNumber}
			</Typography>
			<Typography variant="caption" color="text.secondary">
        <span style={{color:'#FF8A00'}}>‘둘러에서 보고 전화드립니다.’</span> 
        라고 하시면 문의가 쉽습니다.
			</Typography>
		</CardContent>
		</React.Fragment>
	)
}

const OfficeInfoContainer = ({office}) => {
  const [phoneCard, setPhoneCard] = useState(false);

	const title = office.office_title;
	const location = office.office_location;
	const content = office.office_content;

	const deposit = office.office_deposit;
	const fee = office.office_fee;

	const userName = office.user_name;
	const phoneNumber = office.user_phone;
	const views_count = office.views_count;
	const create_time = office.create_time;

  let address = null;

	if(office.address_road === null) {
    address = `${office.sido}시 ${office.sigungu} ${office.roadname}`;
	} else{
		address = office.address_road;
  }

	return (
		<div
			style={{
				paddingTop: '50px',
				paddingBottom: '50px',
			}}
		>
			<MediaQuery maxWidth={900}>
			<Grid container spacing={2} direction={'column'}>
				<Grid item xs={4} border={true}>
					<Card variant="outlined">
						<BillLikeCard
							create_time={create_time}
							views_count={views_count}
							deposit={deposit}
							fee={fee}
							address={address}
              phoneCard={phoneCard}
              setPhoneCard={setPhoneCard}
						/>
					</Card>
          {phoneCard && 
            <Card variant="outlined" sx={{mt:2}}>
              <PhoneCard phoneNumber={phoneNumber}/>	
            </Card>}
				</Grid>
				<Grid item xs={8}>
					<Card variant="outlined"><OfficeInfoCard title={title} content={content} address={address}></OfficeInfoCard></Card>
				</Grid>
			</Grid>
			</MediaQuery>

			<MediaQuery minWidth={901}>
			<Grid container spacing={4}>
				<Grid item xs={8}>
					<Card variant="outlined"><OfficeInfoCard title={title} content={content} address={address}></OfficeInfoCard></Card>
				</Grid>
				<Grid item xs={4} border={true}>
					<Card variant="outlined">
						<BillLikeCard
							create_time={create_time}
							views_count={views_count}
							deposit={deposit}
							fee={fee}
							address={address}
              phoneCard={phoneCard}
              setPhoneCard={setPhoneCard}
						/>
					</Card>
					{phoneCard && 
            <Card variant="outlined" sx={{mt:1}}>
              <PhoneCard phoneNumber={phoneNumber}/>	
            </Card>}
				</Grid>
			</Grid>
			</MediaQuery>
		</div>
	);
};

export default OfficeInfoContainer;