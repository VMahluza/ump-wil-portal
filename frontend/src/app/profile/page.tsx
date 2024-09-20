"use client"
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import ProfileBox from "@/components/ProfileBox";
import { useEffect, useState } from 'react';
import { getLoggedInUser } from "@/app/actions";
import User from "@/types/user";

const Profile = () => {

  const [error, setError] = useState(null);

  return (
    <DefaultLayout >
      <div className="mx-auto w-full max-w-[970px]">
        <Breadcrumb  pageName="Profile" />
        <ProfileBox />
      </div>
    </DefaultLayout>
  );
};

export default Profile;
