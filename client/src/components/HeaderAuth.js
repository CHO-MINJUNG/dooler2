import axios from 'axios';
import { useState } from 'react';
axios.defaults.withCredentials=true;

// export const API_BASE_URL = process.env.REACT_APP_API_ROOT;

// const [loginData, setLoginData] = useState(false);

// exports.isLoggedIn = axios({
//     method:'GET',
//     url: `${API_BASE_URL}/api/auth/session`,
// }).then(response =>{
//     setLoginData(response.data)
// 	}
// )


export const authenticationButtons = (isAuthNeeded, isLoggedIn) => {
	if (!isAuthNeeded) {
		return ;
	} else {
		if (isLoggedIn) {
			return logoutMypageButton();
		} else {
			return loginRegistrationButton();
		}
	}
}

export const loginRegistrationButton = () => {
	return (
		<div>
			<a href="/auth/login"
				style={{
					textDecoration:'none',
					color: 'black',
				}}
			>
				로그인
			</a>
			/
			<a href="/auth/signup"
				style={{
					textDecoration:'none',
					color: 'black',
				}}
			>
				회원가입
			</a>
		</div>
	);
}

export const logoutMypageButton = () => {
	return (
		<div>
			<a href=""
				style={{
					textDecoration:'none',
					color: 'black',
				}}
			>
				로그아웃
			</a>
			/
			<a href=""
				style={{
					textDecoration:'none',
					color: 'black',
				}}
			>
				마이페이지
			</a>
		</div>
	);
}
