import React, {useState, useEffect, Component} from 'react';
import ThumbnailContainer from './ThumbnailContainer';
import fetchOfficeData from './fetchOfficeData';


const ContentListMain = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchOfficeData(setData);
  }, loading);

  return (
      <div>
        <br></br>
        <ThumbnailContainer itemData={data}></ThumbnailContainer>
      </div>
  );
}

export default ContentListMain;