import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import JobPostsTable2 from "@/components/Tables/JobPostsTable2";
import getAllInterns, { GetJobPosts } from "@/lib/data/actions";
import { Suspense } from "react";
import StudentAccountsTable from "@/components/Tables/StudentAccountsTable";
export const metadata: Metadata = {
  title: "Intern Accounts",
  description: "",
};

const TablesPage = async () => {
  const studentAccountsDataPromise = await getAllInterns();
  return (
    <>
      <Breadcrumb pageName="Intern Accounts" />
      <div className="flex flex-col gap-10">
        <Suspense fallback={<div>Loading job posts...</div>}>
          <StudentAccountsTable
            studentAccountsData={studentAccountsDataPromise}
          />
        </Suspense>
      </div>
    </>
  );
};

export default TablesPage;
