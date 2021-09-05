import Head from "next/head";
import OnlyWithAuthLayout from "../../components/layout/onlyWithAuthLayout";
import { useRouter } from "next/router";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import WalletAccountList from "../../components/walletlist";
import { useEffect, useState } from "react";
import { getEllipsisTxt, agoTxt, toEth } from "../../web3/utils";
import Moralis from "moralis";
import { Tab } from "@headlessui/react";
import WalletTabs from "../../components/walletAccount/walletTabs";
import WalletLeftSidebar from "../../components/walletAccount/walletLeftSidebar";
export default function WalletAccount(props, walletId, path) {
  const [txUser, setTxUser] = useState([]);
  const [accountBalance, setAccountBalance] = useState();

  const { user } = useMoralis();
  console.log(!user ? null : user);

  const { data, error, isLoading } = useMoralisCloudFunction(
    "getWalletAccountById",
    { walletId: props.props.walletId }
  );

  // get eth transactions of current user
  useEffect(() => {
    async function getTransactions() {
      console.log("transactions");
      const result = await Moralis.Web3.getTransactions();
      setTxUser(result);
    }
    getTransactions();
  }, []);

  // get all erc20 token from user
  useEffect(() => {
    async function getBalance() {
      console.log("balance");
      const result = await Moralis.Web3.getAllERC20();
      console.log(result);
      setAccountBalance(result);
    }
    getBalance();
  }, []);

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
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 ">
            <div className="flex flex-row">
              <div
                className="flex flex-row border-r-2 border-gray-600"
                style={{ minWidth: 250, minHeight: "1000px" }}
              >
                <div className="p-8 pl-0 w-full">
                  <WalletLeftSidebar props={props} />
                </div>
              </div>

              <div className="p-8 pr-0 w-full">
                <WalletTabs props={props} />
              </div>
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
