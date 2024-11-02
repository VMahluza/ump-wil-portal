"use server";

import ApplicationDetails from "@/components/Applications/ApplicationDetails";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import { Application } from "@/types/applications";
import { GetApplication } from "@/app/actions";
import { Suspense } from "react";

export default async function Page({ params }: { params: { id: number } }) {
  const applicationData = await GetApplication(params.id);

  return (
    <div>
      <Breadcrumb pageName="Application Details" />
      <div className="flex flex-col gap-10 p-6">
        {/* Use Suspense for a fallback while fetching */}
        <Suspense fallback={<div>Loading application details...</div>}>
          <ApplicationDetails application={applicationData} />
        </Suspense>
      </div>
    </div>
  );
}
