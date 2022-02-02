import React, { Component } from 'react';

import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { color } from '@mui/system';
import { Typography } from '@mui/material';

export const API_BASE_URL = process.env.REACT_APP_API_ROOT;

class Thumbnail extends Component {
    render() {
        const item = this.props.item;
        var title = item.office_title;
        const imgUrl = item.thumbnail;
        const location = item.office_location;
        const id = item.id;

        title = textEllipsisOver19Chars(title);
        const domain = `${API_BASE_URL}/api/image/`;

        var imgSrc = domain +item.thumbnail;
        if (item.thumbnail==""){
            imgSrc="https://colorate.azurewebsites.net/SwatchColor/B2B2B2";
        }

        return (
            <div>
                <a href={"/" + id} style={{textDecoration: 'none', color: 'black'}}>
                <ImageListItem key={id} sx={
									thumbnailSx()
								}>
                    <img
                        src={imgSrc}
                        srcSet={`${imgSrc}`}
                        alt={item.title}
                        loading="lazy"
                        style={{
                            height:"172px",
														borderRadius: '5px 5px 0px 0px',
                        }}
                    />
										<div style={{padding: '7px 4px 0px 14px'}}>
											<ImageListItemBar
													title={<Typography fontWeight={500}>{title}</Typography>}
													subtitle={<Typography sx={{fontSize: 13, marginTop: '5px'}} fontWeight={350} color="text.secondary">{location}</Typography>}
													position="below"
											/>
										</div>
                </ImageListItem>
                </a>
            </div>
        );
    }
};

const textEllipsisOver19Chars = function (text) {
    var renderedText = text;

    if (text.length > 19) {
        renderedText = renderedText.substring(0, 19);
        renderedText += "...";
    }

    return renderedText;
}

const thumbnailSx = () => {
	return {
		border: '1px solid #e3e3e3',
		borderRadius: '5px',
		'&:hover': {  
      transform:'scale(1.1)',
			transitionDuration: '500ms',
			boxShadow: '0px 0px 5px #9E9E9E'
		}
	};
}

export default Thumbnail;
