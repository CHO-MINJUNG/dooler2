import React from "react";
import { Grid, TextField, Typography } from "@mui/material";
import { PropTypes } from 'prop-types';

const TextFieldEditor = ({title, setState, name, placeholder}) => {

  return (
    <Grid container alignItems={"center"} spacing={3} sx={{
      marginBottom: '5px',
    }}>
      <Grid item xs={2}>
        <Typography variant="subtitle1">{title}</Typography>
      </Grid>
      <Grid item xs={10}>
        <TextField
          name={name}
          placeholder={placeholder}
          fullWidth
          size="small"
          onChange={function(e) {
            setState(e.target.value);
          }}
        />
      </Grid>
    </Grid>
  );
};

TextFieldEditor.propTypes = {
  title: PropTypes.string.isRequired,
  setState: PropTypes.func.isRequired,
}

export default TextFieldEditor;