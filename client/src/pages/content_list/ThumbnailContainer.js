import * as React from 'react';
import Thumbnail from './Thumbnail';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

export default function ThumbnailContainer(props) {
  console.log(props);

  // return (
  //   <ImageList cols={3} gap={20}>
  //     {props.itemData.map((item) => {
  //         return (<Thumbnail key={item.id} item={item}></Thumbnail>);
  //     })}
  //   </ImageList>
  // );

  return (
    <Grid container spacing={2}>
      {props.itemData.map((item) => (
        <Thumbnail key={item.id} item={item}></Thumbnail>
      ))}
    </Grid>
  );
}