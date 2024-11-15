"use client";
import { useState } from "react";
import { Application } from "@/types/applications";
import { UpdateApplicationStatus } from "@/lib/data/actions";

type ApplicationDetailsProps = {
  application: Application;
};

const ApplicationDetails = ({ application }: ApplicationDetailsProps) => {
  const [newStatus, setNewStatus] = useState<string>(application.status);
  const [isLoading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  const HandleUpdateApplicationStatus = async () => {
    try {
      setLoading(true);
      setError(null); // Reset error state before starting request

      const response = await UpdateApplicationStatus(application.id, newStatus);

      if (response?.error) {
        setError(response.error); // Set error if the request fails
      } else {
        alert("Status updated successfully!");
      }
    } catch (err) {
      console.error("Failed to update status:", err);
      setError("Failed to update status. Please try again.");
    } finally {
      setLoading(false); // Stop loading regardless of success or error
    }
  };
  return (
    <>
      {/* Personal Information */}
      <section className="col-span-12 transform rounded-lg bg-white px-8 py-8 shadow-lg dark:bg-gray-800 dark:shadow-2xl xl:col-span-7">
        <h2 className="mb-6 text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Personal Information
        </h2>

        <div className="grid grid-cols-1 gap-y-6 text-gray-700 dark:text-gray-300 md:grid-cols-2 md:gap-x-8">
          <div className="flex items-center space-x-4">
            <span className="font-bold">First Name:</span>
            <p>{application.first_name}</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-bold">Last Name:</span>
            <p>{application.last_name}</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-bold">Student Number:</span>
            <p>{application.student_number}</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-bold">Email:</span>
            <p>{application.email}</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-bold">Phone:</span>
            <p>{application.phone}</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-bold">Date of Birth:</span>
            <p>{application.date_of_birth}</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-bold">Gender:</span>
            <p>{application.gender}</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-bold">Address:</span>
            <p>{application.address}</p>
          </div>
        </div>
      </section>

      {/* Academic Information */}
      <section className="col-span-12 transform rounded-lg bg-white px-8 py-8 shadow-lg dark:bg-gray-800 dark:shadow-2xl xl:col-span-7">
        <h2 className="mb-4 text-2xl font-semibold">Academic Information</h2>
        <div className="dark:text-gray-300 md:grid-cols-2 md:gap-x-8">
          <div>
            <h5 className="block font-medium">Year of Study:</h5>
            <p className="text-dark-3 dark:text-gray-300">
              {application.year_of_study}
            </p>
          </div>
          <div>
            <h5 className="block text-sm font-medium">Job Post Applied For:</h5>
            <p className="text-dark-3 dark:text-gray-300">Post 1</p>
          </div>
        </div>
        <br />
        <br />
        <hr />
        <div>
          {/* Status change */}
          <h5 className="block font-medium">Application Status:</h5>
          <select
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
            className="rounded border p-2"
            title="Select the application status"
          >
            <option value="PENDING">Pending</option>
            <option value="ADMITTED">Admitted</option>
            <option value="REJECTED">Rejected</option>
          </select>
          <button
            onClick={HandleUpdateApplicationStatus}
            className="ml-4 rounded bg-blue-500 px-4 py-2 text-white"
          >
            Update Status
          </button>
        </div>
      </section>

      {/* Document Section */}
      <section className="rounded-lg border p-6">
        <h2 className="mb-4 text-2xl font-semibold">Uploaded Documents</h2>
        <div className="space-y-4">
          <div>
            <h5 className="block text-sm font-medium">Resume/CV:</h5>
            {application.resume_cv ? (
              <a
                href={application.resume_cv}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View Document
              </a>
            ) : (
              <p className="text-dark-3">No document uploaded</p>
            )}
          </div>
          <div>
            <h5 className="block text-sm font-medium">Qualifications:</h5>
            {application.qualifications ? (
              <a
                href={application.qualifications}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View Document
              </a>
            ) : (
              <p className="text-dark-3">No document uploaded</p>
            )}
          </div>
          <div>
            <h5 className="block text-sm font-medium">Other Documents:</h5>
            {application.other_documents ? (
              <a
                href={application.other_documents}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View Document
              </a>
            ) : (
              <p className="text-dark-3">No document uploaded</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ApplicationDetails;
