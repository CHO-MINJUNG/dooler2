import React, {useState, useEffect, Component} from 'react';
import ThumbnailContainer from './ThumbnailContainer';

import axios from 'axios';
import { render } from 'react-dom';

export const API_BASE_URL = process.env.REACT_APP_API_ROOT;

const ContentListMain = () => {
  //TODO: 이걸 fetch.js 에 넘기고 싶다.
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const callApi = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api`)
      setData(response.data)
    } catch(err) {
      console.log("Error >>", err);
    }
  }

  useEffect(() => {
    callApi();
  }, loading);
  
  return (
      <div>
          <ThumbnailContainer itemData={data}></ThumbnailContainer>
      </div>
  );
    
}

export default ContentListMain;