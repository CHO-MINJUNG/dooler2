import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios';
axios.defaults.withCredentials=true;

export const API_BASE_URL = process.env.REACT_APP_API_ROOT;

const OfficeButtonContainer = ({office_id}) => {
  let navigate = useNavigate();

  const onDeleteClick = () => {
    axios({
      method: 'post',
      url: `${API_BASE_URL}/api/office_info/delete/${office_id}`,
    }).then((response) => {
      if(response.data.deleteSuccess) {
        alert("삭제가 완료되었습니다")
        navigate('/');
      } 
      
    });
  }

  return (
    <div
      style={{
        paddingBottom: '20px',
      }}
      >
      <Stack direction="row" spacing={0.5} >
        <Button variant="outlined">수정</Button>
        <Button variant="outlined" onClick={onDeleteClick}>삭제</Button>
        <Button variant="outlined">다시 올리기</Button>
      </Stack>
      </div>
    
  ) 
}

export default OfficeButtonContainer;