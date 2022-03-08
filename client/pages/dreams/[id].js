import MainContentSingle from "../../components/detail/MainContentSingle";
import { useRouter } from "next/router";
import axios from 'axios';

export const API_BASE_URL = process.env.NEXT_PUBLIC_REACT_APP_API_ROOT;

export default function Detail({response}) {
  console.log(response)
  return <MainContentSingle response={response}/>;
}

export async function getServerSideProps({query}){
  const response = await (await axios.get(`${API_BASE_URL}/api/${query.id}`)).data;
  return {
    props: {
      response
    }
  }
}
