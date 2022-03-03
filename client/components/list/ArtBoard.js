import { Card } from "@mui/material";
import Image from 'next/image';
import MediaQuery from 'react-responsive';

const ArtBoard = () => {
	return (
		<div style={{width: '100%'}}>
			{/*<MediaQuery maxWidth={900}>*/}
			{/*	<Image src={'/artboard_long.png'} layout='fill'></Image>*/}
			{/*</MediaQuery>*/}
			<MediaQuery minWidth={901}>
				<Image src={'/artboard_short.png'} layout={'fill'}></Image>
			</MediaQuery>
		</div>
	);
};

export default ArtBoard;