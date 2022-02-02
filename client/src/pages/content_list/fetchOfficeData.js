import axios from 'axios';

export const API_BASE_URL = process.env.REACT_APP_API_ROOT;

const fetchOfficeData = async (setData) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api`)
    setData(response.data)
  } catch(err) {
    console.log("Error >>", err);
  }
}

export default fetchOfficeData;