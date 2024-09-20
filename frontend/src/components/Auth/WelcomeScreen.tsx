"use client"
import React from "react"
import Image from "next/image";
import Link from "next/link";

const WelcomeScreen : React.FC = () => {
    return (
        <div className="hidden w-full p-7.5 xl:block xl:w-1/2">
        <div className="custom-gradient-1 overflow-hidden rounded-2xl px-12.5 pt-12.5 dark:!bg-dark-2 dark:bg-none">
          <Link className="mb-10 inline-block" href="/">
            <Image
              className="hidden dark:block"
              src={"/images/logo/logo.svg"}
              alt="Logo"
              width={176}
              height={32}
            />
            <Image
              className="dark:hidden"
              src={"/images/logo/logo-dark.svg"}
              alt="Logo"
              width={176}
              height={32}
            />
          </Link>
          <p className="mb-3 text-xl font-medium text-dark dark:text-white">
            Sign in to your account
          </p>

          <h1 className="mb-4 text-2xl font-bold text-dark dark:text-white sm:text-heading-3">
            Welcome Back!
          </h1>

          <p className="w-full max-w-[375px] font-medium text-dark-4 dark:text-dark-6">
            Please sign in to your account by completing the necessary
            fields below
          </p>
          <div className="mt-31">  
          </div>
      </div>
      </div>
    )
}

export default WelcomeScreen;