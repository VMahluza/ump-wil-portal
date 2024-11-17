"use client";
import React, { useState } from "react";
import "@/components/Modals/modal.css"; // Import the custom CSS for animations
import { AddJobPost } from "@/lib/data/actions";
import { useFormState } from "react-dom";

interface JobPostFormModalProps {
  handleSubmitOnJobPostModal: any;
}
const JobPostFormModal = ({
  handleSubmitOnJobPostModal,
}: JobPostFormModalProps) => {
  const [jobpoststate, formAction] = useFormState(AddJobPost, { message: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [descripton, setDescripton] = useState<string>("");
  const [closing_date, setClosingdDate] = useState<any>(null);
  const [error, setError] = useState<string | null>(null); // State for error messages

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append("name", name);
    formData.append("descripton", descripton);
    formData.append("closing_date", closing_date);

    console.log("FormData on Component:");
    console.log(name, descripton, closing_date);

    try {
      const res = await AddJobPost(jobpoststate, formData);
      if (res?.message) {
        setError(res.message);
      } else {
        handleSubmitOnJobPostModal();
        setLoading(false);
        handleCloseModal();
      }
    } catch (err) {
      setError("Failed to create job post. Please try again.");
    }
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false); // Reset for the next time modal is opened
    }, 300); // Match the duration of the closing animation
  };

  return (
    <div>
      {/* Button to trigger the modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center justify-center rounded-md bg-primary px-6 py-3 font-medium text-white shadow transition-all hover:bg-opacity-90 "
      >
        Create A New Application Request
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Modal background */}
          <div
            className={`fixed inset-0 bg-black transition-opacity duration-300 ${isClosing ? "opacity-0" : "opacity-50"}`}
            onClick={handleCloseModal}
          ></div>

          {/* Modal content with animation */}
          <div
            className={`modal-content z-50 w-1/3 rounded-md bg-white p-6 shadow-lg ${isClosing ? "slide-out" : "slide-in"} dark:border-dark-3 dark:bg-gray-dark dark:shadow-card`}
          >
            <h2 className="mb-4 text-xl font-bold">Create Job Post</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-dark dark:text-white">
                  Job Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full rounded-md border border-gray-300 p-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-dark dark:text-white">
                  Description
                </label>
                <textarea
                  name="description"
                  value={descripton}
                  onChange={(e) => setDescripton(e.target.value)}
                  className="mt-1 h-24 w-full rounded-md border border-gray-300 p-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="mb-2.5 block font-medium text-dark dark:text-white">
                  Closing Date
                </label>
                <input
                  type="date"
                  name="closing_date"
                  value={closing_date}
                  onChange={(e) => setClosingdDate(e.target.value)}
                  className="mt-1 w-full rounded-md border border-gray-300 p-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="mr-2 rounded-md bg-gray-300 px-4 py-2 text-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-primary px-4 py-2 text-white"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobPostFormModal;
