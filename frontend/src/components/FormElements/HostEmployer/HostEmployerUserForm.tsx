"use client";
import React, { useState } from "react";
// @ts-ignore
import { SignInUser, SignUpHostEmployer } from "@/lib/data/actions";
import { useFormState } from "react-dom";

const HostEmployerUserForm = ({ refreshHostEmployers }: any) => {
  const [email, setEmail] = useState<string>(""); // for host emps email is Username !!
  const [first_name, setFirstName] = useState<string>("");
  const [last_name, setLastName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null); // State for error messages

  const [state, formAction] = useFormState(SignInUser, { message: "" });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("email", email);
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);

    try {
      const response = await SignUpHostEmployer(state, formData);
      if (response?.message) {
        setError(response.message);
      } else {
        refreshHostEmployers();
        setLastName("");
        setFirstName("");
        setEmail("");
        alert("Registered successfully");
      }
    } catch (err: any) {
      setError("Error Logging in :" + err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="col-span-2 row-span-5 rounded-[10px] bg-white  p-2 shadow-1 dark:bg-gray-dark ">
        <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
          <h3 className="font-semibold text-dark dark:text-white">
            Register Host Employer
          </h3>
        </div>
        {error && <div>{error}</div>}
        <form action={formAction} onSubmit={handleSubmit}>
          <div className="p-6.5">
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-2.5 block font-medium text-dark dark:text-white"
              >
                First Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your First Name"
                  value={first_name}
                  name="first_name"
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-2.5 block font-medium text-dark dark:text-white"
              >
                Last Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter your Last Name"
                  value={last_name}
                  name="first_name"
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="mb-2.5 block font-medium text-dark dark:text-white"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your Last Name"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>

            <div className="mb-4.5">
              <button
                type="submit"
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary p-4 font-medium text-white transition hover:bg-opacity-90"
              >
                {loading ? "Loading..." : "Sign In"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default HostEmployerUserForm;
