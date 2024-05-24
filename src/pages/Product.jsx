import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { generateFakeProductSales } from "../data/product";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { DataGrid } from "@mui/x-data-grid";
import { gridClasses } from "@mui/x-data-grid";
import { FaCashRegister } from "react-icons/fa6";
import { FaPesoSign } from "react-icons/fa6";




const Product = () => {
  const navigate = useNavigate();
  const [productSalesData, setRroductSalesData] = useState([]);
  useEffect(() => {
    setRroductSalesData(generateFakeProductSales(256));
  }, []);

  const handleViewDetail = (id) => {
    const sales = productSalesData.find(item => item.id === id);
    const serializedObject = encodeURIComponent(JSON.stringify(sales));
    navigate(`/product/detail?data=${serializedObject}`)
  };

  function getTotalSales(productSalesData) {
    if (!Array.isArray(productSalesData)) {
      throw new Error('Invalid input: productSalesData must be an array.');
    }
  
    const totalSales = productSalesData.reduce((total, product) => {
      if (typeof product.price !== 'number') {
        throw new Error('Invalid input: Each object in productSalesData must have a numeric price field.');
      }
      return total + product.price;
    }, 0);
  
    return totalSales.toLocaleString();
  }

  const breadcrumbLinks = [
    { to: "/dashboard", label: "Home" },
    { to: "", label: "Product" }
  ];

  const columns = [
    {
      field: "price",
      headerName: "Price",
      width: 100,
      renderCell: (params) => (
        <p>
          {`₱ ${params.row.price.toLocaleString()}`}
        </p>
      )
    },
    {
      field: "id",
      headerName: "Transaction ID",
      width: 125,
    },
    {
      field: "date",
      headerName: "Date",
      width: 175,
      renderCell: (params) => (
        <div className="flex flex-col pb-4">
          <p>
            {params.row.date}
          </p>
          <p className=" text-gray-500 overflow-hidden text-ellipsis">
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
      field: "company",
      headerName: "Company / Country",
      flex: 1,
      minWidth: 225,
      renderCell: (params) => (
        <div className="flex flex-col pb-4">
          <p className="overflow-hidden text-ellipsis">
            {params.row.licenseType === 'Company' ? params.row.company : ""}
          </p>
          <p className={`${params.row.licenseType === 'Company' ? "text-gray-500" : ""} overflow-hidden text-ellipsis`}>
            {params.row.country}
          </p>
        </div>
      )
    },
    {
      field: "product",
      headerName: "Product",
      flex: 1,
      minWidth: 200,
    },
  ];

  return (
    <div className="mx-4 md:mx-12 my-20 md:my-8">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="text-3xl font-semibold my-4">Product</div>
      </div>
      <Breadcrumbs links={breadcrumbLinks} />

      <div className="mt-8 flex flex-wrap lg:flex-nowrap gap-4">
        <div className="flex gap-4 bg-blue-500 p-4 rounded-xl w-full md:w-80 shadow-2xl shadow-primary">
          <div className="bg-white px-3 py-1 rounded-xl text-blue-500 flex justify-center ">
            <FaPesoSign size={28} className="self-center items-center" />
          </div>
          <div>
            <p className="text-2xl font-semibold text-white">
              {getTotalSales(productSalesData)}
            </p>
            <p className="  text-white">Total Revenue</p>
          </div>
        </div>
        <div className="flex gap-4 bg-white p-4 rounded-xl w-full md:w-80">
          <div className="bg-blue-100 px-3 py-1 rounded-xl text-blue-500 flex justify-center ">
            <FaCashRegister size={28} className="self-center items-center" />
          </div>
          <div>
            <p className="text-2xl font-semibold">
              {productSalesData.length}
            </p>
            <p className=" text-gray-500">Total Sales</p>
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
          rows={productSalesData}
          columns={columns}
          autoHeight={true}
          getRowHeight={() => "auto"}
          pageSizeOptions={[10, 20, 50, 100]}
          getRowId={row => row.id}
          onRowClick={(row) => { handleViewDetail(row.id) }}
        />
      </div>

    </div>
  )
}

export default Product;