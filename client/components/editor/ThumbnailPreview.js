import React, { Component } from 'react';


import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { Button, TextField } from '@mui/material';

import { Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useRouter } from 'next/router';

import sendContentToAxios from './sendContentToAxios';
import {getDateReadable} from "../list/getDateReadable";
import VisibilityIcon from "@mui/icons-material/Visibility";

const ThumbnailPreview = () => {
  const imgSrc = '';
  const img = useSelector(state => state.imageList[0]);
  if (typeof(img)==="object"){
    imgSrc = URL.createObjectURL(img);
  }else {
    imgSrc = img
  }
  const content = useSelector((state) => state);

  const title = useSelector((state) => state.title);
  const deposit = content.deposit;
  const fee = content.fee;
  const roadname = content.address.road;

  const dispatch = useDispatch();


  const color1 = '';
  const color2 = '#cccccc';
  const color3 = '#7b7b7b';

  const router = useRouter();

  return (
    <div>
      <DialogContent>
        <DialogTitle>썸네일 미리보기</DialogTitle>
      <Card
        sx={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column'}}
      >
        <CardMedia
          component="img"
          height={192}
          image={imgSrc}
          alt="사무실 사진"
        />
        <NewSign/>
        <CardContent sx={{ flexGrow: 1}}>
        <Typography fontSize={20} fontWeight={700}>
            월 {deposit}/{fee}
          </Typography>
          <Typography sx={{fontSize: 14}} fontWeight={350}>
            {roadname ? roadname: '위치 오류'}
          </Typography>
          <Typography noWrap={true} sx={{color: color2, fontSize: 14, marginTop: '5px'}} fontWeight={350}>
            {title}
          </Typography>
          <Grid container sx={{marginTop: '5px'}} justifyContent={'space-between'} spacing={1} >
            <Grid item>
              <Typography sx={{fontSize: 13, color: color3}} fontWeight={350} color="text.secondary">
                {getDateReadable(Date.now())}
              </Typography>
            </Grid>
            <Grid item sx={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',}}
            >
              {/* <Chip icon={<VisibilityIcon sx={{fontSize: 13,}}/>} label={'h'}></Chip> */}
              <VisibilityIcon sx={{ fontSize: 13, color: color3}}  />
              <Typography
                variant="span"
                sx={{
                  color: color3,
                  fontSize: 13,
                  display: 'inline-block',
                  marginLeft: '2px'
                }}
                fontWeight={200}
                color="text.secondary"
              >
                0
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          onClick={() => {
            const isLocation = (content.location != null) && (content.location != '');
            const isFee = (content.fee != null) && (content.fee != '');

              const success = sendContentToAxios(content)
              if (success) {
                alert('게시물 작성이 완료되었습니다')
                router.push('/')
              }
        
          }}
        >
          완료하기
        </Button>
      </DialogActions>
    </div>
  );

}

const NewSign = () => {
  return (
    <img
      src="/new_sign.png"
      style={{
        position:'absolute',
        width: '60px',
        top: '5px',
        left: '5px',
      }}
    />
  );
}

const isOnlyNumber = (text) => {
  const isNumber = false;

  const re = /^[0-9\b]+$/;

  // if value is not blank, then test the regex

  if (text === '' || re.test(text)) {
    isNumber = true;
  }

  return isNumber;
}

export default ThumbnailPreview;