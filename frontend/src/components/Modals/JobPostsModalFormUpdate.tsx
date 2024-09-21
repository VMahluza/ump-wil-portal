'use client';
import React, { useEffect, useState } from 'react';
import '@/components/Modals/modal.css'; // Import the custom CSS for animations
import { AddJobPost, UpdateJobPost } from "@/app/actions";
import { useFormState } from "react-dom";
import JobPost from '@/types/jobpost';

interface JobPostFormModalProps {
  handleSubmitOnJobPostModalUpdate: any;
  jobPost: JobPost;
}

const JobPostsModalFormUpdate = ({ handleSubmitOnJobPostModalUpdate, jobPost }: JobPostFormModalProps) => {
  // State hooks for form values
  const [jobpoststate, formAction] = useFormState(AddJobPost, { message: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  
  // Properly binding useState with inputs, initial values set from jobPost prop
  const [name, setName] = useState<string>(jobPost.name);
  const [description, setDescription] = useState<string>(jobPost.descripton);
  const [closing_date, setClosingDate] = useState<string>(jobPost.closing_date);
  const [error, setError] = useState<string | null>(null); // State for error messages

  // Reset form state each time jobPost changes or when modal opens
  useEffect(() => {
    if (isModalOpen) {
      setName(jobPost.name);
      setDescription(jobPost.descripton);
      setClosingDate(jobPost.closing_date);
    }
  }, [isModalOpen, jobPost]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('id', jobPost.id?.toString());
    formData.append('name', name);
    formData.append('description', description);
    formData.append('closing_date', closing_date);

    try {
      const res = await UpdateJobPost(jobpoststate, formData);
      if (res?.message) {
        setError(res.message);
      } else {
        handleSubmitOnJobPostModalUpdate();
        setLoading(false);
        handleCloseModal();
      }
    } catch (err) {
      setError('Failed to update job post. Please try again.');
    }
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
        className="flex items-center justify-center bg-primary px-6 py-3 text-white font-medium rounded-md shadow hover:bg-opacity-90 transition-all"
      >
        Update Job Application
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Modal background */}
          <div
            className={`fixed inset-0 bg-black transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-50'}`}
            onClick={handleCloseModal}
          ></div>

          {/* Modal content with animation */}
          <div className={`bg-white rounded-md shadow-lg p-6 z-50 w-1/3 modal-content ${isClosing ? 'slide-out' : 'slide-in'}`}>
            <h2 className="text-xl font-bold mb-4">Update Job Post</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Job Name</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full h-24"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Closing Date</label>
                <input
                  type="date"
                  name="closing_date"
                  value={closing_date}
                  onChange={(e) => setClosingDate(e.target.value)}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-md"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobPostsModalFormUpdate;
