import React, {useState, useEffect, Component} from 'react';
import ThumbnailContainer from './ThumbnailContainer';

import axios from 'axios';
import { render } from 'react-dom';

function useFetch() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    function fetchUrl() {
        axios.get(``).then(response => {
            setData(response.data);
        });
        setLoading(false);
    }

    useEffect(() => {
        fetchUrl();
    }, []);
    return data;
}

const ContentListMain = () => {
    // const data = useFetch();
<<<<<<< HEAD
=======

    //TODO: Javascript에 에러 짱많음 ㅋ
    //useFetch 쓰려고 할 때 진창남

>>>>>>> remotes/origin/master
    const data = [
        {
          id: 0,
          img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
          title: 'Breakfast',
          location: '@bkristastucchio',
        },
        {
          id: 1,
          img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
          title: 'Burger',
          location: '@rollelflex_graphy726',
        },
        {
          id: 2,
          img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          title: 'Camera',
          location: '@helloimnik',
        },
        {
          id: 3,
          img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
          title: 'Coffee',
          location: '@nolanissac',
        },
        {
          id: 4,
          img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
          title: 'Hats',
          location: '@hjrc33',
        },
        {
          id: 5,
          img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
          title: 'Honey',
          location: '@arwinneil',
        },
        {
          id: 6,
          img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
          title: 'Basketball',
          location: '@tjdragotta',
        },
        {
          id: 7,
          img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
          title: 'Fern',
          location: '@katie_wasserman',
        },
        {
          id: 8,
          img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
          title: 'Mushrooms',
          location: '@silverdalex',
        },
        {
          id: 9,
          img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
          title: 'Tomato basil',
          location: '@shelleypauls',
        },
        {
          id: 10,
          img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
          title: 'Sea star',
          location: '@peterlaster',
        },
        {
          id: 11,
          img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
          title: 'Bike',
          location: '@southside_customs',
        },
      ];

    return (
        <div>
            <ThumbnailContainer itemData={data}></ThumbnailContainer>
        </div>
    );
    
}

export default ContentListMain;