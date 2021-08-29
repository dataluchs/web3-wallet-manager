import Head from "next/head";
import OnlyWithAuthLayout from "../components/layout/onlyWithAuthLayout";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { user } = useMoralis();
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
              <h1 className="text-3xl font-bold">Dashboard</h1>
            </div>
            <div>
              <button className="flex items-center justify-center p-2 m-2 w-12 h-12 dark:bg-gray-900 dark:hover:bg-gray-700 dark:border-gray-700 border-2 rounded-xl text-xl">
                +
              </button>
            </div>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
            </div>
          </div>
        </main>
      </div>
    </OnlyWithAuthLayout>
  );
}
