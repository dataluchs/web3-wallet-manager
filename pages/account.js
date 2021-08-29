import Head from "next/head";
import OnlyWithAuthLayout from "../components/layout/onlyWithAuthLayout";
import ThemeToggle from "../components/toggle/themeToggle";
import { useMoralis } from "react-moralis";
import { useEffect } from "react";

export default function Home() {
  const { user } = useMoralis();
  useEffect(() => {}, []);

  return (
    <OnlyWithAuthLayout>
      <div>
        <Head>
          <title>web3 wallet analyzer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="dark:border-gray-600 dark:text-white border-b-2 shadow">
          <div className="flex items-center max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="pr-10 mr-10 border-r-2 dark:border-gray-600">
              <h1 className="text-3xl font-bold">Account</h1>
            </div>
            <div>
              <ThemeToggle />
            </div>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0"></div>
          </div>
        </main>
      </div>
    </OnlyWithAuthLayout>
  );
}
