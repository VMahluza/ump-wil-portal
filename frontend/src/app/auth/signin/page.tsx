import React from "react";

import WelcomeScreen from "@/components/Auth/WelcomeScreen";
import { Metadata } from "next";
// import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Signin from "@/components/Auth/Signin";

export const metadata: Metadata = {
  title: "Login",
  description: "This is the login page for the UMPWIL portal Application",
};

const Page: React.FC = () => {
  return (
    <>
      <h1 className="mb-4 text-2xl font-bold text-dark dark:text-white sm:text-heading-3">
        Sign In
      </h1>
      <Signin />
    </>
  );
};

export default Page;
