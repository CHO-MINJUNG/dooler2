import React, { Component } from 'react';

import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

class Thumbnail extends Component {
    render() {
        const item = this.props.item;
        console.log(item);
        var title = item.office_title;
        const imgUrl = item.thumbnail;
        const location = item.office_location;
        const id = item.id;

        title = textEllipsisOver19Chars(title);

        // TODO: title 저렇게 만지고 나니까 warning 가득해짐

        return (
            <div>
                <a href={"/" + id} style={{textDecoration: 'none', color: 'black'}}>
                    <ImageListItem key={id} sx={hoverThumbnailsx()}>
                        <img
                            src={`${imgUrl}`}
                            srcSet={`${imgUrl}`}
                            alt={item.title}
                            loading="lazy"
                            /* Notice: width, height 강제 해놓았음 */
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