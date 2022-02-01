import axios from 'axios';

const fetchOfficeData = async (setData) => {
  try {
    const response = await axios.get('/api')
    setData(response.data)
  } catch(err) {
    console.log("Error >>", err);
  }
}

export default fetchOfficeData;