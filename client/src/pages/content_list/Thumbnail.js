import React, { Component } from 'react';

import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

class Thumbnail extends Component {
    render() {
        const item = this.props.item;

        return (
            <div>
                <a href={"/" + this.props.item.id} style={{textDecoration: 'none'}}>
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.title}
                        subtitle={<span>by: {item.location}</span>}
                        position="below"
                    />
                </ImageListItem>
                </a>
            </div>
        );
    }
};

export default Thumbnail;