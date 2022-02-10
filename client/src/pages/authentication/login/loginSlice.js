import axios from 'axios';

export const API_BASE_URL = process.env.REACT_APP_API_ROOT;

export const authAction = (userInputData) => {
  // if ( userInputData.email ===""){
  //   return alert('아이디를 입력하세요')
  // } else if (userInputData.password === ""){
  //   return alert('비밀번호를 입력하세요')
  // }
  const request = axios({
    method:'POST',
    url: `${API_BASE_URL}/api/auth/login`,
    data: {email: userInputData.email, password: userInputData.password},
  })
    .then(response => {
      console.log(response);
      return response.data});

  return{
    type: "LOGIN_USER",
    payload: request
  }
}

export const authReducer = (currentState, action) => {
  // state initialize
  if (currentState === undefined) {
    currentState = {
      isLoggedIn: false,
      userId: '',
      message:''
    }
  }

	switch (action.type){
		case 'LOGIN_USER':
      currentState = {
        ...currentState, 
        isLoggedIn: action.payload.userLogin, 
        userId: action.payload.userId,
        message: action.payload.message
      }
      //console.log(currentState)
			break;

		default:
      break;
	}	
  return currentState;
}

