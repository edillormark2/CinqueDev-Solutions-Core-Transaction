import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { RxDotsVertical } from "react-icons/rx";
import { BsChat } from "react-icons/bs";
import { Divider } from "@mui/joy";
import { AiOutlineSignature } from "react-icons/ai";
import { contractsDummyData } from "../data/contracts.js";
import { ImFileEmpty } from "react-icons/im";
import { MdAdd } from "react-icons/md";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { useNavigate } from "react-router-dom";
import { FaFile } from "react-icons/fa";
import {
  IoIosFolderOpen,
  IoIosArrowForward,
  IoIosArrowDown
} from "react-icons/io";

const Contracts = () => {
  const [activeTab, setActiveTab] = useState("ALL CONTRACTS");
  const [activeFolders, setActiveFolders] = useState([]);
  const navigate = useNavigate();

  const handleViewContract = id => {
    navigate(`/contracts/contract-form/${id}`);
    window.scrollTo({ top: 0 });
  };

  const handleCreateContract = () => {
    navigate(`/contracts/create-new-contract`);
    window.scrollTo({ top: 0 });
  };

  const toggleFolder = folderName => {
    if (activeFolders.includes(folderName)) {
      setActiveFolders(activeFolders.filter(name => name !== folderName));
    } else {
      setActiveFolders([...activeFolders, folderName]);
    }
  };

  // Organize contracts by category
  const categories = {
    Website: [],
    "Web Application": [],
    "Desktop Application": [],
    "Mobile Application": [],
    Others: []
  };

  contractsDummyData.forEach(contract => {
    if (categories[contract.category]) {
      categories[contract.category].push(contract);
    } else {
      categories.Others.push(contract);
    }
  });

  const folders = Object.keys(categories).map(category => ({
    name: category,
    details: `${categories[category].length} Contracts`,
    treeItems: categories[category].map(contract => ({
      id: contract.id,
      title: contract.title
    }))
  }));

  const tabs = [
    { name: "ALL CONTRACTS", count: contractsDummyData.length },
    {
      name: "PENDING",
      count: contractsDummyData.filter(
        contract => contract.status === "Pending"
      ).length,
      icon: <GoDotFill className="text-yellow-500 self-center mr-2" />
    },
    {
      name: "SIGNED",
      count: contractsDummyData.filter(contract => contract.status === "Signed")
        .length,
      icon: <GoDotFill className="text-green-500 self-center mr-2" />
    },
    {
      name: "REQUEST CHANGES",
      count: contractsDummyData.filter(
        contract => contract.status === "Request Changes"
      ).length,
      icon: <GoDotFill className="text-red-500 self-center mr-2" />
    },
    {
      name: "DRAFTS",
      count: contractsDummyData.filter(contract => contract.status === "Drafts")
        .length,
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

        <div className="flex flex-col md:flex-row justify-between xl:justify-start  my-4 gap-4 xl:gap-10">
          {tabs.map(tab =>
            <div
              key={tab.name}
              className={`flex justify-center mx-16 md:mx-0 font-semibold text-xs p-4 text-center cursor-pointer ${activeTab ===
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
          <div className="w-full flex flex-wrap">
            {folders.map(folder =>
              <div
                key={folder.name}
                className="w-full sm:w-full md:w-1/2 2xl:w-1/3 px-0 md:px-2 py-2"
              >
                <div
                  className="bg-white border border-gray-300 rounded-md p-4 shadow-sm cursor-pointer hover:bg-blue-50"
                  onClick={() => toggleFolder(folder.name)}
                >
                  <div className="flex justify-between">
                    <div className="flex gap-4">
                      <IoIosFolderOpen
                        size={40}
                        className="self-center text-blue-400"
                      />
                      <div>
                        <p className="font-semibold text-lg">
                          {folder.name}
                        </p>
                        <p className="text-gray-400">
                          {folder.details}
                        </p>
                      </div>
                    </div>
                    {activeFolders.includes(folder.name)
                      ? <IoIosArrowDown
                          size={20}
                          className="self-center text-gray-500"
                        />
                      : <IoIosArrowForward
                          size={20}
                          className="self-center text-gray-500"
                        />}
                  </div>
                </div>
                <div
                  className={`transition-all overflow-hidden ${activeFolders.includes(
                    folder.name
                  )
                    ? "max-h-96"
                    : "max-h-0"} duration-300 ease-in-out`}
                >
                  <div className="ml-10 mt-2 text-gray-600">
                    {folder.treeItems.map(item =>
                      <div
                        key={item.id}
                        className="flex gap-2 py-1 cursor-pointer hover:bg-white px-2 rounded-md"
                        onClick={() => handleViewContract(item.id)}
                      >
                        <FaFile className="self-center text-gray-400" />
                        {item.title}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-10">
          <p className="font-semibold text-gray-500">Files</p>
          <div className="w-full flex flex-wrap  ">
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
