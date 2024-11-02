import React from "react";
import WelcomeScreen from "@/components/Auth/WelcomeScreen";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

export default function AuthLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex h-screen items-center justify-center bg-white dark:bg-dark">
        <div className="w-full xl:w-1/2">
          <div className="w-full p-4 sm:p-12.5 xl:p-15">{children}</div>
        </div>
        {/* The Welcome Screen Part */}
        <WelcomeScreen />
      </div>
    </>
  );
}
