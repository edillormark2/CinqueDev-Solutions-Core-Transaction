import { React, useState, useEffect } from "react";
import { generateFakeInquiries, getStatusCount } from "../data/inquiries";
import StatusChip from "../components/StatusChip";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { gridClasses } from "@mui/x-data-grid";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { GoGoal } from "react-icons/go";
import { MdDoneOutline } from "react-icons/md";
import { MdHandshake } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";

const Inquiries = () => {
  const navigate = useNavigate();
  const [inquiriesData, setInquiriesData] = useState(generateFakeInquiries(43));

  const handleViewDetail = (id) => {
    const inquiry = inquiriesData.find(item => item.id === id);
    const serializedObject = encodeURIComponent(JSON.stringify(inquiry));
    navigate(`/inquiries/detail?data=${serializedObject}`)
  };

  const breadcrumbLinks = [
    { to: "/dashboard", label: "Home" },
    { to: "", label: "Inquiries" }
  ];

  const columns = [
    {
      field: "name",
      headerName: "Name",
      width: 250,
      renderCell: (params) => (
        <div className="flex flex-col pb-4">
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
      field: "country",
      headerName: "Country",
      flex: 1,
      minWidth: 200,
    },
    {
      field: "budget",
      headerName: "Budget",
      flex: 1,
      minWidth: 175,
    },
    {
      field: "service",
      headerName: "Service",
      flex: 1,
      minWidth: 250,
    },
    {
      field: "status",
      headerName: "Status",
      headerAlign: 'center',
      flex: 1,
      minWidth: 150,
      renderCell: (params) => (
        <div className="flex justify-center items-center h-full">
          <StatusChip text={params.row.status} />
        </div>
      )
    },
  ];

  return (
    <div className="mx-4 md:mx-12 my-20 md:my-8">
      <div className="my-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="text-3xl font-semibold my-4">Inquiries</div>
        </div>
      </div>
      <Breadcrumbs links={breadcrumbLinks} />

      <div className="mt-8 flex flex-wrap lg:flex-nowrap gap-4">
        <div className="flex gap-4 bg-blue-500 p-4 rounded-xl w-full md:w-80 shadow-2xl shadow-primary">
          <div className="bg-white px-3 py-1 rounded-xl text-blue-500 flex justify-center ">
            <GoGoal size={28} className="self-center items-center" />
          </div>
          <div>
            <p className="text-2xl font-semibold text-white">
              {inquiriesData.length}
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
              {getStatusCount(inquiriesData, "Completed")}
            </p>
            <p className=" text-gray-500">Completed</p>
          </div>
        </div>
        <div className="flex gap-4 bg-white p-4 rounded-xl w-full md:w-80">
          <div className="bg-blue-100 px-3 py-1 rounded-xl text-blue-500 flex justify-center ">
            <MdHandshake size={28} className="self-center items-center" />
          </div>
          <div>
            <p className="text-2xl font-semibold">
            {getStatusCount(inquiriesData, "Accepted")}
            </p>
            <p className=" text-gray-500">Accepted</p>
          </div>
        </div>
        <div className="flex gap-4 bg-white p-4 rounded-xl w-full md:w-80">
          <div className="bg-blue-100 px-3 py-1 rounded-xl text-blue-500 flex justify-center ">
            <MdAccessTime size={28} className="self-center items-center" />
          </div>
          <div>
            <p className="text-2xl font-semibold">
            {getStatusCount(inquiriesData, "In Progress")}
            </p>
            <p className=" text-gray-500">In Progress</p>
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
          rows={inquiriesData}
          columns={columns}
          autoHeight={true}
          getRowHeight={() => "auto"}
          pageSizeOptions={[10, 20, 50, 100]}
          getRowId={row => row.id}
          onRowClick={(row) => { handleViewDetail(row.id) }}
        />
      </div>
    </div>
  );
};

export default Inquiries;
