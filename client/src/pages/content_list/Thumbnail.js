import React, { Component } from 'react';

import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

class Thumbnail extends Component {
    render() {
        const item = this.props.item;
        const title = item.office_title.substring(0, 19);

        // if (title.length > 19) {
        //     title = item.title.substring(0, 19);
        //     // title = title.concat("...");
        // }

        return (
            <div>
                <a href={"/" + this.props.item.office_info_id} style={{textDecoration: 'none', color: 'black'}}>
                <ImageListItem key={item.thumbnail}>
                    <img
                        src={`${item.thumbnail}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.thumbnail}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.office_title}
                        loading="lazy"
                        style={{width:"247px",height:"172px"}}
                    />
                    <ImageListItemBar
                        title={title}
                        subtitle={<span>{item.office_location}</span>}
                        position="below"
                    />
                </ImageListItem>
                </a>
            </div>
        );
    }
};

export default Thumbnail;