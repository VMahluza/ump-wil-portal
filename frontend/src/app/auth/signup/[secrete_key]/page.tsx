import React from "react";

import WelcomeScreen from "@/components/Auth/WelcomeScreen";
import { Metadata } from "next";
// import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Signin from "@/components/Auth/Signin";
import Signup from "@/components/Auth/Signup";

export const metadata: Metadata = {
  title: "Login",
  description: "This is the login page for the UMPWIL portal Application",
};

const Page = ({ params }: { params: { secrete_key: string } }) => {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-white dark:bg-dark">
        <div className="w-full xl:w-1/2">
          <div className="w-full p-4 sm:p-12.5 xl:p-15">
            <h1 className="mb-4 text-2xl font-bold text-dark dark:text-white sm:text-heading-3">
              Finish Up your Account
            </h1>
            <Signup secretKey={params.secrete_key} />
          </div>
        </div>
        {/* The Welcome Screen Part */}
        <WelcomeScreen />
      </div>
    </>
  );
};

export default Page;
