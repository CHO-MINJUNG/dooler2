import React, {useState, useEffect, Component} from 'react';
import ThumbnailContainer from './ThumbnailContainer';
import fetchOfficeData from './fetchOfficeData';

import { render } from 'react-dom';

const ContentListMain = () => {
  //TODO: 이걸 fetch.js 에 넘기고 싶다.
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOfficeData(setData);
  }, loading);
  
  return (
      <div>
          <ThumbnailContainer itemData={data}></ThumbnailContainer>
      </div>
  );
    
}

export default ContentListMain;