import { Typography, Grid } from "@mui/material";
import { nextWednesday } from "date-fns";
import React from "react";
import { getDateReadable } from "./getDateReadable";

export function MetaInfo ({views_count, create_time}) {
  return (
    <>
      <Grid container direction={"row"} justifyContent={'start'} spacing={1}>
        <Grid item >
          <Typography fontWeight={350} color="text.secondary"
            sx={
              {
                fontFamily:"NanumSquare",
                fontWeight:"700",
                border: '1px solid black',
                padding: '2px 10px',
                fontSize: 13,
                marginTop: '5px',
              }
            }
          >
            {/*TODO: 숫자는 적은 weight가 없나봐*/}
            업로드: {getDateReadable(create_time, false)}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}