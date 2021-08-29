import Head from "next/head";
import OnlyWithAuthLayout from "../components/layout/onlyWithAuthLayout";
import ThemeToggle from "../components/toggle/themeToggle";
import { React } from "react";
export default function Home() {
  return (
    <OnlyWithAuthLayout>
      <div>
        <Head>
          <title>Account</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header className="dark:border-gray-600 dark:text-white border-b-2 shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold">Account</h1>
          </div>
        </header>
        <main>
          <div className="grid md:grid-cols-3 xs:grid-cols-1 gap-4 max-w-7xl mx-auto py-8 sm:px-6 lg:px-8">
            <div className="dark:bg-gray-900 bg-white dark:border-gray-700 p-8 sm:p-8 rounded-xl border-2">
              <h3 className="text-xl font-semibold mb-6">Display Settings</h3>
              <div className="divide-y-2 dark:divide-gray-700 divide-gray-200 divide-solid">
                <div className="py-4 flex w-full justify-between items-center">
                  Dark Mode
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </OnlyWithAuthLayout>
  );
}
