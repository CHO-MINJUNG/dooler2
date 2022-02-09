import { Grid, TextField} from "@mui/material";
import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from "react-redux";
import sendContentToAxios from './sendContentToAxios';

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
      ></TextField>
      </CardContent>
    </React.Fragment>
  );
}

const ContactCard = () => {

  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <CardContent sx={{backgroundColor:'#eeeeee'}}>
        <Typography sx={{ fontSize: 18, fontWeight:'bold'}} color="black" gutterBottom>
          연락처
        </Typography>
        <TextField
          size="small"
          placeholder="010-0000-0000"
          onChange={
            function (e) {
              dispatch({ 
                type: 'CONTACT_CHANGE',
                text: e.target.value,
              });
            }
          }
          />
        <br></br>
        <Typography variant="caption" color="text.secondary">
          전화 문의시 ‘둘러에서 보고 전화드렸어요’ 라고 하시면 문의가 쉽습니다.
        </Typography>
      </CardContent>
    </React.Fragment>
  );
}

const OfficeInfoEditor = () => {
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
							<Card variant="outlined" sx={{marginBottom: '15px',}}><ContactCard></ContactCard></Card>
              <Button
                variant="contained"
                onClick={function (e) {
                  sendContentToAxios(content);
                }}
                fullWidth
                sx={{
                  height: '45px',
                }}
              >사무실 등록하기</Button>
					</Grid>
			</Grid>
		</div>
	);
};

export default OfficeInfoEditor;