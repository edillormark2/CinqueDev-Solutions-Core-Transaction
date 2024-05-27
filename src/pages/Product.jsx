import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { generateFakeProductSales } from "../data/product";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { DataGrid } from "@mui/x-data-grid";
import { gridClasses } from "@mui/x-data-grid";
import { FaCashRegister } from "react-icons/fa6";
import { FaPesoSign } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineInfo } from "react-icons/md";
import { Tooltip } from "@mui/material";
import Fade from "@mui/material/Fade";
import PieChart from "../components/charts/PieChart.jsx";
import { GoDotFill } from "react-icons/go";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import LineChart from "../components/charts/LineChart";
import { FaRegCalendar } from "react-icons/fa";

const Product = () => {
  const navigate = useNavigate();
  const [productSalesData, setRroductSalesData] = useState(
    generateFakeProductSales(256)
  );

  const handleViewDetail = id => {
    const sales = productSalesData.find(item => item.id === id);
    const serializedObject = encodeURIComponent(JSON.stringify(sales));
    navigate(`/order/detail?data=${serializedObject}`);
  };

  function getTotalSales(productSalesData) {
    if (!Array.isArray(productSalesData)) {
      throw new Error("Invalid input: productSalesData must be an array.");
    }

    const totalSales = productSalesData.reduce((total, product) => {
      if (typeof product.price !== "number") {
        throw new Error(
          "Invalid input: Each object in productSalesData must have a numeric price field."
        );
      }
      return total + product.price;
    }, 0);

    return totalSales.toLocaleString();
  }

  const breadcrumbLinks = [
    { to: "/dashboard", label: "Home" },
    { to: "", label: "Orders" }
  ];

  const columns = [
    {
      field: "id",
      headerName: "Transaction ID",
      flex: 1,
      width: 150,
      minWidth: 120
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
      minWidth: 100,
      renderCell: params =>
        <p>
          {`₱ ${params.row.price.toLocaleString()}`}
        </p>
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      minWidth: 120,
      renderCell: params =>
        <div className="flex flex-col pb-4">
          <p>
            {params.row.date}
          </p>
          <p className=" text-gray-500 overflow-hidden text-ellipsis">
            {params.row.time}
          </p>
        </div>
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 120,
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
      field: "company",
      headerName: "Company / Country",
      flex: 1,
      minWidth: 120,
      renderCell: params =>
        <div className="flex flex-col pb-4">
          <p className="overflow-hidden text-ellipsis">
            {params.row.licenseType === "Company" ? params.row.company : ""}
          </p>
          <p
            className={`${params.row.licenseType === "Company"
              ? "text-gray-500"
              : ""} overflow-hidden text-ellipsis`}
          >
            {params.row.country}
          </p>
        </div>
    },
    {
      field: "product",
      headerName: "Product",
      minWidth: 200,
      flex: 1
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
      <div className="flex justify-between">
        <div className="text-3xl font-semibold my-4">Orders</div>
        <div className="flex gap-4 items-center ">
          <div className="flex gap-2 rounded-lg hover:text-primary text-gray-500 p-2 bg-white  cursor-pointer">
            <FaRegCalendar className="self-center " /> This month
          </div>
          <div className="rounded-lg p-2 bg-white cursor-pointer text-gray-500 hover:text-primary">
            <MdOutlineFileDownload size={22} className="self-center " />
          </div>
        </div>
      </div>
      <Breadcrumbs links={breadcrumbLinks} />
      <div className="flex flex-col lg:flex-row gap-4 mt-8">
        <div className="bg-white p-4 h-72 rounded-xl w-full lg:w-2/5">
          <Typography className="flex gap-2 text-base font-semibold text-gray-700">
            <GoDotFill className="text-green-500 self-center" /> Top Selling
            Products
          </Typography>
          <PieChart />
        </div>
        <div className="bg-white p-2 rounded-xl w-full min-w-64 h-72 ">
          <div className="flex justify-between p-2">
            <div>
              <Typography className="flex gap-2 text-base font-semibold text-gray-700">
                <GoDotFill className="text-green-500 self-center" />Total
                Revenue
              </Typography>
              <Typography className="ml-6 font-bold text-base text-primary">
                ₱ 559,342.32
              </Typography>
            </div>
            <div>
              <IconButton>
                <DownloadOutlinedIcon size={22} className="text-primary" />
              </IconButton>
            </div>
          </div>
          <Box height="240px" m="-30px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg my-4">
        <div className="flex gap-2 mb-4">
          <div className="relative w-full ">
            <div className="absolute inset-y-0 left-2 flex items-center pl-2 cursor-pointer text-gray-500">
              <IoMdSearch size={22} />
            </div>
            <input
              placeholder="Search order..."
              className=" w-full pl-14 py-2 rounded-full  text-sm sm:text-base pr-4 bg-white"
            />
          </div>
        </div>
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
          rows={productSalesData}
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

export default Product;
