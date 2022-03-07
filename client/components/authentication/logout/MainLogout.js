import React from "react";
import axios from 'axios';
axios.defaults.withCredentials=true;
import router from "next/router";

export const API_BASE_URL = process.env.NEXT_PUBLIC_REACT_APP_API_ROOT;

const MainLogout = () => {
  axios({
    method: 'get',
    url: `${API_BASE_URL}/api/auth/logout`,
    })
    .then((response) => {
      if(response.data.logoutSuccess){
        router.push("/")
      }
    })
return (
  <div>
  </div>
  );
};

export default MainLogout;