import axios from 'axios';

axios.defaults.withCredentials=true;

export const API_BASE_URL = process.env.REACT_APP_API_ROOT;

const sendContentToAxios = (content) => {
  const formData = new FormData();

  //TODO: 전송하는 formData 설정
  formData.append('file', content.imageList[0]);
  formData.append("fileName", 'fileName');
  // formData.append('name', 'jingi');

  for (let value of formData.values()) {
    console.log(value);
  }

  
  axios.post(
    `${API_BASE_URL}/api/office_info/create`,
    formData,
    // headers: { "Content-Type" : "multipart/form-data"}
  );

  // axios({
  //   method:'POST',
  //   url: `${API_BASE_URL}/api/office_info/create`,
  //   data: {email: 'hi', password: 'hi'},
  //   // withCredentials: true
  // }) 


  // axios({
  //     method:'POST',
  //     url: `${API_BASE_URL}/api/office_info/create`,
  //     data: content,
  //   }, {
      
  //   headers: {
  //     'Content-Type': 'multipart/form-data'
  //   },
  //   }). then(

  //     )
}

export default sendContentToAxios;