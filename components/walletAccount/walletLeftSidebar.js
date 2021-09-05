import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
import { getEllipsisTxt, agoTxt, toEth } from "../../web3/utils";
import { Tab } from "@headlessui/react";

const WalletLeftSidebar = ({ props }) => {
  console.log(props);

  return (
    <div>
      <div className="dark:bg-gray-900 rounded-lg p-4 w-full mb-6 shadow-3xl">
        <h3 className="text-lg font-bold mb-2">Account Balance</h3>
        <h3 className="text-3xl font-bold my-4">1.043,54 $</h3>
        <div></div>
        <div className="flex flex-row justify-between items-center mb-2 w-full">
          <h3 className="text-sm font-bold">ETH</h3>
          <h3 className="text-sm font-bold">0.205</h3>
          <h3 className="text-sm bg-green-400/20 border-2 border-green-200/40 p-1 rounded-lg">
            493,54 $
          </h3>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h3 className="text-sm font-bold">Token</h3>
          <h3 className="text-sm font-bold">23</h3>
          <h3 className="text-sm bg-green-400/20 border-2 border-green-200/40 p-1 rounded-lg">
            534,23 $
          </h3>
        </div>
      </div>

      <div className="dark:bg-gray-900 rounded-lg p-4 w-full mb-6 shadow-3xl">
        <h3 className="text-lg font-bold mb-6">Token ERC20</h3>
        <h3 className="text-sm font-bold">Tokens total:</h3>
        <h3 className="text-sm font-bold">Token</h3>
      </div>

      <div className="dark:bg-gray-900 rounded-lg p-4 w-full mb-6 shadow-3xl">
        <h3 className="text-lg font-bold mb-6">My NFTs</h3>
        <h3 className="text-sm font-bold">NFTs total:</h3>
        <h3 className="text-sm font-bold">Token</h3>
      </div>

      <div className="dark:bg-gray-900 rounded-lg p-4 w-full mb-6 shadow-3xl">
        <h3 className="text-lg font-bold mb-2">Transactions</h3>
        <h3 className="text-3xl font-bold">146</h3>
      </div>
    </div>
  );
};

export default WalletLeftSidebar;
