import { useMoralis } from "react-moralis";
import Moralis from "moralis";
import InfoCard from "../../components/card/infoCard";
import { useEffect, useState } from "react";
import { getEllipsisTxt, agoTxt, toEth, toErc20 } from "../../web3/utils";
import { Tab } from "@headlessui/react";

const WalletTabs = ({ props }) => {
  const [txUser, setTxUser] = useState([]);
  const [accountBalance, setAccountBalance] = useState([]);
  const [nftBalance, setNftBalance] = useState();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

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
      console.log("tokenbalance");
      const result = await Moralis.Web3.getAllERC20();
      setAccountBalance(result);
    }
    getBalance();
  }, []);

  // get all erc20 token from user
  useEffect(() => {
    async function getNftBalance() {
      console.log("nft balance");
      const result = await Moralis.Web3.getNFTs();
      console.log(result);
      setNftBalance(result);
    }
    getNftBalance();
  }, []);

  return (
    <Tab.Group>
      <Tab.List className="flex p-1 space-x-1 bg-gray-900 rounded-xl">
        <Tab
          className={({ selected }) =>
            classNames(
              "min-w w-full py-2.5 text-sm leading-5 font-medium text-green-200 rounded-lg",
              "focus:outline-none ring-green-200 ring-opacity-60",
              selected
                ? "dark:bg-gray-800 border-2 border-green-200 dark:text-white bg-white shadow"
                : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
            )
          }
        >
          Analytics
        </Tab>
        <Tab
          className={({ selected }) =>
            classNames(
              "min-w w-full py-2.5 text-sm leading-5 font-medium text-green-200 rounded-lg",
              "focus:outline-none ring-green-200 ring-opacity-60",
              selected
                ? "dark:bg-gray-800 border-2 border-green-200 dark:text-white bg-white shadow"
                : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
            )
          }
        >
          Tokens
        </Tab>
        <Tab
          className={({ selected }) =>
            classNames(
              "min-w w-full py-2.5 text-sm leading-5 font-medium text-green-200 rounded-lg",
              "focus:outline-none ring-green-200 ring-opacity-60",
              selected
                ? "dark:bg-gray-800 border-2 border-green-200 dark:text-white bg-white shadow"
                : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
            )
          }
        >
          Transactions
        </Tab>
        <Tab
          className={({ selected }) =>
            classNames(
              "min-w w-full py-2.5 text-sm leading-5 font-medium text-green-200 rounded-lg",
              "focus:outline-none ring-green-200 ring-opacity-60",
              selected
                ? "dark:bg-gray-800 border-2 border-green-200 dark:text-white bg-white shadow"
                : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
            )
          }
        >
          NFTs
        </Tab>
      </Tab.List>
      <Tab.Panels className="mt-2">
        <Tab.Panel
          style={{ minHeight: 700 }}
          className={classNames(
            "bg-gray-900 rounded-xl p-3 shadow-3xl",
            "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-green-200 ring-green-200 ring-opacity-60"
          )}
        >
          put analytics here.
        </Tab.Panel>
        <Tab.Panel
          style={{ minHeight: 700 }}
          className={classNames(
            "bg-gray-900 rounded-xl p-3 shadow-3xl",
            "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-green-200 ring-green-200 ring-opacity-60"
          )}
        >
          <div>
            <div>
              {accountBalance.length === 0 ? (
                <p>Loading ...</p>
              ) : (
                accountBalance.map(i => (
                  <div className="flex border-gray-800 p-2 border-b-2">
                    <div className="" style={{ minWidth: 300 }}>
                      {i.name}
                    </div>
                    <div className="">{toErc20(i.balance, i.symbol)}</div>
                  </div>
                ))
              )}
            </div>
          </div>
        </Tab.Panel>
        <Tab.Panel
          style={{ minHeight: 700 }}
          className={classNames(
            "bg-gray-900 rounded-xl p-3 shadow-3xl",
            "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-green-200 ring-green-200 ring-opacity-60"
          )}
        >
          <div>
            <pre>{JSON.stringify(txUser, undefined, 4)}</pre>
          </div>
        </Tab.Panel>
        <Tab.Panel
          style={{ minHeight: 700 }}
          className={classNames(
            "bg-gray-900 rounded-xl p-3 shadow-3xl",
            "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-green-200 ring-green-200 ring-opacity-60"
          )}
        >
          <div className="flex float-right mt-2">
            <button className="mx-2 py-2 px-6 bg-green-400 hover:bg-blue-500 transition-all text-sm rounded-lg">
              Creators Studio
            </button>
            <button className="mx-2 py-2 px-6 bg-green-400 hover:bg-blue-500 transition-all text-sm rounded-lg">
              NFT Marketplace
            </button>
          </div>
          {!nftBalance ? (
            <p>loading ...</p>
          ) : nftBalance.length === 0 ? (
            <p>This wallet owns no NFT's yet.</p>
          ) : (
            <pre>{JSON.stringify(nftBalance, undefined, 4)}</pre>
          )}
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default WalletTabs;
