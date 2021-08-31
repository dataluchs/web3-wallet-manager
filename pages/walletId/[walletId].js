import Head from "next/head";
import OnlyWithAuthLayout from "../../components/layout/onlyWithAuthLayout";
import { useRouter } from "next/router";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import WalletAccountList from "../../components/walletlist";

export default function WalletAccount(props, walletId, path) {
  const router = useRouter();
  const { user } = useMoralis();

  const { data, error, isLoading } = useMoralisCloudFunction(
    "getWalletAccountById",
    { walletId: props.props.walletId }
  );

  return (
    <OnlyWithAuthLayout>
      <div>
        <Head>
          <title>web3 wallet analyzer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <WalletAccountList
          pageTitle={data.length === 0 ? null : data[0].attributes.walletName}
          walletId={props.props.walletId}
        />

        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <pre>{JSON.stringify(!data ? null : data, undefined, 2)}</pre>
            </div>
          </div>
        </main>
      </div>
    </OnlyWithAuthLayout>
  );
}

WalletAccount.getInitialProps = async appContext => {
  const walletId = appContext.query.walletId;
  const path = appContext.pathname;

  return {
    props: { walletId, path },
  };
};
