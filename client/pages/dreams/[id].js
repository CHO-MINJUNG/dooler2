import MainContentSingle from "../../components/detail/MainContentSingle";
import { useRouter } from "next/router";

const Detail = () => {
  const router = useRouter();
  const query = router.query;
  console.log(query)
  return <MainContentSingle query={query}/>;
}

export default Detail