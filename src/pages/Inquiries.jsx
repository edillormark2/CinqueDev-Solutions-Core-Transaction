import { React, useState } from "react";
import {
  generateFakeInquiries,
  getStatusCount,
  inquiryStatuses
} from "../data/inquiries";
import StatusChip from "../components/StatusChip";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { gridClasses } from "@mui/x-data-grid";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { GoGoal } from "react-icons/go";
import { MdDoneOutline } from "react-icons/md";
import { MdHandshake } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { MdOutlineInfo } from "react-icons/md";
import { Tooltip } from "@mui/material";
import Fade from "@mui/material/Fade";
import talk from "../assets/Discussion.png";

const Inquiries = () => {
  const navigate = useNavigate();
  const [inquiriesData, setInquiriesData] = useState(generateFakeInquiries(43));

  const handleViewDetail = id => {
    const inquiry = inquiriesData.find(item => item.id === id);
    const serializedObject = encodeURIComponent(JSON.stringify(inquiry));
    navigate(`/inquiries/detail?data=${serializedObject}`);
  };

  const breadcrumbLinks = [
    { to: "/dashboard", label: "Home" },
    { to: "", label: "Inquiries" }
  ];

  const columns = [
    {
      field: "name",
      headerName: "Name",
      minWidth: 250,
      flex: 1,
      renderCell: params =>
        <div className="flex flex-col pb-4">
          <p>
            {params.row.name}
          </p>
          <p className=" text-gray-500 overflow-hidden text-ellipsis">
            {params.row.email}
          </p>
        </div>
    },
    {
      field: "country",
      headerName: "Country",
      minWidth: 200,
      flex: 1
    },
    {
      field: "budget",
      headerName: "Budget",
      minWidth: 175,
      flex: 1
    },
    {
      field: "service",
      headerName: "Service",
      minWidth: 250,
      flex: 1
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 175,
      flex: 1,
      renderCell: params =>
        <div className="flex justify-start mt-2 h-full">
          <StatusChip text={params.row.status} data={inquiryStatuses} />
        </div>
    },
    {
      field: "action",
      headerAlign: "center",
      headerName: "Action",
      flex: 1,
      minWidth: 120,
      renderCell: params =>
        <div className="flex justify-center gap-2">
          <Tooltip
            arrow
            title="View Details"
            placement="right"
            TransitionComponent={Fade}
          >
            <div
              onClick={() => handleViewDetail(params.row.id)}
              className="p-2 my-2 rounded-lg text-black cursor-pointer border"
            >
              <MdOutlineInfo size={18} className="text-gray-600" />
            </div>
          </Tooltip>
        </div>
    }
  ];

  return (
    <div className="mx-4 md:mx-12 my-20 md:my-8">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="text-3xl font-semibold my-4">Inquiries</div>
      </div>
      <Breadcrumbs links={breadcrumbLinks} />

      <div className="relative bg-gradient-to-r from-blue-400 to-blue-800 rounded-xl p-4 mt-10 h-48 overflow-hidden">
        <div
          className="absolute right-0 lg:right-20 bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${talk})`,
            width: "350px",
            height: "350px",
            top: "-20px"
          }}
        />
        <div className="relative z-10 mt-0 md:mt-10 ml-2 lg:ml-10 text-blue-500 md:text-white bg-white md:bg-transparent  bg-opacity-60 p-12 md:p-4 rounded-xl w-ful md:w-fit">
          <div className="flex gap-2 ">
            <p className="text-5xl font-semibold">40</p>
            <p className="text-3xl font-semibold">+</p>
          </div>
          <p className="text-base">Total inquiries this month</p>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg my-10">
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
          rows={inquiriesData}
          columns={columns}
          autoHeight={true}
          getRowHeight={() => "auto"}
          pageSizeOptions={[10, 20, 50, 100]}
          getRowId={row => row.id}
        />
      </div>
    </div>
  );
};

export default Inquiries;
