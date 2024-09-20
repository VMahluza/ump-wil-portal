import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import JobPostsTable from "@/components/Tables/JobPostsTable";

export const metadata: Metadata = {
  title: "Applications",
  description: "This is Next.js Tables page for NextAdmin Dashboard Kit",
};

const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Applications" />

      <div className="flex flex-col gap-10">
        <JobPostsTable />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
