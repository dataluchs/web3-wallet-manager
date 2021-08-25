import Head from "next/head";
import Layout from "../../components/layout/layout";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useMoralis } from "react-moralis";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import LoadingScreen from "../../components/auth/loadingScreen";

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { Moralis, isAuthenticated, login } = useMoralis();
  const Router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      Router.push("/");
    }
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  const onSubmit = async e => {
    e.preventDefault();

    const user = new Moralis.User();
    user.set({
      username: username,
      password: password,
      email: email,
    });

    try {
      await user.signUp();
      login(email, password, {
        onSuccess: () => {
          toast.success("Welcome, nice to have you on board! 🎉");
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            Router.replace("/");
          }, 2000);
        },
      });
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  return (
    <Layout>
      <div>
        <Head>
          <title>Signup</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className="bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
              <h1 className="font-bold text-center text-2xl mb-5">Sign Up</h1>
              <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                <div className="px-5 py-7">
                  <form onSubmit={onSubmit}>
                    <label className="font-semibold text-sm text-gray-600 pb-1 block">
                      Username
                    </label>

                    <input
                      className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                      id="username"
                      type="text"
                      label="Username"
                      variant="outlined"
                      placeholder="Email Address"
                      name="username"
                      value={username}
                      onChange={event => setUsername(event.currentTarget.value)}
                      required
                    />

                    <label className="font-semibold text-sm text-gray-600 pb-1 block">
                      E-mail
                    </label>

                    <input
                      className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                      id="email"
                      type="email"
                      label="Email"
                      variant="outlined"
                      placeholder="Email Address"
                      name="email"
                      value={email}
                      onChange={event => setEmail(event.currentTarget.value)}
                      required
                    />

                    <label className="font-semibold text-sm text-gray-600 pb-1 block">
                      Password
                    </label>

                    <input
                      className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                      required
                      name="password"
                      placeholder="Password"
                      label="Password"
                      type="password"
                      id="password"
                      value={password}
                      onChange={event => setPassword(event.currentTarget.value)}
                    />

                    <button
                      type="submit"
                      className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      <span className="inline-block mr-2">Signup</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-4 h-4 inline-block"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </form>
                </div>

                <div className="py-5">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="text-center sm:text-left whitespace-nowrap">
                      <Link href="/auth/reset-password">
                        <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-4 h-4 inline-block align-text-top"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                            />
                          </svg>
                          <span className="inline-block ml-1">
                            Forgot Password
                          </span>
                        </button>
                      </Link>
                    </div>
                    <div className="text-center sm:text-right whitespace-nowrap">
                      <Link href="/auth/login">
                        <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-4 h-4 inline-block align-text-bottom	"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                            />
                          </svg>

                          <span className="inline-block ml-1">
                            <a>Login</a>
                          </span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-5">
                <div className="">
                  <div className="text-center sm:text-left whitespace-nowrap">
                    <Link href="/auth">
                      <button className="w-full border-2 bg-white transition duration-200 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-4 h-4 inline-block align-text-top"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                          />
                        </svg>
                        <span className="inline-block ml-1">
                          Back to Auth Page
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
