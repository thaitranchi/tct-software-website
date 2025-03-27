import { useParams } from "next/navigation";

export default function ServicePage() {
  const params = useParams();
  const slug = params?.slug ? (Array.isArray(params.slug) ? params.slug[0] : params.slug) : "default-slug";

  return <h1>Service: {slug}</h1>;
}
