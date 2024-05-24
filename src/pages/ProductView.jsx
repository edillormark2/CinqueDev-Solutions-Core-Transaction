import React from "react";
import { generateLicenseKey } from "../data/product";
import { Divider } from "@mui/joy";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";

const ProductView = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const serializedObjectFromURL = queryParams.get('data');
  const data = JSON.parse(decodeURIComponent(serializedObjectFromURL));

  const breadcrumbLinks = [
    { to: "/dashboard", label: "Home" },
    { to: "/product", label: "Product" },
    { to: "", label: "Details" }
  ];

  return (
    <div className="mx-4 md:mx-12 my-20 md:my-8">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="text-3xl font-semibold my-4">Inquiries</div>
      </div>
      <Breadcrumbs links={breadcrumbLinks} />

      <div className="my-8">
        <div className="bg-white border p-8 transaction">
          <p className="text-3xl font-bold text-center">
            Transaction Summary
          </p>
          <p className="text-center">Cinquedev Solutions</p>
          <div className="mx-8 md:mx-28 mt-10">
            <Divider />
            <p>Date: {data.date}</p>
            <p>time: {data.time}</p>
            <p>Product: {data.product}</p>
            <p>License Type: {data.licenseType}</p>
            <p>License Key: {generateLicenseKey()}</p>
            <p>Price: {data.price}</p>
            <p>Total: {data.price}</p>

            <div className="mt-8">
              <Divider />
              <p className="font-semibold">Invoice Detail: </p>
              <p>Status: PAID</p>
              <p>Transaction ID: {data.id}</p>
              <p>Name: {data.name}</p>
              <p>Email: {data.email}</p>
              {
                data.licenseType === "Company" ? <p>Company: {data.company}</p> : <></>
              }
              <p>Country: {data.country}</p>
            </div>
            <div>

              <div className="mt-8">
                <Divider />
                <p className="font-semibold">Payment Detail: </p>
                <p>Card: {data.cardType}</p>
                <p>Card Number: {data.cardNumber}</p>
                <p>Expiration Date: {data.expiration}</p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductView;