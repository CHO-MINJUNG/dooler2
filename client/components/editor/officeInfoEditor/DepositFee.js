import {Grid, Stack, TextField, Typography} from "@mui/material";
import React from "react";
import {useSelector, useDispatch} from "react-redux";

const DepositFee = () => {
  const content = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <>

      <Typography sx={{fontFamily:"NanumSquareBold", fontSize: 15}} color="black" gutterBottom>
        보증금/월세 입력
      </Typography>
      <Grid container direction={'row'}>
        <Grid item xs={5}>
          <TextField
            placeholder={"보증금"}
            fullWidth
            hiddenLabel
            variant={"filled"}
            value={content.deposit}
            margin="dense"
            size="small"
            sx={{padding: '0px'}}
            type={"number"}
            // inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            onChange={function(e) {
              dispatch({
                type: 'DEPOSIT_CHANGE',
                number: e.target.value,
              });
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <p style={{textAlign: "center"}}>/</p>
        </Grid>
        <Grid item xs={5}>
          <TextField
            placeholder={"월세"}
            fullWidth
            value={content.fee}
            hiddenLabel
            variant={"filled"}
            margin="dense"
            size="small"
            type={"number"}
            onChange={function(e) {
              dispatch({
                type: 'FEE_CHANGE',
                number: e.target.value,
              });
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default DepositFee;