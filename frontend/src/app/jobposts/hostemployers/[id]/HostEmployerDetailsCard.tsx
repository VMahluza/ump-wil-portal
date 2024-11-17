import React from "react";

type HostEmployer = {
  first_name: string;
  last_name: string;
  username: string;
  role: string;
  email: string;
  is_superuser: boolean;
};

const HostEmployerDetailsCard: React.FC<{ hostEmployer: HostEmployer }> = ({
  hostEmployer,
}) => {
  return (
    <div className="rounded-lg bg-white p-8 shadow-lg dark:bg-gray-dark dark:shadow-card">
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        Host Employer Details
      </h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-700 dark:text-gray-300">
            Name:
          </span>
          <span className="text-gray-900 dark:text-gray-200">
            {hostEmployer.first_name} {hostEmployer.last_name}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-700 dark:text-gray-300">
            Username:
          </span>
          <span className="text-gray-900 dark:text-gray-200">
            {hostEmployer.username}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-700 dark:text-gray-300">
            Role:
          </span>
          <span className="text-gray-900 dark:text-gray-200">
            {hostEmployer.role}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-700 dark:text-gray-300">
            Email:
          </span>
          <span className="text-gray-900 dark:text-gray-200">
            {hostEmployer.email}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-semibold text-gray-700 dark:text-gray-300">
            Superuser:
          </span>
          <span className="text-gray-900 dark:text-gray-200">
            {hostEmployer.is_superuser ? "Yes" : "No"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HostEmployerDetailsCard;
