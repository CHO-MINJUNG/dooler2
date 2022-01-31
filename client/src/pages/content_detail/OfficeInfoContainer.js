import { Grid} from "@mui/material";
import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const OfficeInfoCard = ({title, content}) => {
    return (
        <React.Fragment>
            <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                사무실 소개 글
            </Typography>
            <Typography variant="h5" sx= {{ mb: 1.5 }} component="div">
                {title}
            </Typography>
            <Typography variant="body2">
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
            <Typography sx={{ fontSize: 14, fontWeight:'bold'}} color="black" gutterBottom>
                연락처
            </Typography>
            <Typography variant="body2" color="text.secondary">
                이름: {userName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                전화번호: {phoneNumber}
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
        <Grid container spacing={4}>
            <Grid item xs={8}>
                <Card variant="outlined"><OfficeInfoCard title={title} content={content}></OfficeInfoCard></Card>
            </Grid>
            <Grid item xs={4} border={true}>
                <Card variant="outlined"><ContactCard userName={userName} phoneNumber={phoneNumber}></ContactCard></Card>
            </Grid>
        </Grid>
    );
};

export default OfficeInfoContainer;