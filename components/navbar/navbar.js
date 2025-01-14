import React, { useState } from "react";
import Link from "next/link";
import { useMoralis } from "react-moralis";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, LogoutIcon } from "@heroicons/react/solid";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const { logout, isAuthenticated, user } = useMoralis();
  const Router = useRouter();
  return (
    <div>
      <nav className="dark:bg-gray-900 bg-white dark:border-gray-600 border-b-2 p-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center w-full justify-between">
              <div className="flex-shrink-0 leading-6">
                <Link href="/">
                  <a className="dark:text-white">
                    {/* <img
                      className="h-8 w-auto"
                      //src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      src="/images/blockfriends.png"
                      alt="blockfriends"
                    /> */}
                    <span className="font-bold italic dark:border-green-300 border-b-4">
                      Wallytics.
                    </span>
                    <br />
                    <span className="text-xs dark:text-gray-400 -mt-4">
                      Cross-chain Wallet Analytics.
                    </span>
                  </a>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {!isAuthenticated ? (
                    <Link href={"/auth"}>
                      <button className="bg-green-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Connect / Login
                      </button>
                    </Link>
                  ) : !user ? (
                    <div>
                      <p className="bg-gray-200 border-2 hover:border-blue-400 text-black px-3 py-2 rounded-md text-sm font-medium">
                        {" "}
                        loading ..
                      </p>
                    </div>
                  ) : (
                    <>
                      <Link href={"/"}>
                        <a
                          href="#"
                          className="dark:text-white dark:hover:bg-gray-700 hover:bg-white text-black px-3 py-2 rounded-md text-sm font-medium"
                        >
                          Dashboard
                        </a>
                      </Link>
                      <Link href={"/"}>
                        <a
                          href="#"
                          className="dark:text-white dark:hover:bg-gray-700 hover:bg-white text-black px-3 py-2 rounded-md text-sm font-medium"
                        >
                          NFTs
                        </a>
                      </Link>
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <div>
                          <Menu.Button className="dark:bg-gray-800 dark:text-white inline-flex justify-center w-full rounded-xl border dark:focus:ring-green-200 dark:border-green-300 dark:focus:ring-offset-gray-600 border-purple-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                            {user.get("username")}
                            <ChevronDownIcon
                              className="-mr-1 ml-2 h-5 w-5"
                              aria-hidden="true"
                            />
                          </Menu.Button>
                        </div>

                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="dark:bg-gray-800 dark:border-gray-600 border-2 dark:text-white origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <Link href={"/account"}>
                                    <a
                                      className={classNames(
                                        active
                                          ? "dark:bg-gray-800 dark:text-white bg-gray-100 text-gray-900"
                                          : "dark:bg-gray-800 dark:text-white text-gray-700",
                                        "block px-4 py-2 text-sm"
                                      )}
                                    >
                                      Account settings
                                    </a>
                                  </Link>
                                )}
                              </Menu.Item>

                              <form>
                                <Menu.Item>
                                  {({ active }) => (
                                    <button
                                      type="submit"
                                      onClick={() => logout()}
                                      onClick={() =>
                                        logout({
                                          onSuccess: () => {
                                            toast.success(
                                              "Successfully signed out. See you soon 😘"
                                            );
                                            Router.replace("/auth");
                                          },
                                        })
                                      }
                                      className={classNames(
                                        active
                                          ? "dark:bg-gray-800 dark:text-white bg-gray-100 text-gray-900"
                                          : "dark:bg-gray-800 dark:text-white text-gray-700",
                                        "block w-full text-left px-4 py-2 text-sm"
                                      )}
                                    >
                                      Sign out
                                    </button>
                                  )}
                                </Menu.Item>
                              </form>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {ref => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {isAuthenticated ? (
                  <a
                    href="/"
                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Dashboard
                  </a>
                ) : (
                  <a
                    href="/"
                    className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Connect / Login
                  </a>
                )}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
