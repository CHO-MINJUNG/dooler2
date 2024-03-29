import { TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TitleEditor = ({setState, name, placeholder}) => {
  const dispatch = useDispatch();
  let selector = useSelector(state => state);

  return (
    <TextField
      name={name}
      placeholder={placeholder}
      fullWidth
      size="middle"
      value={selector.title}
      onChange={function(e) {
        dispatch({
          type: 'TITLE_CHANGE',
          text: e.target.value,
        });
      }}
    />
  );
};

export default TitleEditor;