import JobPost from "@/types/jobpost";

  const JobPostDetails: React.FC<{ jobPost: JobPost }> = ({ jobPost }) => {
    return (
        <div className="max-w-full p-4">
        
            {/* Job Name */}
            <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
              {jobPost.name}
            </h2>
  
            {/* Job Description */}
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
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
  