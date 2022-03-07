import axios from 'axios';
axios.defaults.withCredentials=true;

export const API_BASE_URL = process.env.NEXT_PUBLIC_REACT_APP_API_ROOT;

export const loginAxios = async (userInputData, setUserInfo) => {
  const request = await axios({
    method:'POST',
    url: `${API_BASE_URL}/api/auth/login`,
    data: {email: userInputData.email, password: userInputData.password},
  })  

  setUserInfo(prevState => ({
    ...prevState,
    isLoggedIn: request.data.userLogin,
    userId: request.data.userId,
    message: request.data.message,
  }))
  
  return({
    isLoggedIn: request.data.userLogin,
    userId: request.data.userId,
    message: request.data.message,
  })
}

// export const authReducer = (currentState, action) => {
//   // state initialize
//   if (currentState === undefined) {
//     currentState = {
//       isLoggedIn: false,
//       userId: '',
//       message:''
//     }
//   }

// 	switch (action.type){
// 		case 'LOGIN_USER':
//       currentState = {
//         ...currentState, 
//         isLoggedIn: action.payload.userLogin, 
//         userId: action.payload.userId,
//         message: action.payload.message
//       }
// 			break;

// 		default:
//       break;
// 	}	
//   return currentState;
// }

