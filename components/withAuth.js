import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!loading && !user) {
        router.push("/auth");
      }
    }, [user, loading]);

    return user ? <Component {...props} /> : <p>Loading...</p>;
  };
}
