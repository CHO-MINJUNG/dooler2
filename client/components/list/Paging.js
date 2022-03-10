import React, { useState, useEffect } from "react"; 
import {useDispatch, useSelector} from 'react-redux';
import Page from '../../styles/Paging.module.css';
import Pagination from "react-js-pagination"; 
import axios from 'axios';

axios.defaults.withCredentials=true;

export const API_BASE_URL = process.env.NEXT_PUBLIC_REACT_APP_API_ROOT;

const Paging = () => { 
  const [pageCount, setPageCount] = useState(null);
  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  const handlePageChange = (newPage) => { 
    dispatch({
      type: 'CURRENT_PAGE',
      page: newPage
    })
  }; 
  
  useEffect(() => {
    axios({
      method: 'get',
      url: `${API_BASE_URL}/api/pageCount`,
    }).then((response) => {
      setPageCount(response.data.cnt)
    });
  }, page)


  return ( 
    <>
    <Pagination 
      activePage={page} 
      itemsCountPerPage={12} 
      totalItemsCount={pageCount} 
      pageRangeDisplayed={5}  
      prevPageText={"<"} 
      nextPageText={">"} 
      innerClass={Page.pagination}
      activeClass={Page.active}
      onChange={handlePageChange} 
    />
    </>
  ); 
}; 

export default Paging;
