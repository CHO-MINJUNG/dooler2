import axios from 'axios';
axios.defaults.withCredentials=true;
import router from "next/router";

export const API_BASE_URL = process.env.NEXT_PUBLIC_REACT_APP_API_ROOT;

export const loginAxios = async (userInputData, setUserInfo) => {
  await axios({
    method:'POST',
    url: `${API_BASE_URL}/api/auth/login`,
    data: {email: userInputData.email, password: userInputData.password},
  })
    .then((response) => {
      if (response.data.userLogin === true) {
        router.push("/")
      } 
      else{
        setUserInfo(prevState => ({
          ...prevState,
          isLoggedIn: response.data.userLogin,
          userId: response.data.userId,
          message: response.data.message,
        }))
      }
    })
}
