import Header from "./Header";
import {Container, Divider} from '@mui/material';

export default function Layout({ children }) {
  return (
    <>
    <Container fixed maxWidth="md">
      <Header />
      <Divider></Divider>
      <div>{children}</div>
      {/* <Footer /> */}
    </Container>
    </>
  )
}