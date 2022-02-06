import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react";
import { Button } from "@mui/material";

const EditorSection = () => {
	const editor = useRef(null)
	const [content, setContent] = useState('')

	const config = {
		readonly: false, // all options from https://xdsoft.net/jodit/doc/
    toolbarButtonSize: "small",
    placeholder: "글을 작성해주세요",
    toolbarAdaptive: false,
    buttons: "bold,underline,italic,strikethrough,ul,ol,indent,outdent,fontsize,cut,copy,hr,table"
    ,
	}
  
  return (
    <div>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={newContent => {}}
      >

      </JoditEditor>
      <Button
        variant='outlined'
        action={function(e) {
        console.log({content});
      }}>
        Value 보기 위한 테스트 버튼
      </Button>
    </div>
  );
};

export default EditorSection;