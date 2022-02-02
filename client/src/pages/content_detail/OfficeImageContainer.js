import { ImageList, ImageListItem } from "@mui/material";
import React from "react";
import Carousel from 'nuka-carousel';

export const API_BASE_URL = process.env.REACT_APP_API_ROOT;

const OfficeImageContainer = ({imageList}) => {
    const domain = `${API_BASE_URL}/api/image/`;
    
    console.log(`imageList: ${imageList}`);
    return (
        <Carousel
					defaultControlsConfig={{prevButtonText: '<', nextButtonText: '>'}}
					heightMode="current"
				>
					<img src={domain+imageList[0]} style={imgStyle()}></img>
					<img src={domain+imageList[1]} style={imgStyle()}></img>
					<img src={domain+imageList[2]} style={imgStyle()}></img>
					<img src={domain+imageList[3]} style={imgStyle()}></img>
        </Carousel>
    );
};

const imgStyle = () => {
	return {
		maxHeight: '500px',
		objectFit: 'contain'
	};
}

export default OfficeImageContainer;