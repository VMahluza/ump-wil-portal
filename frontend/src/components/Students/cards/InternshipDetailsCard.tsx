import React from "react";

const InternshipDetailsCard = async () => {
  return (
    <div className="transform rounded-lg bg-white p-6 shadow-lg hover:shadow-2xl dark:bg-gray-800">
      <div className="mb-4 flex items-center">
        {/* Internship Icon */}
        <svg
          className="mr-3 h-8 w-8 text-blue-500 dark:text-blue-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 1.61.5 3.1 1.35 4.35L4.22 16.5a.998.998 0 00.15 1.36.993.993 0 001.36-.15l2.22-2.22c.84.55 1.82.91 2.85 1.06v2.09h2v-2.09c1.03-.15 2.01-.51 2.85-1.06l2.22 2.22c.19.19.44.29.71.29s.52-.1.71-.29a.993.993 0 00.15-1.36l-2.13-2.13C18.5 12.1 19 10.61 19 9c0-3.87-3.13-7-7-7zm-1 9H9v-2h2V7h2v2h2v2h-2v2h-2v-2z" />
        </svg>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Internship Details
        </h2>
      </div>

      {/* Internship Information */}
      <div className="space-y-3 text-gray-700 dark:text-gray-300">
        <div className="flex items-center">
          <svg
            className="mr-2 h-5 w-5 text-blue-400 dark:text-blue-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </svg>
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Company
            </span>
            <p className="font-medium">InternshipSuccess</p>
          </div>
        </div>

        <div className="flex items-center">
          <svg
            className="mr-2 h-5 w-5 text-green-400 dark:text-green-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v1h20v-1c0-3.33-6.67-5-10-5z" />
          </svg>
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Role
            </span>
            <p className="font-medium">Software Engineer Intern</p>
          </div>
        </div>

        <div className="flex items-center">
          <svg
            className="mr-2 h-5 w-5 text-yellow-400 dark:text-yellow-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 7V3l-7 7h4v7h6v-7h4z" />
          </svg>
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Duration
            </span>
            <p className="font-medium">6 months</p>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-6">
        <button className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400">
          View Internship Details
        </button>
      </div>
    </div>
  );
};

export default InternshipDetailsCard;
