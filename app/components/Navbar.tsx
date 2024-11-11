"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeButton from "./ThemeButton";
import { ONKO_LOGO_URL } from "../constants";

const Navbar = () => {

  let pathName = usePathname() || '/';

  // <div className="flex items-center grid grid-cols-2">
  // <img className="h-16" src="https://ik.imagekit.io/via4rkmu1/onco-icon-removebg-preview.png?updatedAt=1729679890541"></img>

  const selected = "border-purple-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"
  const notSelected = "border-transparent text-gray-500 h-full dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800"

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex justify-between w-full">
                <div className="flex items-center">
                  <Link href="/">
                    <div className="flex items-center grid grid-cols-[auto_auto] gap-x-2">
                      <img
                        src={ONKO_LOGO_URL}
                        className="h-6 w-auto filter dark:invert"
                      ></img>
                      <h1 className="text-2xl font-medium">
                        Projekt<span className="text-purple-500">Onko</span>
                      </h1>
                    </div>
                  </Link>
                </div>
                <div className="hidden lg:ml lg:flex lg:space-x-8 lg:items-center">
                  <Link 
                    href="/" 
                    prefetch 
                    className={`${
                        pathName === "/"
                          ? selected
                          : notSelected
                      }`}>
                    Domov
                  </Link>
                  <Link 
                    href="/zgodbe-borcev" 
                    prefetch className={`${
                    pathName === "/zgodbe-borcev" 
                      ? selected
                      : notSelected
                      }`}>
                    Tvoja zgodba
                  </Link>
                  <Link 
                    href="/dejavnosti" 
                    prefetch className={`${
                    pathName === "/dejavnosti" 
                      ? selected
                      : notSelected
                      }`}>
                    Dejavnosti
                  </Link>
                  <Link 
                    href="/galerija" 
                    prefetch className={`${
                    pathName === "/galerija" 
                      ? selected
                      : notSelected
                      }`}>
                    Galerija
                  </Link>
                  <Link 
                    href="/sponzorji" 
                    prefetch className={`${
                    pathName === "/sponzorji" 
                      ? selected
                      : notSelected
                      }`}>
                    Sponzorji
                  </Link>
                  <Link 
                    href="/o-projektu-onko" 
                    prefetch className={`${
                    pathName === "/o-projektu-onko" 
                      ? selected
                      : notSelected
                      }`}>
                    O projektu Onko
                  </Link>
                  <ThemeButton/>          
                </div>
              </div>
              <div className="mr-2 flex item-center lg:hidden">
                <ThemeButton/>  
                <DisclosureButton className="inline-flex items-center justify-center my-2 p-2 pt-2 rounded-md text-gray-400 hover:text-gray-500 
                hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500
                dark:hover:bg-gray-800">
                  {open ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg> 
                  ):(
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  )
                  }
                </DisclosureButton>
              </div>
            </div>
          </div>
          <DisclosurePanel className="lg:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                prefetch 
                className={`${pathName == '/' ? "bg-purple-50  border-purple-500 text-purple-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-500 block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white"}`}>
              Domov
              </Link>
              <Link 
                href="/zgodbe-borcev" 
                prefetch 
                className={`${pathName == '/zgodbe-borcev' ? "bg-purple-50  border-purple-500 text-purple-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-500 block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white"}`}>
              Tvoja zgodba
              </Link>
              <Link 
                href="/dejavnosti" 
                prefetch 
                className={`${pathName == '/dejavnosti' ? "bg-purple-50  border-purple-500 text-purple-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-500 block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white"}`}>
              Dejavnosti
              </Link>
              <Link 
                href="/galerija" 
                prefetch 
                className={`${pathName == '/galerija' ? "bg-purple-50  border-purple-500 text-purple-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-500 block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white"}`}>
              Galerija
              </Link>
              <Link 
                href="/sponzorji" 
                prefetch 
                className={`${pathName == '/sponzorji' ? "bg-purple-50  border-purple-500 text-purple-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-500 block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white"}`}>
              Sponzorji
              </Link>
              <Link 
                href="/o-projektu-onko" 
                prefetch 
                className={`${pathName == '/o-projektu-onko' ? "bg-purple-50  border-purple-500 text-purple-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                  : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-500 block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white"}`}>
              O projektu Onko
              </Link>
              
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
