import React, { Component } from 'react';

import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

class Thumbnail extends Component {
    render() {
        const item = this.props.item;
        console.log(item);
        var title = item.office_title.substring(0, 19);
        title += '...';
        const imgUrl = item.thumbnail;
        const location = item.office_location;
        const id = item.id;

        const domain = 'http://localhost:3000/api/image/';

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
                <ImageListItem key={id}>
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

export default Thumbnail;