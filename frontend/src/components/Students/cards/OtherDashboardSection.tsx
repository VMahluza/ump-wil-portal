import React from "react";

const OtherDashboardSection = async () => {
  return (
    <div className="col-span-1 transform rounded-lg bg-white p-6 shadow-lg hover:shadow-2xl dark:bg-gray-800 lg:col-span-3">
      <div className="mb-4 flex items-center">
        <svg
          className="mr-3 h-8 w-8 text-indigo-500 dark:text-indigo-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7v15h20V7L12 2zM6 10h12v1H6v-1zm0 3h10v1H6v-1zm0 3h8v1H6v-1z" />
        </svg>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Learning Resources
        </h2>
      </div>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        Access resources and training materials provided by your host
        organization.
      </p>

      <ul className="space-y-3 text-gray-700 dark:text-gray-300">
        <li className="flex items-center rounded-md bg-gray-50 p-3 shadow-sm transition-colors duration-200 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
          <svg
            className="mr-3 h-5 w-5 text-blue-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7v15h20V7L12 2zM6 10h12v1H6v-1zm0 3h10v1H6v-1zm0 3h8v1H6v-1z" />
          </svg>
          <span className="font-medium">Technical Documentation</span>
        </li>
        <li className="flex items-center rounded-md bg-gray-50 p-3 shadow-sm transition-colors duration-200 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
          <svg
            className="mr-3 h-5 w-5 text-green-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7v15h20V7L12 2zM6 10h12v1H6v-1zm0 3h10v1H6v-1zm0 3h8v1H6v-1z" />
          </svg>
          <span className="font-medium">Project Guidelines</span>
        </li>
        <li className="flex items-center rounded-md bg-gray-50 p-3 shadow-sm transition-colors duration-200 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
          <svg
            className="mr-3 h-5 w-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7v15h20V7L12 2zM6 10h12v1H6v-1zm0 3h10v1H6v-1zm0 3h8v1H6v-1z" />
          </svg>
          <span className="font-medium">Training Videos</span>
        </li>
      </ul>

      <div className="mt-6">
        <button className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white transition-colors duration-200 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400">
          View All Resources
        </button>
      </div>
    </div>
  );
};

export default OtherDashboardSection;
