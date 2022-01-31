import { ImageList, ImageListItem } from "@mui/material";
import React from "react";

const OfficeImageContainer = ({imageList}) => {
    const domain = 'http://localhost:3000/api/image/';
    console.log(`imageList: ${imageList}`);
    return (
        <ImageList cols={2}>
            <ImageListItem>
                <img src={domain+imageList[0]}></img>
            </ImageListItem> 
            <ImageListItem>
                <img src={domain+imageList[1]}></img>
            </ImageListItem> 
            <ImageListItem>
                <img src={domain+imageList[2]}></img>
            </ImageListItem> 
            <ImageListItem>
                <img src={domain+imageList[3]}></img>
            </ImageListItem> 
        </ImageList>
    );
};

export default OfficeImageContainer;