import { ImageList, ImageListItem } from "@mui/material";
import React from "react";
import Carousel from 'nuka-carousel';

export const API_BASE_URL = process.env.NEXT_PUBLIC_REACT_APP_API_ROOT;

const OfficeImageContainer = ({imageList}) => {
    // const domain = `${API_BASE_URL}/api/image/`;
    return (
			<>
        <Carousel
					defaultControlsConfig={{prevButtonText: '<', nextButtonText: '>'}}
					heightMode="current"
				>
					{imageList.map((item) => (
						<img src={item.file_name} key={item.id} style={imgStyle()}></img>
					))}
        </Carousel>
			</>
    );
};


const imgStyle = () => {
	return {
		maxHeight: '500px',
		objectFit: 'contain'
	};
}

export default OfficeImageContainer;