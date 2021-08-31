import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useMoralis } from "react-moralis";
import { toast } from "react-toastify";

export default function WalletAddress({
  chainName,
  chainSymbol,
  setOpen,
  updateParent,
}) {
  const [walletAddress, setWalletAddress] = useState("");
  const [walletName, setWalletName] = useState("");
  const { user, Moralis } = useMoralis();

  useEffect(() => {}, []);

  // create a new wallet account for the user
  // subclass of Moralis.Object
  const WalletAccount = Moralis.Object.extend("WalletAccount", {
    getAddress: function () {
      return this.get("address").toString();
    },
    getChain: function () {
      return this.get("chain").toString();
    },
    getWalletName: function () {
      return this.get("walletName").toString();
    },
  });

  // helper function
  const createNewWalletAccount = async (address, chain, walletName) => {
    const newWalletAccount = new WalletAccount();

    newWalletAccount.set("address", address.toString());
    newWalletAccount.set("chain", chain.toString());
    newWalletAccount.set("walletName", walletName.toString());

    newWalletAccount.set("parent", user);
    const walletAccount = await newWalletAccount.save();
    console.log(walletAccount);

    return walletAccount;
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      createNewWalletAccount(walletAddress, chainSymbol, walletName);
      // implement validation here for address
      toast.success("Wallet added successfully! 🎉");
      setOpen(false);
      // update parent wallet list
      updateParent();
    } catch (error) {
      toast.error(`${error.message}`);
    }
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="mt-10 xs:p-0 mx-auto md:w-full">
        <div className="w-full">
          <div className="">
            <form onSubmit={onSubmit}>
              <label className="dark:text-white font-semibold text-gray-600 pb-1 mb-2 block">
                Enter your {chainName} address
              </label>

              <input
                className="dark:border-gray-400 dark:bg-gray-700 dark:hover:bg-gray-700 border rounded-md px-3 py-4 mt-1 mb-5 text-sm w-full"
                id="walletAddress"
                type="text"
                label="Wallet Address"
                variant="outlined"
                placeholder="Wallet Address"
                name="walletAddress"
                value={walletAddress}
                onChange={event => setWalletAddress(event.currentTarget.value)}
                required
              />

              <label className="dark:text-white font-semibold text-gray-600 pb-1 mb-2 block">
                Name your {chainName} wallet
              </label>

              <input
                className="dark:border-gray-400 dark:bg-gray-700 dark:hover:bg-gray-700 border rounded-md px-3 py-4 mt-1 mb-5 text-sm w-full"
                id="walletName"
                type="text"
                label="Wallet Name"
                variant="outlined"
                placeholder="Wallet Name"
                name="walletName"
                value={walletName}
                onChange={event => setWalletName(event.currentTarget.value)}
                required
              />

              <button
                type="submit"
                className="my-2 py-4 w-full bg-blue-600 rounded-md"
              >
                <span className="inline-block mr-2">
                  Add {chainName} wallet!
                </span>
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
        </div>
      </div>
    </div>
  );
}
