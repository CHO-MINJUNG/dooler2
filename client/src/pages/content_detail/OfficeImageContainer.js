import { ImageList, ImageListItem } from "@mui/material";
import React from "react";

export const API_BASE_URL = process.env.REACT_APP_API_ROOT;

const OfficeImageContainer = ({imageList}) => {
    const domain = `${API_BASE_URL}/api/image/`;
    
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