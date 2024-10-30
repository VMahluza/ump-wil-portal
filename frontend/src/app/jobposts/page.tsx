import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import JobPostsTable2 from "@/components/Tables/JobPostsTable2";
import { GetJobPosts } from "@/app/actions";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "Applications",
  description: "",
};

const TablesPage = async () => {
  const jobPostsDataPromise = await GetJobPosts();
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Applications" />
      <div className="flex flex-col gap-10">
        <Suspense fallback={<div>Loading job posts...</div>}>
          <JobPostsTable2 jobPostsData={jobPostsDataPromise} />
        </Suspense>
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
