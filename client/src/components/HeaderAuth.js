
const authenticationButtons = (isAuthNeeded, isLoggedIn) => {
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

const loginRegistrationButton = () => {
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

const logoutMypageButton = () => {
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

export default authenticationButtons;