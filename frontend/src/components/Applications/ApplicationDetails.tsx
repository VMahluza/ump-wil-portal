"use client";
import { useState } from "react";
import { Application } from "@/types/applications";
import { UpdateApplicationStatus } from "@/app/actions";

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
      <section className="col-span-12 rounded-[10px] bg-white px-7.5 pb-6 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-7">
        <h2 className="mb-4 text-2xl font-semibold">Personal Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h5 className="block font-bold">First Name:</h5>
            <p>{application.first_name}</p>
          </div>
          <div>
            <h5 className="block font-bold">Last Name:</h5>
            <p>{application.last_name}</p>
          </div>
          <div>
            <h5 className="block font-bold">Student Number:</h5>
            <p>{application.student_number}</p>
          </div>
          <div>
            <h5 className="block font-bold">Email:</h5>
            <p>{application.email}</p>
          </div>
          <div>
            <h5 className="block font-bold">Phone:</h5>
            <p>{application.phone}</p>
          </div>
          <div>
            <h5 className="block text-sm font-bold">Date of Birth:</h5>
            <p>{application.date_of_birth}</p>
          </div>
          <div>
            <h5 className="block font-bold">Gender:</h5>
            <p>{application.gender}</p>
          </div>
          <div>
            <h5 className="block  font-bold">Address:</h5>
            <p>{application.address}</p>
          </div>
        </div>
      </section>

      {/* Academic Information */}
      <section className="rounded-lg border p-6 ">
        <h2 className="mb-4 text-2xl font-semibold">Academic Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h5 className="block font-medium">Year of Study:</h5>
            <p className="text-dark-3">{application.year_of_study}</p>
          </div>
          <div>
            <h5 className="block text-sm font-medium">Job Post Applied For:</h5>
            <p className="text-dark-3">Post 1</p>
          </div>
          
        </div>
        <br /><br />
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
