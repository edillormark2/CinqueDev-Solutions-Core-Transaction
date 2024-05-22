import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { RxDotsVertical } from "react-icons/rx";
import { BsChat } from "react-icons/bs";
import { Divider } from "@mui/joy";
import { AiOutlineSignature } from "react-icons/ai";
import { contractsDummyData } from "../data/contracts.js";
import { ImFileEmpty } from "react-icons/im";
import { MdAdd } from "react-icons/md";
import { IoIosFolderOpen } from "react-icons/io";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { useNavigate } from "react-router-dom";

const Contracts = () => {
  const [activeTab, setActiveTab] = useState("ALL CONTRACTS");
  const navigate = useNavigate();

  const handleViewContract = id => {
    navigate(`/contracts/contract-form/${id}`);
    window.scrollTo({ top: 0 });
  };

  const handleCreateContract = () => {
    navigate(`/contracts/create-new-contract`);
    window.scrollTo({ top: 0 });
  };

  const tabs = [
    { name: "ALL CONTRACTS", count: 15 },
    {
      name: "PENDING",
      count: 4,
      icon: <GoDotFill className="text-yellow-500 self-center mr-2" />
    },
    {
      name: "SIGNED",
      count: 9,
      icon: <GoDotFill className="text-green-500 self-center mr-2" />
    },
    {
      name: "REQUEST CHANGES",
      count: 2,
      icon: <GoDotFill className="text-red-500 self-center mr-2" />
    },
    {
      name: "DRAFTS",
      count: 0,
      icon: <GoDotFill className="text-gray-500 self-center mr-2" />
    }
  ];

  const filteredContracts =
    activeTab === "ALL CONTRACTS"
      ? contractsDummyData
      : contractsDummyData.filter(contract => {
          if (activeTab === "PENDING") {
            return contract.status === "Pending";
          } else if (activeTab === "SIGNED") {
            return contract.status === "Signed";
          } else if (activeTab === "REQUEST CHANGES") {
            return contract.status === "Request Changes";
          } else if (activeTab === "DRAFTS") {
            return contract.status === "Drafts";
          }
          return false;
        });

  const breadcrumbLinks = [
    { to: "/dashboard", label: "Home" },
    { to: "", label: "Contracts" }
  ];

  return (
    <div className="mx-4 md:mx-12 my-20 md:my-8">
      <div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-3xl font-semibold my-4">Contracts</div>
          <div
            onClick={() => handleCreateContract()}
            className="bg-primary text-white rounded-md py-2 px-4 my-4 flex justify-center gap-4 cursor-pointer hover:opacity-75"
          >
            Add New Contract <MdAdd size={22} className="self-center" />
          </div>
        </div>
        <Breadcrumbs links={breadcrumbLinks} />

        <div className="flex my-4 gap-14">
          {tabs.map(tab =>
            <div
              key={tab.name}
              className={`flex font-semibold text-sm p-4 text-center cursor-pointer ${activeTab ===
              tab.name
                ? "border-b-2 border-blue-500 component-transition"
                : "hover:border-b-2 hover:border-gray-300"}`}
              onClick={() => setActiveTab(tab.name)}
            >
              {tab.icon}
              {tab.name} <p className="mx-1 text-gray-500">({tab.count})</p>
            </div>
          )}
        </div>

        <div className="mt-10">
          <p className="font-semibold text-gray-500">Folders</p>
          <div className="w-full flex flex-wrap mt-6 ">
            <div className="w-full sm:w-full md:w-1/2 2xl:w-1/3 px-0 md:px-2 py-2">
              <div className="bg-white border border-gray-300 rounded-md p-4 shadow-sm cursor-pointer hover:bg-blue-50">
                <div className="flex gap-4">
                  <IoIosFolderOpen
                    size={40}
                    className="self-center text-blue-400"
                  />
                  <div>
                    <p className="font-semibold text-lg">Websites</p>
                    <p className="text-gray-400">
                      4 Contracts | Created 08 Oct 2023{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-full md:w-1/2 2xl:w-1/3 px-0 md:px-2 py-2">
              <div className="bg-white border border-gray-300 rounded-md p-4 shadow-sm cursor-pointer hover:bg-blue-50">
                <div className="flex gap-4">
                  <IoIosFolderOpen
                    size={40}
                    className="self-center text-blue-400"
                  />
                  <div>
                    <p className="font-semibold text-lg">Web Applications</p>
                    <p className="text-gray-400">
                      2 Contracts | Created 08 Oct 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-full md:w-1/2 2xl:w-1/3 px-0 md:px-2 py-2">
              <div className="bg-white border border-gray-300 rounded-md p-4 shadow-sm cursor-pointer hover:bg-blue-50">
                <div className="flex gap-4">
                  <IoIosFolderOpen
                    size={40}
                    className="self-center text-blue-400"
                  />
                  <div>
                    <p className="font-semibold text-lg">
                      Desktop Applications
                    </p>
                    <p className="text-gray-400">
                      3 Contracts | Created 08 Oct 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-full md:w-1/2 2xl:w-1/3 px-0 md:px-2 py-2">
              <div className="bg-white border border-gray-300 rounded-md p-4 shadow-sm cursor-pointer hover:bg-blue-50">
                <div className="flex gap-4">
                  <IoIosFolderOpen
                    size={40}
                    className="self-center text-blue-400"
                  />
                  <div>
                    <p className="font-semibold text-lg">Mobile Applications</p>
                    <p className="text-gray-400">
                      2 Contracts | Created 08 Oct 2023{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-full md:w-1/2 2xl:w-1/3 px-0 md:px-2 py-2">
              <div className="bg-white border border-gray-300 rounded-md p-4 shadow-sm cursor-pointer hover:bg-blue-50">
                <div className="flex gap-4">
                  <IoIosFolderOpen
                    size={40}
                    className="self-center text-blue-400"
                  />
                  <div>
                    <p className="font-semibold text-lg">Others</p>
                    <p className="text-gray-400">
                      4 Contracts | Created 08 Oct 2023{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <p className="font-semibold text-gray-500">Files</p>
          <div className="w-full flex flex-wrap mt-6 ">
            {filteredContracts.length > 0
              ? filteredContracts.map(contract =>
                  <div
                    key={contract.id}
                    className="w-full sm:w-full md:w-1/2 2xl:w-1/3 px-0 md:px-2 py-2"
                    onClick={() => handleViewContract(contract.id)}
                  >
                    <div className="relative bg-white border border-gray-300 rounded-md p-4 cursor-pointer hover:bg-blue-50">
                      <div className="flex justify-end gap-1 ">
                        <p
                          className={`border p-1 rounded-md text-xs font-semibold ${getStatusColor(
                            contract.status
                          )}`}
                        >
                          {contract.status}
                        </p>
                        <RxDotsVertical
                          size={20}
                          className="self-center text-gray-600"
                        />
                      </div>
                      <p className="my-4 font-semibold text-lg">
                        {contract.title}
                      </p>
                      <div className="flex justify-between my-2">
                        <div>
                          <p className="text-sm text-gray-500">Owner</p>
                          <p className="text-base font-semibold">
                            {contract.owner}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Created</p>
                          <p className="text-base font-semibold">
                            {contract.created}
                          </p>
                        </div>
                      </div>
                      <Divider />
                      <div className="my-2">
                        <p className="text-sm font-semibold">
                          Signatory ({contract.status === "Signed" ? 2 : 0})
                        </p>
                        <div className="flex gap-2 text-sm my-1">
                          <AiOutlineSignature
                            size={20}
                            className="self-center text-green-500"
                          />
                          <p className="text-gray-600">
                            {contract.signatory}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              : <div className="flex flex-col w-full text-gray-500">
                  <div className="mx-auto">
                    <ImFileEmpty size={38} />
                  </div>
                  <div className="text-center my-4">No available contracts</div>
                </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function to determine status color
const getStatusColor = status => {
  switch (status) {
    case "Pending":
      return "border-yellow-500 text-yellow-500 bg-yellow-50";
    case "Signed":
      return "border-green-500 text-green-500 bg-green-50";
    case "Request Changes":
      return "border-red-500 text-red-500 bg-red-50";
    default:
      return "border-gray-500 text-gray-500 bg-gray-50";
  }
};

export default Contracts;
