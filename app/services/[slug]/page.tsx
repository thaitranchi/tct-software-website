import { useRouter } from "next/router";

export default function ServicePage() {
  const router = useRouter();
  const { slug } = router.query;

  return <h1>Service: {slug}</h1>;
}
