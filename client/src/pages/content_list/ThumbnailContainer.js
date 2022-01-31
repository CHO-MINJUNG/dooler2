import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import Thumbnail from './Thumbnail';

export default function ThumbnailContainer(props) {
  console.log(props);
  return (
    <ImageList cols={4} gap={4}>
      {props.itemData.map((item) => {
          return (<Thumbnail key={item.id} item={item}></Thumbnail>);
      })}
    </ImageList>
  );
}