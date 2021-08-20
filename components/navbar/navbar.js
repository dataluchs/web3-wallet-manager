import React, { useState } from "react";
import Link from 'next/link'
import { useMoralis } from "react-moralis";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const { logout, isAuthenticated, user } = useMoralis();


  return (
    <div>
      <nav className="bg-white border-b-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center w-full justify-between">
              <div className="flex-shrink-0">
              <Link href="/">
                  <a>
                    <img
                        className="h-8 w-auto"
                        //src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        src="/images/blockfriends.png"
                        alt="blockfriends"
                        />
                    </a>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  
                  <Link href={"/"}>
                  <a
                    href="#"
                    className="hover:bg-white text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Dashboard
                  </a>
                  </Link>
                  <a
                    href="/account"
                    className="hover:bg-white text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                    My Account
                  </a>

                  <a
                    href="#"
                    className="hover:bg-white text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Projects
                  </a>

                  {/* <Link href={"/auth/login"}>
                  <a
                    href="#"
                    className="hover:bg-blue text-black px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </a>
                  </Link> */}

          
                        
                    {
                        !isAuthenticated ? (
                            <Link href={"/auth/login"}>
                                <a
                                    href="#"
                                    className="bg-purple-300 hover:bg-blue text-black px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Login
                                </a>
                            </Link>
                        ) : (
                            !user ? 
                            
                            <div>
                                <p
                                    className="bg-gray-200 border-2 hover:border-blue-400 text-black px-3 py-2 rounded-md text-sm font-medium"
                                    > loading ..
                                </p>
                            </div> 
                            
                            : 
                            <>
                            

                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="inline-flex justify-center w-full rounded-md border border-purple-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                                    {user.get("username")}
                                    <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
                                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        <Menu.Item>
                                        {({ active }) => (
                                            <a
                                            href="/account"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                            >
                                            Account settings
                                            </a>
                                        )}
                                        </Menu.Item>
                                        
                                        <form method="POST" action="#">
                                        <Menu.Item>
                                            {({ active }) => (
                                            <button
                                                type="submit"
                                                onClick={() => logout()}
                                                className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block w-full text-left px-4 py-2 text-sm'
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
                            



                            {/* <div>
                                <p
                                    className="bg-gray-200 border-2 hover:border-blue-400 text-black px-3 py-2 rounded-md text-sm font-medium"
                                    >{user.get("username")}
                                </p>
                            </div>

                            <button
                                className="hover:bg-blue text-black px-3 py-2 rounded-md text-sm font-medium"
                                onClick={() => logout()}
                            >
                                Logout
                            </button> */}
                            </>
                            
                        )
                    
                    } 
 
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
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Dashboard
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Team
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Calendar
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Reports
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>

      {/* <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
          </div>
        </div>
      </main> */}
    </div>
  );
}

export default Nav;
