import { Typography, Grid } from "@mui/material";
import React from "react";

export function MetaInfo ({views_count}) {
  return (
    <Grid container justifyContent={'end'}>
      <Typography sx={{fontSize: 13, marginTop: '5px'}} fontWeight={350} color="text.secondary">
        조회수 {views_count}
      </Typography>
    </Grid>
  );
}