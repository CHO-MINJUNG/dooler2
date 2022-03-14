import Typography from "@mui/material/Typography";
import {TextField} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from 'react-redux';

const PhoneNumber = () => {
  const dispatch = useDispatch();
  let selector = useSelector(state => state);
  return (
    <div style={{marginTop: '20px'}}>
      <Typography sx={{ fontFamily:"NanumSquareBold",fontSize: 15}} color="black" gutterBottom>
        연락처
      </Typography>
      <TextField
        hiddenLabel
        variant={"filled"}
        margin={"dense"}
        size="small"
        placeholder="010-0000-0000"
        value={selector.contact}
        onChange={
          function (e) {
            dispatch({
              type: 'CONTACT_CHANGE',
              text: e.target.value,
            });
          }
        }
        fullWidth
      />
      <br></br>
      <Typography variant="caption" color="text.secondary" sx={{fontFamily:"NanumSquare"}}>
        전화 문의시 ‘둘러에서 보고 전화드렸어요’ 라고 하시면 문의가 쉽습니다.
      </Typography>
    </div>
  );
}

export default PhoneNumber;