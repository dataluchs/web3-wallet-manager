import Head from "next/head";
import Layout from "../../components/layout/layout";
import React from "react";
import Link from "next/link";
import { useMoralis } from "react-moralis";
import { toast } from "react-toastify";

export default function Account() {
  const { authenticate, isAuthenticating, isAuthenticated, authError } =
    useMoralis();

  return (
    <Layout>
      <div>
        <Head>
          <title>Authentication</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className="bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md bg-white border-2 rounded-xl border-gray-200">
              <h1 className="font-bold text-center text-3xl mb-12">
                Let's get started, friend.
              </h1>

              <div>
                <button
                  className="w-full bg-green-400 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded disabled:opacity-50"
                  disabled={isAuthenticating}
                  onClick={() =>
                    authenticate({
                      onSuccess: () =>
                        toast.success("Welcome, friend of ethereum 🎉"),
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
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
