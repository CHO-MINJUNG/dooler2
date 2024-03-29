import axios from 'axios';
axios.defaults.withCredentials=true;

export const API_BASE_URL = process.env.NEXT_PUBLIC_REACT_APP_API_ROOT;

const sendContentToAxios = (content) => {
  let formData = new FormData();
  let createSuccess = true;
  console.log(content)
  const num = content.imageList.length;
  for (var i=0; i<num; i++){
    if (content.imageList[i]=== null) break;
    formData.append(`image`, content.imageList[i]);
  }
  
  formData.append('contact', content.contact)
  formData.append('deposit', content.deposit)
  formData.append('detail', content.address.detail)
  formData.append('fee', content.fee)
  formData.append('location', content.location)
  formData.append('mainText', content.mainText)
  formData.append('road', content.address.road)
  formData.append('title', content.title)
  formData.append('zipcode', content.address.zipcode)

  if (content.postType==='CREATE'){
    axios({
      method: 'post',
      url: `${API_BASE_URL}/api/office_info/create`,
      data: formData,
      headers: { "Content-type" : "multipart/form-data"},
    }).then((response) => {
      createSuccess = response.data.createSuccess
    });
  }
  else if(content.postType==='UPDATE'){
    // axios({
    //   method: 'post',
    //   url: `${API_BASE_URL}/api/office_info/update/${content.office_id}`,
    //   data: formData,
    //   headers: { "Content-type" : "multipart/form-data"},
    // }).then((response) => {
    //   createSuccess = response.data.createSuccess
    // });
  }
  return createSuccess
}

export default sendContentToAxios;