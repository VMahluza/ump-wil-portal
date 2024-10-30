import JobPost from "@/types/jobpost";
import React from "react";

const JobPostDetails: React.FC<{ jobPost: JobPost }> = ({ jobPost }) => {
  return (
    <div className="max-w-full p-4">
      {/* Job Name */}
      <h2 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
        {jobPost.name}
      </h2>

      {/* Job Description */}
      <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
        {jobPost.descripton}
      </p>

      {/* Closing Date */}
      <span className="text-sm text-gray-500 dark:text-gray-400">
        Closing Date:
      </span>
      <span className="text-sm font-semibold text-primary">
        {new Date(jobPost.closing_date).toLocaleDateString()}
      </span>
    </div>
  );
};

export default JobPostDetails;
