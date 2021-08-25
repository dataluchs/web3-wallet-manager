import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import LoadingScreen from "./loadingScreen";

function Auth() {
  const [loading, setLoading] = useState(false);
  const Router = useRouter();
  const { isAuthenticated } = useMoralis();

  useEffect(() => {
    if (isAuthenticated) {
      setLoading(false);
    }

    if (!isAuthenticated) {
      setLoading(true);
    }

    if (!isAuthenticated && !loading) {
      Router.push("/auth");
    }
  }, [isAuthenticated]);

  return loading ? <LoadingScreen /> : null;
}

export default Auth;
