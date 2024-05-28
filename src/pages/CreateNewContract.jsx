import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";

const CreateNewContract = () => {
  const breadcrumbLinks = [
    { to: "/dashboard", label: "Home" },
    { to: "/contracts", label: "Contracts" },
    { to: "", label: "Create Contract" }
  ];

  return (
    <div className="mx-2 lg:mx-12 my-20 md:my-8">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="text-3xl font-semibold my-4">Creat New Contract</div>
      </div>
      <Breadcrumbs links={breadcrumbLinks} />

      <div className="my-8 mx-0 xl:mx-20 2xl:mx-36 text-sm md:text-base">
        <div className="bg-white border p-3 md:p-8">
          <p className="text-xl font-bold text-center">
            Fill out the form to create a new contract agreement
          </p>
          <div className="flex w-full gap-4">
            <div className="w-1/2">
              <h1 className="mb-1 dark:text-gray-200 mt-4">Title</h1>
              <input
                type="text"
                id="name"
                className="form-control w-full bg-gray-100 p-3 rounded-lg border  text-sm sm:text-base dark:bg-secondary-dark-bg dark:text-gray-200 mb-5"
              />
            </div>
            <div className="w-1/2">
              <h1 className="mb-1 dark:text-gray-200 mt-4">Owner Name</h1>
              <input
                type="text"
                id="email"
                className="form-control w-full bg-gray-100 p-3 rounded-lg border  text-sm sm:text-base dark:bg-secondary-dark-bg dark:text-gray-200 mb-5"
              />
            </div>
          </div>

          <div className="flex w-full gap-4">
            <div className="w-1/2">
              <h1 className="mb-1 dark:text-gray-200 mt-4">Client Name</h1>
              <input
                type="text"
                id="name"
                className="form-control w-full bg-gray-100 p-3 rounded-lg border  text-sm sm:text-base dark:bg-secondary-dark-bg dark:text-gray-200 mb-5"
              />
            </div>
            <div className="w-1/2">
              <h1 className="mb-1 dark:text-gray-200 mt-4">Company Name</h1>
              <input
                type="text"
                id="email"
                className="form-control w-full bg-gray-100 p-3 rounded-lg border  text-sm sm:text-base dark:bg-secondary-dark-bg dark:text-gray-200 mb-5"
              />
            </div>
          </div>
          <h1 className="mb-1 dark:text-gray-200">Scope of Services</h1>
          <textarea
            id="message"
            className="form-control w-full bg-gray-100 p-3 rounded-lg border  text-sm sm:text-base dark:bg-secondary-dark-bg dark:text-gray-200 mb-5"
            rows="4"
            placeholder=""
          />
          <h1 className="mb-1 dark:text-gray-200">Payment Agreement</h1>
          <textarea
            id="message"
            className="form-control w-full bg-gray-100 p-3 rounded-lg border  text-sm sm:text-base dark:bg-secondary-dark-bg dark:text-gray-200 mb-5"
            rows="4"
            placeholder=""
          />
          <h1 className="mb-1 dark:text-gray-200">
            Intellectual Property Rights
          </h1>
          <textarea
            id="message"
            className="form-control w-full bg-gray-100 p-3 rounded-lg border  text-sm sm:text-base dark:bg-secondary-dark-bg dark:text-gray-200 mb-5"
            rows="4"
            placeholder=""
          />
          <h1 className="mb-1 dark:text-gray-200">Confidentiality</h1>
          <textarea
            id="message"
            className="form-control w-full bg-gray-100 p-3 rounded-lg border  text-sm sm:text-base dark:bg-secondary-dark-bg dark:text-gray-200 mb-5"
            rows="4"
            placeholder=""
          />
          <h1 className="mb-1 dark:text-gray-200">Term and Termination</h1>
          <textarea
            id="message"
            className="form-control w-full bg-gray-100 p-3 rounded-lg border  text-sm sm:text-base dark:bg-secondary-dark-bg dark:text-gray-200 mb-5"
            rows="4"
            placeholder=""
          />
          <h1 className="mb-1 dark:text-gray-200">Miscellaneous</h1>
          <textarea
            id="message"
            className="form-control w-full bg-gray-100 p-3 rounded-lg border  text-sm sm:text-base dark:bg-secondary-dark-bg dark:text-gray-200 mb-5"
            rows="4"
            placeholder=""
          />
          <h1 className="mb-1 dark:text-gray-200">Governing Law</h1>
          <textarea
            id="message"
            className="form-control w-full bg-gray-100 p-3 rounded-lg border  text-sm sm:text-base dark:bg-secondary-dark-bg dark:text-gray-200 mb-5"
            rows="4"
            placeholder=""
          />
          <div className="w-full bg-primary p-4 text-center text-white rounded-md cursor-pointer font-semibold hover:opacity-75">
            Create Contract
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewContract;
