"use client";
import HostEmployerUserForm from "@/components/FormElements/HostEmployer/HostEmployerUserForm";
import { Suspense, useEffect, useState } from "react";
import HostEmployersTable from "@/components/Tables/HostEmployersTable";
import { getAllHostEmployers } from "@/lib/data/actions";
import User from "@/types/user";

const HostEmpLayout = () => {
  // Function to fetch the list of host employers
  const [hostEmployers, setHostEmployers] = useState<User[]>([] as User[]);
  const fetchHostEmployers = async () => {
    try {
      const data = await getAllHostEmployers();
      setHostEmployers(data);
    } catch (error) {
      console.error("Failed to fetch host employers:", error);
    }
  };

  // Fetch host employers on component mount
  useEffect(() => {
    fetchHostEmployers();
  }, []);

  return (
    <>
      <div className="grid grid-cols-9 grid-rows-5 gap-4">
        <HostEmployerUserForm refreshHostEmployers={fetchHostEmployers} />
        <div className="col-span-7 col-start-3 row-span-5 rounded-[10px] bg-white  p-4 shadow-1 dark:bg-gray-dark">
          <Suspense fallback={<div>Loading host employers...</div>}>
            <HostEmployersTable hostEmployers={hostEmployers} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default HostEmpLayout;
