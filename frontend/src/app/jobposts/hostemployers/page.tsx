// import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
// @ts-ignore
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import { Suspense } from "react";
// @ts-ignore
import HostEmployerUserForm from "@/components/FormElements/HostEmployer/HostEmployerUserForm";
import HostEmpLayout from "@/components/FormElements/HostEmployer/HostEmpLayout";

export const metadata: Metadata = {
  title: "Host Employers",
  description: "",
};

const HostEmployersPage = async () => {
  return (
    <>
      <Breadcrumb pageName="Host Employers" />

      <div className="flex flex-col gap-10">
        <HostEmpLayout />
      </div>
    </>
  );
};

export default HostEmployersPage;
