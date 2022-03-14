import {React, useState, useEffect} from "react";
import TitleEditor from "./TitleEditor";
import OfficeInfoEditor from "./OfficeInfoEditor";
import { Provider, useDispatch } from "react-redux";
import { createStore } from "redux";
import contentStore from '../contentSlice';
import ImageUploader from "../ImageUploader";
import ThumbnailPreview from "../ThumbnailPreview";
import UpdateRedux from "./UpdateRedux";

const FormContainer = ({state, response}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  useEffect(() => {
    if(state === 'update'){
      setIsUpdate(true)
    }
  }, [])
  
  return (
    <div style={{paddingTop: '10px'}}>
      <Provider store={contentStore}>
        {isUpdate && <UpdateRedux response={response} />}
        <TitleEditor
          placeholder={"제목을 입력해주세요"}
        />
        {/* <OfficeImageContainer imageList={renderImageListOrDefault(data.image_link)}></OfficeImageContainer> */}
        <ImageUploader/>
        <OfficeInfoEditor></OfficeInfoEditor>
      </Provider>
    </div>
  );
};

export default FormContainer;