"use client";
import Link from "next/link";
import React from "react";
import GoogleSigninButton from "../GoogleSigninButton";
import SigninWithPassword from "../SigninWithPassword";
import SignupWithSecret from "@/components/Auth/SignupWithSecret";

export default function Signup({ secretKey }: { secretKey: string }) {
  return (
    <>
      <div>
        <SignupWithSecret secretKey={secretKey} />
      </div>
      <div className="mt-6 text-center">
        <p>
          Don’t have any account?{" "}
          <Link href="/auth/signup" className="text-primary">
            Sign Up
          </Link>
        </p>
      </div>
    </>
  );
}
