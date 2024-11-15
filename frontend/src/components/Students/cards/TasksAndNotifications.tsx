import React from "react";

const TasksAndNotifications = async () => {
  return (
    <div className="col-span-1 transform rounded-lg bg-white p-6 shadow-lg hover:shadow-2xl dark:bg-gray-800 md:col-span-2">
      <div className="mb-4 flex items-center">
        {/* Icon for Notifications */}
        <svg
          className="mr-3 h-8 w-8 text-blue-500 dark:text-blue-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C7.03 2 3 6.03 3 11v4l-1 2v1h18v-1l-1-2v-4c0-4.97-4.03-9-9-9zm0 2c3.86 0 7 3.14 7 7v4H5v-4c0-3.86 3.14-7 7-7zm0 16c1.1 0 2 .9 2 2H10c0-1.1.9-2 2-2z" />
        </svg>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Recent Tasks & Notifications
        </h2>
      </div>

      {/* Task List */}
      <ul className="space-y-3 text-gray-700 dark:text-gray-300">
        <li className="flex items-center rounded-md bg-gray-50 p-3 shadow-sm transition-colors duration-200 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
          <svg
            className="mr-3 h-5 w-5 text-green-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM10 17H7v-2h3v2zm4-4H7v-2h7v2zm3-4H7V7h10v2z" />
          </svg>
          <span className="font-medium">Complete project documentation</span>
        </li>
        <li className="flex items-center rounded-md bg-gray-50 p-3 shadow-sm transition-colors duration-200 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
          <svg
            className="mr-3 h-5 w-5 text-blue-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M13 3v4h-2V3H8l4-4 4 4h-3zm3 9H4v6h6v-2H6v-4h10v1.93c.58-.18 1.21-.25 1.83-.25.66 0 1.3.07 1.92.2L22 15v-3c0-1.1-.9-2-2-2z" />
          </svg>
          <span className="font-medium">Attend weekly team meeting</span>
        </li>
        <li className="flex items-center rounded-md bg-gray-50 p-3 shadow-sm transition-colors duration-200 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
          <svg
            className="mr-3 h-5 w-5 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 3H3c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 18H4V6h16v15z" />
          </svg>
          <span className="font-medium">Submit monthly report</span>
        </li>
      </ul>

      {/* See All Button */}
      <div className="mt-6">
        <button className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition-colors duration-200 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400">
          See All Tasks
        </button>
      </div>
    </div>
  );
};

export default TasksAndNotifications;
