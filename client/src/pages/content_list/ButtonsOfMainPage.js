import React from "react";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from '@mui/material/styles';

const ButtonsOfMainPage = () => {
  return (
    <Grid container justifyContent={'flex-start'}>
      <Button href={"/createDream"} 
        sx={{
          border: '1px solid black',
          color: 'black',
          '&:hover': {
            color: 'white',
            backgroundColor: '#000000',
          }
        }}
      >
        사무실 올리기
      </Button>
    </Grid>
  );
};

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(grey[500]),
  backgroundColor: grey[100],
  borderColor: '1px solid black',
  '&:hover': {
    backgroundColor: grey[700],
  },
}));

export default ButtonsOfMainPage;