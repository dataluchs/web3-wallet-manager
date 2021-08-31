import Head from "next/head";
import OnlyWithAuthLayout from "../components/layout/onlyWithAuthLayout";
import WalletAccountList from "../components/walletlist";

export default function Home() {
  return (
    <OnlyWithAuthLayout>
      <div>
        <Head>
          <title>Wallytics. Your Personal Wallet Analyzer.</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <WalletAccountList pageTitle={"Dashboard"} />

        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0"></div>
          </div>
        </main>
      </div>
    </OnlyWithAuthLayout>
  );
}
