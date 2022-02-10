import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react";
import { Button, TextareaAutosize, TextField, Typography} from "@mui/material";
import TextFieldEditor from './TextFieldEditor';
import { useSelector } from 'react-redux';

const EditorSection = () => {
	const editor = useRef(null)
	const [content, setContent] = useState('')
  const [areaContent, setAreaContent] = useState('');
  
  
  function f(statef) {
    console.log(statef);
    return statef.imageList;
  }
  const imageList =  useSelector(f);

  return (
    <div>
      <TextFieldEditor 
        title={"제목"}
        setState={setAreaContent}/>
      <TextFieldEditor
        title={"지역"}
        placeholder={"\'(지역) (가장 가까운 역)\' 으로 적어주세요. (예, 파주 야당역)"}
        setState={setAreaContent}/>
      <TextFieldEditor
        title={"금액"}
        placeholder={"\'보증금/월세\'를 적어주세요 (예, 15/20만 원)"}
        setState={setAreaContent}/>
      <TextFieldEditor
        title={"연락처"}
        placeholder={"\'보증금/월세\'를 적어주세요 (예, 15/20만 원)"}
        setState={setAreaContent}/>

      <Typography variant="subtitle1" sx={{marginTop: '20px',}}>본문</Typography>
      <TextField
        name='main-text'
        value={areaContent}
        multiline={true}
        minRows={10}
        onChange={
          function (e) {
            setAreaContent(e.target.value);
          }
        }
        fullWidth
        sx={{
          marginBottom: '20px',
        }}
      ></TextField>
      <Typography sx={{whiteSpace: 'pre-line'}}>{areaContent}</Typography>
    </div>
  );
};

export default EditorSection;