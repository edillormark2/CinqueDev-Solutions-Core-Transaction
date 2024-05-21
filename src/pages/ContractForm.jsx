import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { contractsDummyData } from "../data/contracts";

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
    <div className="mx-4 md:mx-12 my-20 md:my-8">
      <div>
        <div className="text-3xl font-semibold my-4">Contract Form</div>
        <Breadcrumbs links={breadcrumbLinks} />

        <div className="my-8">
          <div className="bg-white border p-8">
            <p className="text-3xl font-bold text-center">
              {contract ? contract.title : "Contract not found"} Agreement
            </p>
            <div className="mx-8 md:mx-28 mt-10">
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
                <p className="font-semibold">Scope of Services:</p>
                <p>
                  {contract ? contract.scopeOfServices : ""}
                </p>
              </div>
              <div className="mt-8">
                <p className="font-semibold">Payment:</p>
                <p>
                  {contract ? contract.payment : ""}
                </p>
              </div>
              <div className="mt-8">
                <p className="font-semibold">Intellectual Property Rights:</p>
                <p>
                  {contract ? contract.ipRights : ""}
                </p>
              </div>
              <div className="mt-8">
                <p className="font-semibold">Confidentiality:</p>
                <p>
                  {contract ? contract.confidentiality : ""}
                </p>
              </div>
              <div className="mt-8">
                <p className="font-semibold">Term and Termination:</p>
                <p>
                  {contract ? contract.termAndTermination : ""}
                </p>
              </div>
              <div className="mt-8">
                <p className="font-semibold">Miscellaneous:</p>
                <p>
                  {contract ? contract.miscellaneous : ""}
                </p>
              </div>
              <div className="mt-8">
                <p className="font-semibold">Governing Law:</p>
                <p>
                  {contract ? contract.governingLaw : ""}
                </p>
              </div>
              <div className="mt-8">
                <p className="font-semibold">Signature:</p>
                <div className="border-t mt-4 w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractForm;
