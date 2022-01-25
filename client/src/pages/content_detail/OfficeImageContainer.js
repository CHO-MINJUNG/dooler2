import { ImageList, ImageListItem } from "@mui/material";
import React from "react";

const OfficeImageContainer = ({image}) => {
    return (
        <ImageList cols={2}>
            <ImageListItem>
                <img src={image}></img>
            </ImageListItem> 
            <ImageListItem>
                <img src={image}></img>
            </ImageListItem> 
            <ImageListItem>
                <img src={image}></img>
            </ImageListItem> 
            <ImageListItem>
                <img src={image}></img>
            </ImageListItem> 
        </ImageList>
    );
};

export default OfficeImageContainer;