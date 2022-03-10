import React from "react";
import {Stack, Typography} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

export function Title ({title, views_count}) {
	const color3 = '#7b7b7b';

  return(
    <Stack
			direction={'row'}
			justifyContent={'space-between'}
      style={{
        paddingTop: '20px',
        paddingBottom: '20px',
      }}
    >
      <Typography variant='h1' fontFamily={"NanumSquare"} fontWeight={700} fontSize={30}>{title}</Typography>
			<div style={{display: 'inline-block'}}>
      	<VisibilityIcon sx={{ fontSize: 13, color: color3}}  />
				<Typography
					variant="span"
					sx={{
						color: color3,
						fontSize: 13,
						display: 'inline-block',
						marginLeft: '2px'
					}}
					fontWeight={200}
					color="text.secondary"
				>
					{views_count}
				</Typography>
			</div>
    </Stack>);
}