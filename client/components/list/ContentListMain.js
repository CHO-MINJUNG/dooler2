import React, {useState, useEffect} from 'react';
// import ThumbnailContainer from './ThumbnailContainer';
import fetchOfficeData from './fetchOfficeData';
import { useSelector } from "react-redux";

const ContentListMain = () => {
  const [data, setData] = useState([]);
  const page = useSelector((state) => state.page);
  useEffect(() => {
    fetchOfficeData(setData, page);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [page]);

  return (
      <div>
        <br></br>
        {data}
        {/*<ThumbnailContainer itemData={data}></ThumbnailContainer>*/}
      </div>
  );
}

export default ContentListMain;