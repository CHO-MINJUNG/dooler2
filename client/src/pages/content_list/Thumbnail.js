import React, { Component } from 'react';

import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export const API_BASE_URL = process.env.REACT_APP_API_ROOT;

class Thumbnail extends Component {
	render() {
		const item = this.props.item;
		const title = item.office_title;
		const location = item.office_location;
		const id = item.id;
		const fee = item.office_fee;

		const domain = `${API_BASE_URL}/api/crop_image/`;
        
		return (
			<Grid item key={item} xs={12} sm={6} md={4} sx={
				{'&:hover': {  
					transitionDuration: '500ms',
					transform:'scale(1.1)',
				}}}>
				<a href={'dreams/' + id} style={{textDecoration: 'none'}}>
					<Card
						sx={{ height: '100%', display: 'flex', flexDirection: 'column',}}
					>
						<CardMedia
							component="img"
							height={192}
							image={item.thumbnail}
							alt="사무실 사진"
						/>
						<CardContent sx={{ flexGrow: 1 }}>
							<Typography fontWeight={500} noWrap={true}>
								{title}
							</Typography>
							<Grid container direction={"row"} justifyContent={'space-between'}>
								<Typography sx={{fontSize: 13, marginTop: '5px'}} fontWeight={350} color="text.secondary">
									{location}
								</Typography>
								<Typography sx={{fontSize: 15, marginTop: '5px'}} fontWeight={600}>
									{fee}
								</Typography>
							</Grid>
						</CardContent>
					</Card>
				</a>
			</Grid>
		);
  }
};

export default Thumbnail;
