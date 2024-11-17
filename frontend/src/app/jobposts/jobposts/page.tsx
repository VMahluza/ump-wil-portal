import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import JobPostsTable2 from "@/components/Tables/JobPostsTable2";
import { GetJobPosts } from "@/lib/data/actions";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "Applications",
  description: "",
};

const TablesPage = async () => {
  return (
    <>
      <Breadcrumb pageName="Job Posts" />
      <div className="flex flex-col gap-10">
        <Suspense fallback={<div>Loading job posts...</div>}>
          <JobPostsTable2 />
        </Suspense>
      </div>
    </>
  );
};

export default TablesPage;
