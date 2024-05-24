import { React, useState, useEffect } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePersonAdd } from "react-icons/md";
import { DataGrid } from "@mui/x-data-grid";
import { gridClasses } from "@mui/x-data-grid";
import { Tooltip } from "@mui/material";
import Fade from "@mui/material/Fade";

import Assign from "../components/modals/Assign";
import Reply from "../components/modals/Message";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { generateFakeConsultations } from "../data/consultation";

import { GoGoal } from "react-icons/go";
import { MdDoneOutline } from "react-icons/md";

const Consultation = () => {
  const [consultationData, setConsultationData] = useState([]);
  const [openAssignModal, setOpenAssignModal] = useState(false);
  useEffect(() => {
    setConsultationData(generateFakeConsultations(145));
  }, []);
  const [openReplyModal, setOpenReplyModal] = useState(false);
  const [email, setEmail] = useState("empty");

  const breadcrumbLinks = [
    { to: "/dashboard", label: "Home" },
    { to: "", label: "Consultations" }
  ];

  const columns = [
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      renderCell: (params) => (
        <div className="flex flex-col">
          <p>
            {params.row.date}
          </p>
          <p className=" text-gray-500">
            {params.row.time}
          </p>
        </div>
      )
    },
    {
      field: "name",
      headerName: "Name",
      width: 250,
      renderCell: (params) => (
        <div className="flex flex-col">
          <p>
            {params.row.name}
          </p>
          <p className=" text-gray-500 overflow-hidden text-ellipsis">
            {params.row.email}
          </p>
        </div>
      )
    },
    {
      field: "message",
      headerName: "Message",
      width: 350,
      renderCell: (params) => (
        <p>{`Hi I am ${params.row.name} ${params.row.message}`}</p>
      )
    },
    {
      field: "assignees",
      headerName: "Assignees",
      flex: 1,
    },
    {
      field: "action",
      headerName: "Action",
      headerAlign: 'center',
      align: "center",
      sortable: false,
      width: 150,
      renderCell: params =>
        <div className="flex justify-center gap-2">
          <Tooltip
            arrow
            title="Assign"
            placement="left"
            TransitionComponent={Fade}
          >
            <div
              onClick={() => setOpenAssignModal(true)}
              className="p-2 my-2 rounded-lg text-black cursor-pointer border"
            >
              <MdOutlinePersonAdd size={18} className="text-gray-600" />
            </div>
          </Tooltip>
          <Tooltip
            arrow
            title="Message"
            placement="right"
            TransitionComponent={Fade}
          >
            <div
              onClick={() => { setOpenReplyModal(true); setEmail(params.email); }}
              className="p-2 my-2 rounded-lg text-black cursor-pointer border"
            >
              <MdOutlineMailOutline size={18} className="text-gray-600" />
            </div>
          </Tooltip>
        </div>
    }
  ];

  return (
    <div className="mx-4 md:mx-12 my-20 md:my-8">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="text-3xl font-semibold my-4">Consultations</div>
      </div>
      <Breadcrumbs links={breadcrumbLinks} />

      <div className="mt-8 flex flex-wrap lg:flex-nowrap gap-4">
          <div className="flex gap-4 bg-blue-500 p-4 rounded-xl w-full md:w-80 shadow-2xl shadow-primary">
            <div className="bg-white px-3 py-1 rounded-xl text-blue-500 flex justify-center ">
              <GoGoal size={28} className="self-center items-center" />
            </div>
            <div>
              <p className="text-2xl font-semibold text-white">
                {consultationData.length}
              </p>
              <p className="  text-white">Total</p>
            </div>
          </div>
          <div className="flex gap-4 bg-white p-4 rounded-xl w-full md:w-80">
            <div className="bg-blue-100 px-3 py-1 rounded-xl text-blue-500 flex justify-center ">
              <MdDoneOutline size={28} className="self-center items-center" />
            </div>
            <div>
              <p className="text-2xl font-semibold">
                28
              </p>
              <p className=" text-gray-500">Completed</p>
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
          rows={consultationData}
          columns={columns}
          getRowHeight={() => 'auto'}
          pageSizeOptions={[10, 20, 50, 100]}
          getRowId={row => row.name}
        />
      </div>

      <div>
        <Assign
          title="Assign Employee"
          openModal={openAssignModal}
          setOpenModal={setOpenAssignModal}
        />
        <Reply
          title="Reply"
          email={email}
          openModal={openReplyModal}
          setOpenModal={setOpenReplyModal}
        />
      </div>
    </div>
  );
};

export default Consultation;
