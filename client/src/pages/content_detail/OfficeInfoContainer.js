import { Grid} from "@mui/material";
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MediaQuery from 'react-responsive';

const OfficeInfoCard = ({title, content}) => {
    return (
        <React.Fragment>
					<CardContent>
					<Typography sx={{ fontSize: 18, fontWeight: 'bold' }} color="black" gutterBottom>
						호스트 메시지
					</Typography>
                    <Typography variant="body2" color="text.secondary" style={{whiteSpace: 'pre-line'}}>
                        {content}
                    </Typography>
					</CardContent>
        </React.Fragment>
    );
}

const ContactCard = ({userName, phoneNumber}) => {
    return (
    <React.Fragment>
        <CardContent sx={{backgroundColor:'#eeeeee'}}>
            <Typography sx={{ fontSize: 18, fontWeight:'bold'}} color="black" gutterBottom>
                연락처
            </Typography>
            <Typography variant="body2" color="text.secondary">
                전화번호: {phoneNumber}
            </Typography>
            <Typography variant="caption" color="text.secondary">
							전화 문의시 ‘둘러에서 보고 전화드렸어요’ 라고 하시면 문의가 쉽습니다.
            </Typography>
        </CardContent>
    </React.Fragment>
    );
}

const OfficeInfoContainer = ({office}) => {
    const title = office.office_title;
    const location = office.office_location;
    const content = office.office_content;

    const userName = office.user_name;
    const phoneNumber = office.user_phone;


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
							<Card variant="outlined"><ContactCard userName={userName} phoneNumber={phoneNumber}></ContactCard></Card>
            </Grid>
            <Grid item xs={8}>
                <Card variant="outlined"><OfficeInfoCard title={title} content={content}></OfficeInfoCard></Card>
            </Grid>
        </Grid>
				</MediaQuery>
				<MediaQuery minWidth={901}>
        <Grid container spacing={4}>
            <Grid item xs={8}>
                <Card variant="outlined"><OfficeInfoCard title={title} content={content}></OfficeInfoCard></Card>
            </Grid>
            <Grid item xs={4} border={true}>
                <Card variant="outlined"><ContactCard userName={userName} phoneNumber={phoneNumber}></ContactCard></Card>
            </Grid>
        </Grid>
				</MediaQuery>
			</div>
    );
};

export default OfficeInfoContainer;