
const authenticationButtons = (isAuthNeeded, isLoggedIn) => {
	console.log(isAuthNeeded, isLoggedIn);
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
			<a href=""
				style={{
					textDecoration:'none',
					color: 'black',
				}}
				onClick={function (event) {
					event.preventDefault();
					alert('준비중입니다.')
				}}
			>
				로그인
			</a>
			/
			<a href=""
				style={{
					textDecoration:'none',
					color: 'black',
				}}
				onClick={function (event) {
					event.preventDefault();
					alert('준비중입니다.')
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