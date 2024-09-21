'use client'
import { useState, useEffect } from "react";
import JobPost from "@/types/jobpost";
import { GetJobPost } from "@/app/actions";
import JobPostDetails from "@/components/JobPosts/JobPostDetails"
import JobPostsModalFormUpdate from "@/components/Modals/JobPostsModalFormUpdate";

type JobPostApplicationTableProps = {
  jobPostId : number
};

const JobPostApplicationTable = ({jobPostId} : JobPostApplicationTableProps) => {
  const [jobPost, setJobPost] = useState<JobPost>({} as JobPost);
  const [isLoading, setLoading] = useState(false)
  useEffect(() => {
    const fetchJobPost = async () => {
      const data = await GetJobPost(jobPostId);
        if (!data.error) {
          setJobPost(data);
        }
        setLoading(false);
    };
    fetchJobPost();
  }, [])

  return (<>
    <div className="flex flex-col lg:flex-row gap-4">
      {/* Side for Table (wider on larger screens) */}
      <div className="lg:w-1/3 w-full rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
        <div className="max-w-full overflow-x-auto p-4">
          <div className="flex justify-between items-center mb-4">
            {/* Create a New Application Request Button */}
            {/* Button to trigger the modal */}
            
            {/* Additional Controls */}
            <div>
              {/* Search Box */}
              <JobPostDetails jobPost={jobPost || {}} />
              <JobPostsModalFormUpdate jobPost={jobPost || {}} handleSubmitOnJobPostModalUpdate={()=>{}}/>
            </div>
          </div>
          {/* Your table content here */}
        </div>
      </div>
  
      {/* Side for JobPost Information (narrower on larger screens) */}
      <div className="flex-1 rounded-[10px] border border-stroke bg-white p-4 shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card sm:p-7.5">
        <div className="max-w-full overflow-x-auto p-4">
          <div className="flex justify-between items-center mb-4">
            {/* Create a New Application Request Button */}
            {/* Button to trigger the modal */}
            
            {/* Additional Controls */}
            <div className="flex gap-3">
              {/* Search Box */}
              <div className="relative">
                <input
                  type="text"
                  className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Search..."
                />
              </div>
  
              {/* Export Dropdown */}
              <div className="relative">
                <button className="bg-primary px-4 py-2 text-white rounded-md hover:bg-opacity-90 transition-all">
                  Export Options
                </button>
                {/* Dropdown can be added here if needed */}
              </div>
            </div>
          </div>
          {/* JobPost Information content */}
        </div>
      </div>
    </div>
  </>
  
  );
};
export default JobPostApplicationTable;