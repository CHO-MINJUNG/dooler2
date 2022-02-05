import React from "react";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";

const ButtonsOfMainPage = () => {
  return (
    <Grid container justifyContent={'flex-end'}>
      <Button variant="outlined" href={"/createDream"}>
        사무실 올리기
      </Button>
    </Grid>
  );
};

export default ButtonsOfMainPage;