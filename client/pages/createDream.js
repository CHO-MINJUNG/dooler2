import MainEditor from "../components/editor/MainEditor";
import axios from 'axios';

export const API_BASE_URL = process.env.NEXT_PUBLIC_REACT_APP_API_ROOT;

export default function Index() {
  return <MainEditor/>;
}

// export async function getServerSideProps(){
//   const response = await (await axios.get(`${API_BASE_URL}/api/office_info/create`)).data;
//   console.log(response)
//   // axios({
// 	// 	method: 'get',
// 	// 	url: `${API_BASE_URL}/api/office_info/create`
// 	// })
// 	// .then((response) => {
// 	// 	if (response.data.message){
// 	// 		// TODO: 왜 alert가 두 번 나오지?
// 	// 		console.log(response.data.message);
// 	// 		router.push('/auth/login').then(r => {
// 	// 		alert(response.data.message);
// 	// 			console.log(r)
// 	// 		});
// 	// 	}
// 	// })

//   return {
//     props: {
//       response
//     }
//   }
// }