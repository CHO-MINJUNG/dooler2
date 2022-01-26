import React, { Component } from 'react';

import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

class Thumbnail extends Component {
    render() {
        const item = this.props.item;
        console.log(item);
        const title = item.office_title.substring(0, 19);
        const imgUrl = item.thumbnail;
        const location = item.office_location;
        const id = item.office_info_id;

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
                        src={`${imgUrl}`}
                        srcSet={`${imgUrl}`}
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