import { useRouter } from "next/router";
import axios from 'axios';
import MainUpdateEditor from '../../components/editor/updateEditor/MainUpdateEditor'

export const API_BASE_URL = process.env.NEXT_PUBLIC_REACT_APP_API_ROOT;

export default function UpdateDreams({response}) {
  return <MainUpdateEditor response={response}/>;
}

export async function getServerSideProps({query}){
  console.log(query)
  const response = await (await axios.get(`${API_BASE_URL}/api/${query.id}`)).data;
  return {
    props: {
      response
    }
  }
}
