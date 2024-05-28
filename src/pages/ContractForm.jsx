import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { contractsDummyData } from "../data/contracts";
import cdslogo from "../assets/CDS_FULL-LOGO.png";

const ContractForm = () => {
  const { id } = useParams();

  const getContractById = id => {
    return contractsDummyData.find(contract => contract.id === Number(id));
  };

  const contract = getContractById(id);

  const breadcrumbLinks = [
    { to: "/dashboard", label: "Home" },
    { to: "/contracts", label: "Contracts" },
    { to: "", label: "Contract Form" }
  ];

  return (
    <div className="mx-4 lg:mx-12 my-20 md:my-8">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="text-3xl font-semibold my-4">Contract Form</div>
      </div>
      <Breadcrumbs links={breadcrumbLinks} />

      <div className="my-8 mx-0 xl:mx-20 2xl:mx-36 text-sm md:text-base">
        <div className="bg-white border p-2 md:p-8">
          <div className="flex justify-center">
            <img
              src={cdslogo}
              alt="logo"
              className="w-40 md:w-60 h-40 md:h-60 object-contain"
            />
          </div>
          <p className="text-base md:text-3xl font-bold text-center">
            {contract ? contract.title : "Contract not found"} Agreement
          </p>
          <div className=" mt-10 px-4">
            <div className="flex gap-2 mt-8">
              <p className="font-semibold">Owner: </p>
              <p>
                {contract ? contract.owner : ""}
              </p>
            </div>
            <div className="flex gap-2 mt-2">
              <p className="font-semibold">Created:</p>
              <p>
                {contract ? contract.created : ""}
              </p>
            </div>
            <div className="flex gap-2 mt-2">
              <p className="font-semibold">Status:</p>
              <p>
                {contract ? contract.status : ""}
              </p>
            </div>
            <div className="flex gap-2 mt-2">
              <p className="font-semibold">Signatory:</p>
              <p>
                {contract ? contract.signatory : ""}
              </p>
            </div>
            <div className="mt-16">
              <p className="font-semibold">Scope of Services</p>
              <p>
                {contract ? contract.scopeOfServices : ""}
              </p>
            </div>
            <div className="mt-8">
              <p className="font-semibold">Payment</p>
              <p>
                {contract ? contract.payment : ""}
              </p>
            </div>
            <div className="mt-8">
              <p className="font-semibold">Intellectual Property Rights</p>
              <p>
                {contract ? contract.ipRights : ""}
              </p>
            </div>
            <div className="mt-8">
              <p className="font-semibold">Confidentiality</p>
              <p>
                {contract ? contract.confidentiality : ""}
              </p>
            </div>
            <div className="mt-8">
              <p className="font-semibold">Term and Termination</p>
              <p>
                {contract ? contract.termAndTermination : ""}
              </p>
            </div>
            <div className="mt-8">
              <p className="font-semibold">Miscellaneous</p>
              <p>
                {contract ? contract.miscellaneous : ""}
              </p>
            </div>
            <div className="mt-8">
              <p className="font-semibold">Governing Law</p>
              <p>
                {contract ? contract.governingLaw : ""}
              </p>
            </div>
            <div className="flex justify-between text-sm ">
              <div className="mt-20 border-t-2 border-gray-400 w-48 text-center">
                <p className="my-2">Owner Signature</p>
              </div>
              <div className="mt-20 border-t-2 border-gray-400 w-48 text-center">
                <p className="my-2">Client Signature</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractForm;
