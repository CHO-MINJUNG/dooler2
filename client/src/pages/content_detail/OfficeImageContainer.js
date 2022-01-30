import { ImageList, ImageListItem } from "@mui/material";
import React from "react";

const OfficeImageContainer = ({imageList}) => {

    console.log(`imageList: ${imageList}`);
    return (
        <ImageList cols={2}>
            <ImageListItem>
                <img src={imageList[0]}></img>
            </ImageListItem> 
            <ImageListItem>
                <img src={imageList[1]}></img>
            </ImageListItem> 
            <ImageListItem>
                <img src={imageList[2]}></img>
            </ImageListItem> 
            <ImageListItem>
                <img src={imageList[3]}></img>
            </ImageListItem> 
        </ImageList>
    );
};

export default OfficeImageContainer;