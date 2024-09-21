"use server"
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import JobPostApplicationTable from "@/components/Tables/JobPostApplications";
export default async function Page({ params }: { params: { jobPostId: number } }) {
    return (<>  
        <DefaultLayout>
            <Breadcrumb pageName="Applications" />
            <div className="flex flex-col gap-10">
                <JobPostApplicationTable jobPostId={params.jobPostId}/>
            </div>
        </DefaultLayout>
    </>)
}