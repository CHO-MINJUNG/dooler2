import axios from 'axios';

export const API_BASE_URL = process.env.REACT_APP_API_ROOT;

const fetchUserData = async (email, password) => {
  try {
    console.log(email, password)
    axios.post(`${API_BASE_URL}/api/auth/login`, {
      username : email,
      password : password
    }).then((response) => {
        console.log(response.status);
        console.log(response.data.token);
      });
} catch(err) {
    console.log("Error >>", err);
  }
}

export default fetchUserData;