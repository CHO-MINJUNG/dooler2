import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch, batch} from "react-redux";

const UpdateRedux = ({response}) => {
  const dispatch = useDispatch();    
  batch(() => {
    dispatch({
      type: 'TITLE_CHANGE',
      text: response.office_title})
    dispatch({
      type: 'CONTACT_CHANGE',
      text: response.user_phone})
    dispatch({
      type: 'MAINTEXT_CHANGE',
      text: response.office_content})
    dispatch({
      type: 'FEE_CHANGE',
      number: response.office_fee})
    dispatch({
      type: 'DEPOSIT_CHANGE',
      number: response.office_deposit})
    dispatch({
      type: 'ADDRESS_CHANGE',
      addressDict: {
        "zipcode":response.address_zipcode,
        "road":response.address_road,
        "detail":response.address_detail}})
    dispatch({
      type:'POST_TYPE_SET',
      postType:'UPDATE'})
    dispatch({
      type:'UPDATE_ID_CHANGE',
      number: response.id})
    }) 
    for(let i=0; i<response.image_link.length; i++){
      dispatch({
        type: 'IMAGE_UPLOAD',
        index: i,
        image: response.image_link[i].file_name
      })
    }
  
  return(
      <div></div>
  )
}

export default UpdateRedux;