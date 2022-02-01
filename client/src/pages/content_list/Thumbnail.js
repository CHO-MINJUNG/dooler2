import React, { Component } from 'react';

import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export const API_BASE_URL = process.env.REACT_APP_API_ROOT;

class Thumbnail extends Component {
    render() {
        const item = this.props.item;
        console.log(item);
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

        // if (title.length > 19) {
        //     title = item.title.substring(0, 19);
        //     // title = title.concat("...");
        // }

        // TODO: title 저렇게 만지고 나니까 warning 가득해짐

        return (
            <div>
                <a href={"/" + id} style={{textDecoration: 'none', color: 'black'}}>
                <ImageListItem key={id} sx={hoverThumbnailsx()}>
                    <img
                        src={imgSrc}
                        srcSet={`${imgSrc}`}
                        alt={item.title}
                        loading="lazy"
                        style={{width:"247px",height:"172px"}}
                    />
                    <ImageListItemBar
                        title={title}
                        subtitle={<span>{location}</span>}
                        position="below"
                    />
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

const hoverThumbnailsx = () => {
	return {
		'&:hover': {
			transitionDuration: '500ms',
			boxShadow: '2px 2px 3px #9E9E9E'
		}
	};
}

export default Thumbnail;
