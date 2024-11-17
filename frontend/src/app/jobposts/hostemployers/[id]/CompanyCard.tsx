import React from "react";
import Company from "@/types/company";

function CompanyCard(props: { company: Company }) {
  return (
    <div className="flex flex-col gap-3 rounded-md bg-gray-50 p-4 shadow-md dark:bg-gray-700">
      <h3 className="text-base font-semibold text-gray-900 dark:text-white">
        {props.company.name}
      </h3>
      <p className="text-gray-700 dark:text-gray-300">
        <span className="font-semibold">Industry: </span>
        {props.company.description}
      </p>
    </div>
  );
}

export default CompanyCard;
