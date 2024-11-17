// import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
// @ts-ignore
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import { Suspense } from "react";
// @ts-ignore
import HostEmployerUserForm from "@/components/FormElements/HostEmployer/HostEmployerUserForm";
import HostEmpLayout from "@/components/FormElements/HostEmployer/HostEmpLayout";
import HostEmployerDetails from "@/app/jobposts/hostemployers/[id]/HostEmployerDetails";

export const metadata: Metadata = {
  title: "Host Employers",
  description: "",
};

const HostEmployersPage = async ({ params }: { params: { id: number } }) => {
  return (
    <>
      <Breadcrumb pageName="Host Employer" />
      <div className="flex flex-col gap-10">
        <HostEmployerDetails
          hostEmployer={{
            id: 1,
            username: "host123",
            first_name: "John",
            last_name: "Doe",
            role: "Host Employer",
            is_superuser: false,
            email: "john.doe@example.com",
          }}
          companies={[
            {
              id: 1,
              name: "Tech Solutions",
              description: "IT",
            },
            {
              id: 2,
              name: "AgriPro",
              description: "Agriculture",
            },
            {
              id: 3,
              name: "HealthFirst",
              description: "Healthcare",
            },
          ]}
        />
      </div>
    </>
  );
};

export default HostEmployersPage;
