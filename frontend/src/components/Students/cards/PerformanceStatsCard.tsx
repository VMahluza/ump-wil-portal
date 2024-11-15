import React from "react";

const PerformanceStatsCard = async () => {
  return (
    <div className="transform rounded-lg bg-white p-6 shadow-lg hover:shadow-2xl dark:bg-gray-800">
      <div className="mb-4 flex items-center">
        {/* Icon for Stats */}
        <svg
          className="mr-3 h-8 w-8 text-purple-500 dark:text-purple-400"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 21c-4.97 0-9-4.03-9-9s4.03-9 9-9 9 4.03 9 9-4.03 9-9 9zm0-2c3.86 0 7-3.14 7-7s-3.14-7-7-7-7 3.14-7 7 3.14 7 7 7zM13 7h-2v6l5.25 3.15L17 14.92l-4-2.4V7z" />
        </svg>
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Performance Stats
        </h2>
      </div>

      {/* Performance Statistics */}
      <div className="space-y-3 text-gray-700 dark:text-gray-300">
        <div className="flex items-center">
          {/* Icon for Tasks */}
          <svg
            className="mr-2 h-5 w-5 text-green-500 dark:text-green-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14H7v-2h3v2zm5-4H7v-2h8v2zm3-4H7V7h10v2z" />
          </svg>
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Tasks Completed
            </span>
            <p className="text-lg font-medium">20</p>
          </div>
        </div>

        <div className="flex items-center">
          {/* Icon for Projects */}
          <svg
            className="mr-2 h-5 w-5 text-blue-500 dark:text-blue-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L3.5 9l1.5 1.5L5 17h4v-2H7v-2h10v2h-2v2h4l.5-6.5L20.5 9 12 2zm0 5l4.5 4.5h-9L12 7z" />
          </svg>
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Ongoing Projects
            </span>
            <p className="text-lg font-medium">2</p>
          </div>
        </div>

        <div className="flex items-center">
          {/* Icon for Feedback */}
          <svg
            className="mr-2 h-5 w-5 text-yellow-500 dark:text-yellow-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 1c-6.08 0-11 4.92-11 11 0 5.08 3.44 9.29 8 10.58V22l3.75-1.9c.63.12 1.27.2 1.95.2 6.08 0 11-4.92 11-11s-4.92-11-11-11zm1.5 15h-3v-2h3v2zm0-4h-3V6h3v6z" />
          </svg>
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Feedback
            </span>
            <p className="text-lg font-medium">Positive</p>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-6">
        <button className="w-full rounded-md bg-purple-600 px-4 py-2 text-white transition-colors duration-200 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-400">
          View Detailed Stats
        </button>
      </div>
    </div>
  );
};

export default PerformanceStatsCard;
