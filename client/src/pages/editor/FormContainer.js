import React from "react";
import TitleEditor from "./TitleEditor";
import OfficeInfoEditor from "./OfficeInfoEditor";
import { Provider } from "react-redux";
import { createStore } from "redux";
import contentReducer from './contentSlice';
import ImageUploader from "./ImageUploader";

const FormContainer = () => {

  const contentStore = createStore(contentReducer);
  return (
    <Provider store={contentStore}>
      <TitleEditor
        placeholder={"제목을 입력해주세요"}
      />
      {/* <OfficeImageContainer imageList={renderImageListOrDefault(data.image_link)}></OfficeImageContainer> */}
      <ImageUploader/>
      <OfficeInfoEditor></OfficeInfoEditor>
    </Provider>
  );
};

export default FormContainer;