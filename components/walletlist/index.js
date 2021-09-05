import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import { useState, useRef, Fragment, useCallback, useEffect } from "react";
import { Dialog, Transition, RadioGroup } from "@headlessui/react";
import Link from "next/link";
import WalletAddress from "../form/walletAddress";
import Image from "next/image";

import plgSvg from "../../public/svgs/matic-logo.svg";
import ethSvg from "../../public/svgs/ethereum-logo.svg";
import bnbSvg from "../../public/svgs/bnb-logo.svg";

const plans = [
  {
    name: "Ethereum",
    symbol: "ETH",
    icon: { ethSvg },
  },
  {
    name: "Binance Smart Chain",
    symbol: "BSC",
    icon: { bnbSvg },
  },
  {
    name: "Polygon",
    symbol: "PLG",
    icon: { plgSvg },
  },
];

const WalletAccountList = ({ pageTitle, walletId }) => {
  const [open, setOpen] = useState(false);
  const { user } = useMoralis();
  const [walletList, setWalletList] = useState();
  const [selected, setSelected] = useState();
  const [showSelection, setShowSelection] = useState(true);
  let completeButtonRef = useRef(null);

  // cloud function to get accounts by user
  const { data } = useMoralisCloudFunction(
    "getAllWalletAccountsByUser",
    user?.id
  );

  useEffect(() => {
    const fetchData = async () => {
      const res = await data;
      setWalletList(res);
    };
    fetchData();
  }, []);

  function CheckIcon(props) {
    return (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
        <path
          d="M7 13l3 3 7-7"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // handle continue button in modal with state
  const handleContinue = async () => {
    console.log(selected);
    setShowSelection(false);
  };

  return (
    <header className="dark:border-gray-600 dark:text-white border-b-2 shadow">
      <div className="flex items-center max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div
          className="pr-10 mr-10 border-r-2 dark:border-gray-600"
          style={{ minWidth: 250 }}
        >
          <h1 className="text-3xl font-bold">{pageTitle}</h1>
        </div>
        <div>
          {/* add a new wallet to account */}
          <div className="flex items-center">
            <button
              className="flex items-center justify-center p-2 m-2 w-12 h-12 dark:bg-gray-900 dark:hover:bg-gray-700 dark:border-gray-700 border-2 rounded-xl text-xl"
              onClick={() => setOpen(true)}
            >
              +
            </button>
            {/* List all existing wallet accounts for user */}
            {!walletList ? (
              <h1>loading ...</h1>
            ) : (
              <div className="flex items-center justify-center">
                {data.map(i => (
                  <Link href={`/walletId/${i.id}`} key={i.id}>
                    {/* 
                    ${
                        checked
                          ? "text-white"
                          : "dark:text-white text-gray-900"
                      } */}
                    <div
                      className={`cursor-pointer flex items-center active:shadow-4xl ${
                        i.id === walletId
                          ? `border-green-200 shadow-4xl rotate-45`
                          : null
                      } active:rotate-45 active:border-green-200 hover:shadow-4xl justify-center relative transform hover:rotate-45 hover:border-green-200 duration-500 p-2 m-2 w-12 h-12 dark:bg-gray-900 dark:hover:bg-gray-700 border-4 rounded-full text-sm`}
                    >
                      <Image
                        src={
                          i.attributes.chain === "ETH"
                            ? ethSvg
                            : plgSvg && i.attributes.chain === "PLG"
                            ? plgSvg
                            : plgSvg && i.attributes.chain === "BSC"
                            ? bnbSvg
                            : plgSvg
                        }
                        layout="fill"
                        objectFit="cover"
                      />
                      {i.attributes.chain}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* here comes the modal that will open on click */}
          <Transition.Root show={open} as={Fragment}>
            <Dialog
              as="div"
              className="fixed z-10 inset-0 overflow-y-auto"
              initialFocus={completeButtonRef}
              onClose={() => {
                setOpen(false);
                setShowSelection(true);
                setSelected(null);
              }}
            >
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                {/* This element is to trick the browser into centering the modal contents. */}
                <span
                  className="hidden sm:inline-block sm:align-middle sm:h-screen"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <div className="dark:bg-gray-800 bg-white py-10 dark:text-white text-center inline-block align-bottom rounded-lg overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="px-4 pb-4 sm:p-6 sm:pb-4">
                      <div className="">
                        <div className="mt-3 mb-3 text-center sm:mt-0 sm:ml-4">
                          <Dialog.Title
                            as="h3"
                            className="text-2xl mb-6 font-medium leading-10"
                          >
                            {" "}
                            <span className="dark:border-green-300 border-b-4">
                              Add new address
                            </span>
                            <br />
                            Choose your chain 🚀
                          </Dialog.Title>
                          <button
                            className="flex text-green-200 items-center justify-center w-10 h-10 absolute top-8 right-8 dark:bg-gray-900 dark:hover:bg-gray-700 dark:border-gray-700 border-2 rounded-full text-xl"
                            onClick={() => {
                              setOpen(false);
                              setShowSelection(true);
                              setSelected(null);
                            }}
                          >
                            ✕
                          </button>
                          <div className="w-full px-4 ">
                            <div className="w-full max-w-md mx-auto">
                              {showSelection ? (
                                <div>
                                  <RadioGroup
                                    value={selected}
                                    onChange={setSelected}
                                  >
                                    <RadioGroup.Label className="sr-only">
                                      Chain
                                    </RadioGroup.Label>
                                    <div className="space-y-2">
                                      {plans.map(plan => (
                                        <RadioGroup.Option
                                          key={plan.name}
                                          value={plan}
                                          className={({ active, checked }) =>
                                            `${active ? "" : ""}
                  ${
                    checked
                      ? "dark:border-green-200 dark:border-2 bg-sky-900 bg-opacity-75 text-white"
                      : "dark:bg-gray-700 dark:border-2 dark:text-white dark:border-gray-800 bg-white"
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                                          }
                                        >
                                          {({ active, checked }) => (
                                            <>
                                              <div className="flex items-center justify-between w-full">
                                                <div className="flex items-center">
                                                  <div className="text-sm">
                                                    <RadioGroup.Label
                                                      as="p"
                                                      className={`font-medium  ${
                                                        checked
                                                          ? "text-white"
                                                          : "dark:text-white text-gray-900"
                                                      }`}
                                                    >
                                                      {plan.name}{" "}
                                                      <span>
                                                        ({plan.symbol})
                                                      </span>
                                                    </RadioGroup.Label>
                                                    <RadioGroup.Description
                                                      as="span"
                                                      className={`inline ${
                                                        checked
                                                          ? "text-sky-100"
                                                          : "text-gray-500"
                                                      }`}
                                                    ></RadioGroup.Description>
                                                  </div>
                                                </div>
                                                {checked && (
                                                  <div className="flex-shrink-0 text-white">
                                                    <CheckIcon className="w-6 h-6" />
                                                  </div>
                                                )}
                                              </div>
                                            </>
                                          )}
                                        </RadioGroup.Option>
                                      ))}
                                    </div>
                                  </RadioGroup>
                                  <button
                                    className="my-4 py-4 w-full bg-blue-600 rounded-md"
                                    onClick={() => handleContinue()}
                                  >
                                    Continue
                                  </button>
                                </div>
                              ) : (
                                <>
                                  <button
                                    onClick={() => setShowSelection(true)}
                                    className="bg-gray-700 px-4 py-2 mt-4 rounded-lg"
                                  >
                                    ‹ go back to select
                                  </button>
                                  <WalletAddress
                                    chainName={selected.name}
                                    chainSymbol={selected.symbol}
                                    setOpen={setOpen}
                                    updateParent={() => {
                                      // implement button click handling in child here later
                                      console.log(
                                        "add wallet button clicked in child component"
                                      );
                                    }}
                                  />
                                </>
                              )}
                            </div>
                          </div>
                        </div>

                        <button ref={completeButtonRef}></button>
                      </div>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>
        </div>
      </div>
    </header>
  );
};

export default WalletAccountList;
