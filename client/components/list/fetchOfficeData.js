import axios from 'axios';

axios.defaults.withCredentials=true;

export const API_BASE_URL = process.env.NEXT_PUBLIC_REACT_APP_API_ROOT;

const fetchOfficeData = async (setData, page) => {
  console.log(`API_BASE_URL: ${API_BASE_URL}`);
  try {
    axios({
      method:'get',
      url: `/api?page=${page}`})
      .then(response => {
        setData(response.data)
        console.log(`fetchOfficeData.js ${response.data}`)});
  } catch(err) {
    console.log("Error >>", err);
  }
}

export default fetchOfficeData;