import axios from 'axios';

axios.defaults.withCredentials=true;

export const API_BASE_URL = process.env.REACT_APP_API_ROOT;

const sendContentToAxios = (content) => {
  const formData = new FormData();

  const uploadTestImageFileWhereAreYouLookingAt = content.imageList[0];

  formData.append('imageList', content.imageList[0]);

  console.log('formdTA', formData.keys());

  axios({
    method: 'post',
    url: `${API_BASE_URL}/api/office_info/create`,
    data: formData,
    headers: { "Content-Type" : "multipart/form-data"}
  }).then((response) => console.log(response));

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