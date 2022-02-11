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

import sendContentToAxios from './sendContentToAxios';

const ThumnbnailEditor = () => {
  const img = useSelector((state) => state.imageList[0]);
  const imgSrc = URL.createObjectURL(img);
  const title = useSelector((state) => state.title);

  const dispatch = useDispatch();

  const content = useSelector((state) => state);

  return (
    <div>
      <DialogContent>
        <DialogTitle>썸네일 만들기</DialogTitle>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column',}}
      >
        <CardMedia
          component="img"
          height={192}
          image={imgSrc}
          alt="사무실 사진"
        />
        <Typography variant='caption'>*사진의 좌우 보이는 영역은 다를 수 있습니다. (높이 위주로 확인해주세요)</Typography>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography fontWeight={500} noWrap={true}>
            {title}
          </Typography>
            <Grid container spacing={2}>
              <Grid item xs={8}>
              <TextField
                placeholder={"\'[지역] [역 이름]\' (예, 서울 성수역)"}
                fullWidth
                value={content.location}
                margin="dense"
                size="small"
                onChange={function(e) {
                  dispatch({
                    type: 'LOCATION_CHANGE',
                    text: e.target.value,
                  });
                }}
              />
              </Grid>
              <Grid item xs={4}>
              <TextField
                placeholder={"보증금/월세"}
                fullWidth
                value={content.fee}
                margin="dense"
                size="small"
                onChange={function(e) {
                  dispatch({
                    type: 'FEE_CHANGE',
                    text: e.target.value,
                  });
                }}
              />
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
            if (isLocation && isFee) {
              sendContentToAxios(content);
            } else {
              alert('정보를 모두 입력해주세요');
            }
          }}
        >
          완료하기
        </Button>
      </DialogActions>
    </div>
  );

}

  export default ThumnbnailEditor;