import { useMoralis } from "react-moralis";
import InfoCard from "../../components/card/infoCard";
import { useEffect, useState } from "react";
import { getEllipsisTxt, agoTxt, toEth } from "../../web3/utils";
import { Tab } from "@headlessui/react";

const WalletTabs = ({ props }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  console.log(props);

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
        ></Tab.Panel>
        <Tab.Panel
          style={{ minHeight: 700 }}
          className={classNames(
            "bg-gray-900 rounded-xl p-3 shadow-3xl",
            "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-green-200 ring-green-200 ring-opacity-60"
          )}
        >
          22
        </Tab.Panel>
        <Tab.Panel
          style={{ minHeight: 700 }}
          className={classNames(
            "bg-gray-900 rounded-xl p-3 shadow-3xl",
            "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-green-200 ring-green-200 ring-opacity-60"
          )}
        >
          33
        </Tab.Panel>
        <Tab.Panel
          style={{ minHeight: 700 }}
          className={classNames(
            "bg-gray-900 rounded-xl p-3 shadow-3xl",
            "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-green-200 ring-green-200 ring-opacity-60"
          )}
        >
          44
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

export default WalletTabs;
