import React from "react";

const StudentProfileCard = async () => {
  return (
    <div className="rounded-lg bg-white p-6 shadow-lg hover:shadow-2xl dark:bg-gray-800">
      <div className="mb-4 flex items-center space-x-4">
        {/* Profile Icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-600">
          <span className="text-2xl font-semibold text-blue-600 dark:text-white">
            JD
          </span>
        </div>

        {/* Heading */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            Student Profile
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Work Integrated Learning
          </p>
        </div>
      </div>

      {/* Profile Details */}
      <div className="space-y-4 text-gray-800 dark:text-gray-200">
        <div className="flex items-center">
          {/* Icon for Name */}
          <svg
            className="mr-3 h-6 w-6 text-blue-500 dark:text-blue-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v1h20v-1c0-3.33-6.67-5-10-5z" />
          </svg>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Name
            </span>
            <span className="text-lg font-medium">John Doe</span>
          </div>
        </div>

        <div className="flex items-center">
          {/* Icon for Program */}
          <svg
            className="mr-3 h-6 w-6 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8zm0 18c-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm0-10c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
          </svg>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Program
            </span>
            <span className="text-lg font-medium">Information Technology</span>
          </div>
        </div>

        <div className="flex items-center">
          {/* Icon for Year */}
          <svg
            className="mr-3 h-6 w-6 text-yellow-500 dark:text-yellow-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17 4h-3V2H10v2H7C5.9 4 5 4.9 5 6v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H7V8h10v12z" />
          </svg>
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Year
            </span>
            <span className="text-lg font-medium">2024</span>
          </div>
        </div>
      </div>

      {/* View More Button */}
      <div className="mt-6">
        <button className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400">
          View Details
        </button>
      </div>
    </div>
  );
};

export default StudentProfileCard;
