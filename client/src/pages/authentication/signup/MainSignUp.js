import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import { grey } from '@mui/material/colors';

export const API_BASE_URL = process.env.REACT_APP_API_ROOT;

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://dooler.kr">
        Dooler
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme({
  palette: {
    primary: {
      main: grey[600],
    },
  }
});

export default function SignUp() {
  const [value, setValue] = React.useState(new Date());

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" sx={{borderRadius: '5px', paddingBottom:'10px'}}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h6" sx={{marginBottom: '30px', marginTop:'10px'}}>
            회원가입    
          </Typography>
          <Box
            sx={{
              alignItems: 'start',
            }}>
            <Typography component="h1" variant="h5">
              지금 둘러에서 새로운 꿈을 연결보세요!
            </Typography>
          </Box>
          <Box component="form" noValidate action={`${API_BASE_URL}/api/auth/join`} method="post" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="user-name"
                  name="이름"
                  required
                  fullWidth
                  id="user_name"
                  label="이름"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sx={{marginBottom: '15px',}}>
                <Stack spacing={12}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DesktopDatePicker
                      label="생년월일"
                      inputFormat="yyyy/MM/dd"
                      value={value}
                      onChange={handleChange}
                      required
                      renderInput={(params) => <TextField {...params} />}
                      />
                  </LocalizationProvider>
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="user_id"
                  label="아이디"
                  name="user_id"
                  autoComplete="user-id"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  name="re_password"
                  label="비밀번호 확인"
                  type="password"
                  id="re_password"
                  autoComplete="re-password"
                />
              </Grid>
              <Grid item xs={12}>
                <Box component="form" noValidate action={`${API_BASE_URL}/api/auth/join`} method="post" spacing={8}>
                  <Stack direction={'row'} justifyContent={'space-between'} spacing={2}>
                    <TextField
                      autoComplete="given-name"
                      name="phone"
                      id="phone"
                      label="휴대폰 번호"
                      fullWidth
                      required
                    />
                    <Button 
                      variant="contained" 
                      endIcon={<SendIcon />}
                      fullWidth
                    >
                      인증하기
                    </Button>
                    </Stack>
                </Box>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              완료
            </Button>
            <Grid container justifyContent="flex-start">
              <Grid item>
                <Typography variant='body2' sx={{display: 'inline'}}>이미 계정이 있으신가요? </Typography>
                <Link href="/auth/login" variant="body2">
                  로그인
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}