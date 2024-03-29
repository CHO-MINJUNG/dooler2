import MainContentSingle from "../../components/detail/MainContentSingle";
import { useRouter } from "next/router";
import axios from 'axios';

export const API_BASE_URL = process.env.NEXT_PUBLIC_REACT_APP_API_ROOT;

export default function Detail({response, id}) {
  return <MainContentSingle response={response} id={id}/>;
}

export async function getServerSideProps({query}){
  const response = await (await axios.get(`${API_BASE_URL}/api/${query.id}`)).data;
  const id = query.id;
  return {
    props: {
      response, id
    }
  }
}
