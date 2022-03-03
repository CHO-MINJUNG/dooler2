import MainContentSingle from "../../components/detail/MainContentSingle";
import { useRouter } from "next/router";

export default function Detail() {
  const router = useRouter();
  const query = router.query;

  return <MainContentSingle query={query}/>;
}