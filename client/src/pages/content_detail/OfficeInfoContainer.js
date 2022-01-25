import { Grid} from "@mui/material";
import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const officeInfoCard = ({title, content}) => {
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
            {content}ff
        </Typography>
        </CardContent>
    </React.Fragment>
    );
}

const contactCard = ({authorName, phoneNumber}) => {
    return (
    <React.Fragment>
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            연락처
        </Typography>
        <Typography variant="body2">
            이름: {authorName}
        </Typography>
        <Typography variant="body2">
            전화번호: {phoneNumber}
        </Typography>
        </CardContent>
    </React.Fragment>
    );
}

const OfficeInfoContainer = () => {
    //TODO: parameter 전달이 안됨;;
    return (
        <Grid container spacing={4}>
            <Grid item xs={8}>
                <Card variant="outlined">{officeInfoCard("사무실 소개글", "이러쿵 저러쿵")}</Card>
            </Grid>
            <Grid item xs={4} border={true}>
                <Card variant="outlined">{contactCard("여진기", "01031037332")}</Card>
            </Grid>
        </Grid>
    );
};

export default OfficeInfoContainer;