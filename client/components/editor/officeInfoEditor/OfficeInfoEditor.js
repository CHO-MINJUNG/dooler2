import {Grid, TextField, Divider, Stack} from "@mui/material";
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from "react-redux";
import Dialog from '@mui/material/Dialog';
import ThumbnailPreview from "../ThumbnailPreview";

import MainAddressPopup from "../addressPopup/MainAddressPopup"
import DepositFee from "./DepositFee";
import PhoneNumber from "./PhoneNumber";
import MediaQuery from "react-responsive";

const OfficeInfoCard = () => {  
  const dispatch = useDispatch();
	let selector = useSelector(state => state);

  return (
    <React.Fragment>
      <CardContent>
      <Typography sx={{ fontFamily:"NanumSquareBold", fontSize: 18, fontWeight: 'bold' }} color="black" gutterBottom>
        호스트 메시지
      </Typography>
      <TextField
        name='main-text'
        // value={areaContent}
        variant={"filled"}
        multiline={true}
        minRows={10}
        placeholder={"사무실 소개 글을 적어주세요"}
        value={selector.mainText}
        onChange={
          function (e) {
            dispatch({
              type: 'MAINTEXT_CHANGE',
              text: e.target.value,
            });
          }
        }
        fullWidth
        sx={{
          marginBottom: '20px',
        }}
      />
      </CardContent>
    </React.Fragment>
  );
}

const BillLikeCard = () => {
  return (
    <React.Fragment>
      <CardContent>
        <DepositFee />
        <MainAddressPopup />
        <PhoneNumber />
      </CardContent>
    </React.Fragment>
  );
}

const OfficeInfoEditor = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  const content = useSelector((state) => state);

	return (
		<div
			style={{
				paddingTop: '50px',
				paddingBottom: '50px',
			}}
		>
      <MediaQuery minWidth={901}>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <Card variant="outlined"><OfficeInfoCard ></OfficeInfoCard></Card>
          </Grid>
          <Grid item xs={4} border={true}>
            <Card variant="outlined" sx={{marginBottom: '15px',}}><BillLikeCard></BillLikeCard></Card>
            <Button
              variant="contained"
              onClick={(e) => openDialogButton(e, content, handleClickOpen)}
              fullWidth
              sx={{
                height: '45px',
                fontFamily: 'NanumSquare'
              }}
            >다음 단계로 이동</Button>
          </Grid>
        </Grid>
      </MediaQuery>
      <MediaQuery maxWidth={900}>
        <Grid container direction={"column"} spacing={4}>
          <Grid item xs={4} border={true}>
            <Card variant="outlined" sx={{marginBottom: '15px',}}><BillLikeCard></BillLikeCard></Card>
            <Button
              variant="contained"
              onClick={(e) => openDialogButton(e, content, handleClickOpen)}
              fullWidth
              sx={{
                fontFamily:"NanumSquare",
                height: '45px',
              }}
            >다음 단계로 이동</Button>
          </Grid>
          <Grid item xs={8}>
            <Card variant="outlined"><OfficeInfoCard ></OfficeInfoCard></Card>
          </Grid>
        </Grid>
      </MediaQuery>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <ThumbnailPreview></ThumbnailPreview>
      </Dialog>
		</div>
	);
};

const openDialogButton = (e, content, handleClickOpen) => {

  const isTitle = (content.title != null) && (content.title != '');
  const isFirstImage = (content.imageList[0] != null);
  const isMainText = (content.mainText != null) && (content.mainText != '');
  const isContact = (content.contact != null) && (content.contact != '');
  const isAddress = (content.address != null) && (content.address != '');

  if (isTitle && isFirstImage && isMainText && isContact && isAddress) {
    handleClickOpen();
  } else {
    alert('내용을 모두 입력해주세요');
  }

  handleClickOpen();
}

export default OfficeInfoEditor;