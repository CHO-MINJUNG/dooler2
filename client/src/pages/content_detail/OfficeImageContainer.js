import { ImageList, ImageListItem } from "@mui/material";
import React from "react";

const OfficeImageContainer = ({imageList}) => {

    console.log(`imageList: ${imageList}`);
    return (
        <ImageList cols={2}>
            <ImageListItem>
                <img src={imageList}></img>
            </ImageListItem> 
            <ImageListItem>
                <img src={imageList}></img>
            </ImageListItem> 
            <ImageListItem>
                <img src={imageList}></img>
            </ImageListItem> 
            <ImageListItem>
                <img src={imageList}></img>
            </ImageListItem> 
        </ImageList>
    );
};

export default OfficeImageContainer;