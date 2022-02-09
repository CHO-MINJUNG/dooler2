import axios from 'axios';

export const API_BASE_URL = process.env.REACT_APP_API_ROOT;

export const authAction = (userInputData) => {
  if ( userInputData.email ===""){
    return alert('아이디를 입력하세요')
  } else if (userInputData.password === ""){
    return alert('비밀번호를 입력하세요')
  }
  const request = axios({
    method:'POST',
    url: `${API_BASE_URL}/api/auth/login`,
    data: {email: userInputData.email, password: userInputData.password},
    withCredentials:true
  })
    .then(response => response.data);

  return{
    type: "LOGIN_USER",
    payload: request
  }
}

export const authReducer = (currentState = {}, action) => {
  // state initialize
  // if (currentState === undefined) {
  //   currentState = {
  //     isLoggedIn: false,
  //     userId: '',
  //   }
  // }

	switch (action.type){
    
		case 'LOGIN_USER':
      console.log(action);  
      return {...currentState, userLogin: action.payload }
			break;

		default:
      return currentState;
	}	
}
