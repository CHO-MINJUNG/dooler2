import { Card } from "@mui/material";
import Image from 'next/image';
import MediaQuery from 'react-responsive';

const ArtBoard = () => {
	return (
		<div style={{width: '100%'}}>
			{/* TODO: img -> Image 로 바꾸면 좋을 듯 (사실 필요는 없음) */}
			<MediaQuery maxWidth={900}>
				<img src={'/artboard_long.png'} width={'100%'}></img>
			</MediaQuery>
			<MediaQuery minWidth={901}>
				<img src={'/artboard_short.png'} width={'100%'}></img>
			</MediaQuery>
		</div>
	);
};

export default ArtBoard;