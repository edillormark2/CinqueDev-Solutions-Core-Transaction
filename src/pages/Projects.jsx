import React, { useState, useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { MdAdd } from "react-icons/md";
import { DataGrid } from "@mui/x-data-grid";
import { gridClasses } from "@mui/x-data-grid";
import { projectsDummyData } from "../data/projects";
import { Tooltip } from "@mui/material";
import Fade from "@mui/material/Fade";
import { MdOutlineInfo } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiPassPendingLine } from "react-icons/ri";
import { GoGoal } from "react-icons/go";
import { MdDoneOutline } from "react-icons/md";
import { PiPause } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import AddProjectsPopup from "../components/AddProjectsPopup";

const ProjectGridStatus = ({ checkStatus }) => {
  const getStatusBgClass = status => {
    switch (status) {
      case "Completed":
        return "bg-green-500 text-green-500 ";
      case "In Progress":
        return "bg-yellow-500 text-yellow-500";
      case "Not Started":
        return "bg-red-500 text-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <button
      type="button"
      className={`p-1 text-sm w-24 bg-opacity-15 rounded-full ${getStatusBgClass(
        checkStatus
      )}`}
    >
      {checkStatus}
    </button>
  );
};

const CompletionRateProgress = ({ completionRate }) => {
  return (
    <div className="flex items-center w-full">
      <div className="w-full bg-gray-300 rounded-full h-2">
        <div
          className="bg-blue-500 h-2 rounded-full"
          style={{ width: `${completionRate}%` }}
        />
      </div>
      <span className="ml-2">
        {completionRate}%
      </span>
    </div>
  );
};

const TeamMembers = ({ team }) => {
  return (
    <div className="flex -space-x-2 overflow-hidden">
      {team.map((member, index) =>
        <img
          key={index}
          src={member}
          alt={`Team member ${index + 1}`}
          className="inline-block h-8 w-8 rounded-full ring-2 ring-white my-2"
        />
      )}
    </div>
  );
};

const Projects = () => {
  const [projectsData, setProjectsData] = useState(projectsDummyData);
  const [openCreatePopup, setOpenCreatePopup] = useState(false);
  const navigate = useNavigate();

  // Calculate totals
  const totalProjects = projectsData.length;
  const completedProjects = projectsData.filter(
    project => project.status === "Completed"
  ).length;
  const inProgressProjects = projectsData.filter(
    project => project.status === "In Progress"
  ).length;
  const notStartedProjects = projectsData.filter(
    project => project.status === "Not Started"
  ).length;

  const columns = [
    {
      field: "projectname",
      headerName: "Project name",
      width: 150,
      flex: 1,
      minWidth: 120
    },
    {
      field: "status",
      headerName: "Status",
      width: 150,
      flex: 1,
      minWidth: 120,
      renderCell: params => <ProjectGridStatus checkStatus={params.value} />
    },
    {
      field: "teams",
      headerName: "Dev Team",
      width: 150,
      flex: 1,
      minWidth: 150,
      renderCell: params => <TeamMembers team={params.value} />
    },
    {
      field: "completionrate",
      headerName: "Completion Rate",
      width: 200,
      flex: 1,
      minWidth: 150,
      renderCell: params =>
        <CompletionRateProgress completionRate={params.value} />
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      flex: 1,
      minWidth: 120,
      align: "Center",
      renderCell: params =>
        <div className="flex justify-center gap-2">
          <Tooltip
            arrow
            title="Details"
            placement="left"
            TransitionComponent={Fade}
          >
            <div
              onClick={() =>
                navigate(`/projects/project-details/${params.row.id}`)}
              className="p-2 my-2 rounded-lg text-black cursor-pointer border"
            >
              <MdOutlineInfo size={18} className="text-gray-600" />
            </div>
          </Tooltip>
          <Tooltip
            arrow
            title="Delete"
            placement="right"
            TransitionComponent={Fade}
          >
            <div className=" p-2 my-2 rounded-lg text-black cursor-pointer  border">
              <RiDeleteBin6Line size={18} className="text-gray-600" />
            </div>
          </Tooltip>
        </div>
    }
  ];

  const handleOpenCreate = () => {
    setOpenCreatePopup(true);
  };

  const breadcrumbLinks = [
    { to: "/dashboard", label: "Home" },
    { to: "", label: "Projects" }
  ];

  return (
    <div className="mx-4 md:mx-12 my-20 md:my-8">
      <div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="my-4">
            <p className="text-3xl font-semibold ">Project Overview</p>
            <p className="text-sm text-gray-500 mt-2">
              The data shown here is aggregated as of the year 2024
            </p>
          </div>
          <div
            onClick={handleOpenCreate}
            className="bg-primary w-full md:w-44 text-white rounded-md py-2 px-4 my-4 flex justify-center gap-4 cursor-pointer hover:opacity-75 self-center"
          >
            Add Project <MdAdd size={22} className="self-center" />
          </div>
        </div>
        <Breadcrumbs links={breadcrumbLinks} />

        <div className="mt-8 flex flex-wrap lg:flex-nowrap justify-center gap-4">
          <div className="flex gap-4 bg-blue-500 p-4 rounded-xl w-full md:w-80 max-h-24 shadow-2xl shadow-primary">
            <div className="bg-white px-3 py-1 rounded-xl text-blue-500 flex justify-center ">
              <GoGoal size={28} className="self-center items-center" />
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">
                {totalProjects}
              </p>
              <p className="  text-white text-base lg:text-sm">
                Total projects
              </p>
            </div>
          </div>
          <div className="flex gap-4 bg-white p-4 rounded-xl w-full md:w-80  max-h-24  ">
            <div className="bg-blue-100 px-3 py-1 rounded-xl text-blue-500 flex justify-center ">
              <MdDoneOutline size={28} className="self-center items-center" />
            </div>
            <div>
              <p className="text-2xl font-semibold">
                {completedProjects}
              </p>
              <p className=" text-gray-500 text-base lg:text-sm">
                Completed projects
              </p>
            </div>
          </div>
          <div className="flex gap-4 bg-white p-4 rounded-xl w-full md:w-80  max-h-24  ">
            <div className="bg-blue-100 px-3 py-1 rounded-xl text-blue-500 flex justify-center ">
              <RiPassPendingLine
                size={28}
                className="self-center items-center"
              />
            </div>
            <div>
              <p className="text-2xl font-semibold">
                {inProgressProjects}
              </p>
              <p className=" text-gray-500 text-base lg:text-sm">
                Pending projects
              </p>
            </div>
          </div>
          <div className="flex gap-4 bg-white p-4 rounded-xl w-full md:w-80  max-h-24 ">
            <div className="bg-blue-100 px-3 py-1 rounded-xl text-blue-500 flex justify-center ">
              <PiPause size={28} className="self-center items-center" />
            </div>
            <div>
              <p className="text-2xl font-semibold">
                {notStartedProjects}
              </p>
              <p className=" text-gray-500 text-base lg:text-sm">
                Not started projects{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="my-10">
          <DataGrid
            sx={{
              [`& .${gridClasses.cell}:focus, & .${gridClasses.cell}:focus-within`]: {
                outline: "none"
              },
              [`& .${gridClasses.columnHeader}:focus, & .${gridClasses.columnHeader}:focus-within`]: {
                outline: "none"
              }
            }}
            initialState={{
              pagination: { paginationModel: { pageSize: 10 } }
            }}
            rows={projectsData}
            columns={columns}
            pageSizeOptions={[10, 20, 50, 100]}
            getRowId={row => row.id}
          />
        </div>
      </div>
      <AddProjectsPopup
        openCreatePopup={openCreatePopup}
        setOpenCreatePopup={setOpenCreatePopup}
      />
    </div>
  );
};

export default Projects;
