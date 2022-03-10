import {Grid, TextField, Divider, Stack} from "@mui/material";
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from "react-redux";
import Dialog from '@mui/material/Dialog';
import ThumnbnailEditor from "../ThumbnailEditor";

import MainAddressPopup from "../addressPopup/MainAddressPopup"
import DepositFee from "./DepositFee";
import PhoneNumber from "./PhoneNumber";

const OfficeInfoCard = () => {  
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <CardContent>
      <Typography sx={{ fontSize: 18, fontWeight: 'bold' }} color="black" gutterBottom>
        호스트 메시지
      </Typography>
      <TextField
        name='main-text'
        // value={areaContent}
        variant={"filled"}
        multiline={true}
        minRows={10}
        placeholder={"사무실 소개 글을 적어주세요"}
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

  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <CardContent>
        <DepositFee/>
        <MainAddressPopup />
        <PhoneNumber/>
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
			<Grid container spacing={4}>
					<Grid item xs={8}>
							<Card variant="outlined"><OfficeInfoCard ></OfficeInfoCard></Card>
					</Grid>
					<Grid item xs={4} border={true}>
							<Card variant="outlined" sx={{marginBottom: '15px',}}><BillLikeCard></BillLikeCard></Card>
              <Button
                variant="contained"
                onClick={function (e) {
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
                }}
                fullWidth
                sx={{
                  height: '45px',
                }}
              >다음 단계로 이동</Button>
					</Grid>
			</Grid>


      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
        <ThumnbnailEditor></ThumnbnailEditor>
      </Dialog>
		</div>
	);
};

export default OfficeInfoEditor;