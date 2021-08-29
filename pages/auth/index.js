import Head from "next/head";
import Layout from "../../components/layout/layout";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useMoralis } from "react-moralis";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import LoadingScreen from "../../components/auth/loadingScreen";
import AuthContainer from "../../components/auth/authContainer";

export default function Account() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (isAuthenticated) {
      Router.push("/");
    }
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  const { authenticate, isAuthenticating, isAuthenticated, authError } =
    useMoralis();

  const Router = useRouter();

  const backgroundText = `We are on a mission for web3. \n Join us on this exiting journey.`;
  const title = "Let's get started, friend.";

  return (
    <Layout>
      <div>
        <Head>
          <title>Authentication</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <AuthContainer
          backgroundText={backgroundText}
          title={title}
          content={
            <div>
              <button
                className="w-full bg-green-400 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded disabled:opacity-50"
                disabled={isAuthenticating}
                onClick={() =>
                  authenticate({
                    onSuccess: () => {
                      toast.success("Welcome, friend of ethereum 🎉");
                      setLoading(true);
                      setTimeout(() => {
                        setLoading(false);
                        Router.replace("/");
                      }, 2000);
                    },
                    onError: () =>
                      authError &&
                      toast.error(
                        `Authentication has failed. ${authError.message}`
                      ),
                  })
                }
              >
                Authenticate via Metamask
              </button>
              <div className="text-center py-1">
                <em>or</em>
              </div>
              <Link href={"/auth/login"}>
                <button className="w-full bg-purple-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded">
                  Login with Mail
                </button>
              </Link>
              <div className="text-center py-1">
                <em>or</em>
              </div>
              <Link href={"/auth/signup"}>
                <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded">
                  Signup with Mail
                </button>
              </Link>
            </div>
          }
        />
      </div>
    </Layout>
  );
}
