import React, { useState } from 'react';
import {Helmet} from "react-helmet";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import {Grid} from "@mui/material";
import Typography from "@mui/material/Typography";

const MainAddressPopup = () => {
	const [addressInfo, setAddressInfo] = useState("")

	if (typeof window !== "undefined") {
		const detailField = document.getElementById("detail");
	}
	const dispatch = useDispatch();

	const get_address = () => {
		new window.daum.Postcode({
			oncomplete: function(data){
				var roadAddr = data.roadAddress; // 도로명 주소 변수
				var extraRoadAddr = ''; // 참고 항목 변수

				// 법정동명이 있을 경우 추가한다. (법정리는 제외)
				// 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
				if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
						extraRoadAddr += data.bname;
				}
				// 건물명이 있고, 공동주택일 경우 추가한다.
				if(data.buildingName !== '' && data.apartment === 'Y') {
					extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
				}
				// 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
				if(extraRoadAddr !== ''){
						extraRoadAddr = ' (' + extraRoadAddr + ')';
				}

				setAddressInfo({
					"road": roadAddr,
					"jibun" : data.jibunAddress,
					"zonecode": data.zonecode,
					"extra": extraRoadAddr
				});
				//sido, sigungu, roadname를 따로 저장해야 할 듯?

				dispatch({
					type: 'ADDRESS_CLASSIFIER_CHANGE',
					addressClassifierDict: {
						sido: data.sido,
						sigungu: data.sigungu,
						roadname: data.roadname,
					}
				})

			setAddressInfo({
				"road": roadAddr,
				"jibun" : data.jibunAddress,
				"zonecode": data.zonecode,
				"extra": extraRoadAddr
			})
			},
		onclose: function(state) {
			if(state === 'COMPLETE_CLOSE'){
				detailField.focus()
			}
		}
    }).open();
	}

	// const onDetailChange = (e) => {
	// 	dispatch({ 
	// 		type: 'ADDRESS_CHANGE',
	// 		addressArray: [addressInfo.zonecode, addressInfo.road, e.target.value],
	// 	});
	// }

	const onDetailClick = () => {
		if(addressInfo===""){
			alert("우편번호 먼저 작성바랍니다")
			detailField.blur();
		}
	}
	
	return(
		<div style={{marginTop: '20px'}}>
			<Helmet>
				<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js" />
			</Helmet>
      <Typography sx={{ fontFamily:"NanumSquareBold", fontSize: 15}} color="black" gutterBottom>
        상세주소 입력
      </Typography>
			<Grid container spacing={1} sx={{alignItems:"center"}}>
				<Grid item xs={7}>
					<TextField
						hiddenLabel
						variant={"filled"}
						size={"small"}
						defaultValue={"우편번호"}
						onClick={get_address}
						value={addressInfo.zonecode}
						disabled id="outlined-disabled"
					/>
				</Grid>
				<Grid item xs={5} >
					<Button
            sx={{fontFamily:"NanumSquareBold", padding:0, fontSize:17}}
						variant="outlined"
						size={'small'}
						onClick={get_address}
            fullWidth
					>
						주소 검색
					</Button>
				</Grid>
			</Grid>
			<TextField
        hiddenLabel
        variant={"filled"}
				size={"small"}
				defaultValue={"도로명주소"}
				onClick={get_address}
				value={addressInfo.road}
				disabled
				fullWidth
				id="outlined-disabled"
				style={{marginTop:'3px'}}
			/>
			<TextField
        hiddenLabel
        variant={"filled"}
				size={"small"}
				id="detail"
				onClick={onDetailClick}
				required
				fullWidth
				placeholder="상세주소"
				onChange={
					function (e) {
						dispatch({
							type: 'ADDRESS_CHANGE',
							addressDict: {"zipcode":addressInfo.zonecode, "road":addressInfo.road, "detail":e.target.value},
						});
					}
				}
				style={{marginTop:'3px'}}
			/>
		</div>
	);
}

export default MainAddressPopup;