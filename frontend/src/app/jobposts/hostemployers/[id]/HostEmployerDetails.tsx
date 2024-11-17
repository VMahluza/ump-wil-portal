import React from "react";
import HostEmployerDetailsCard from "@/app/jobposts/hostemployers/[id]/HostEmployerDetailsCard";
import CompanyCard from "@/app/jobposts/hostemployers/[id]/CompanyCard";
import Company from "@/types/company";

type User = {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  role: string;
  is_superuser: boolean;
  email: string;
};

type HostEmployerDetailsProps = {
  hostEmployer: User;
  companies: Company[];
};

const HostEmployerDetails: React.FC<HostEmployerDetailsProps> = ({
  hostEmployer,
  companies,
}) => {
  return (
    <div className="max-w p-6">
      <div className="flex flex-col gap-10 rounded-lg shadow-lg dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
        {/* Host Employer Info */}
        <HostEmployerDetailsCard hostEmployer={hostEmployer} />
        {/* Companies Owned */}
        <div className="rounded-md bg-white p-6 dark:bg-gray-dark dark:shadow-card">
          <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
            Companies Owned ({companies.length})
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {companies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostEmployerDetails;
