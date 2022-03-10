import Typography from "@mui/material/Typography";
import {TextField} from "@mui/material";
import React from "react";
import { useDispatch } from 'react-redux';

const PhoneNumber = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Typography sx={{ fontSize: 15}} color="black" gutterBottom>
        연락처
      </Typography>
      <TextField
        variant={"standard"}
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
    </>
  );
}

export default PhoneNumber;