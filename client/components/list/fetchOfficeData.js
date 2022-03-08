import axios from 'axios';

axios.defaults.withCredentials=true;

export const API_BASE_URL = process.env.NEXT_PUBLIC_REACT_APP_API_ROOT;

const fetchOfficeData = async (setData, page) => {
  try {
    axios({
      method:'get',
      url: `${API_BASE_URL}/api?page=${page}`})
      .then(response => {
        setData(response.data)
      });
  } catch(err) {
    console.log("Error >>", err);
  }
}

export default fetchOfficeData;