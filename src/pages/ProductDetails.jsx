import React from "react";
import { generateLicenseKey } from "../data/product.js";
import { Divider } from "@mui/joy";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import amex from "../assets/card/amex.svg";
import discover from "../assets/card/discover.svg";
import jcb from "../assets/card/jcb.svg";
import maestro from "../assets/card/maestro.svg";
import mastercard from "../assets/card/mastercard.svg";
import visa from "../assets/card/visa.svg";

const CardIcon = ({ cardType }) => {
  let icon;

  if (cardType === "Visa") {
    icon = <img src={visa} width={75}/>
  } else if (cardType === "MasterCard") {
    icon = <img src={mastercard} width={75}/>
  } else if (cardType === "American Express") {
    icon = <img src={amex} width={75}/>
  } else if (cardType === "Discover") {
    icon = <img src={discover} width={75}/>
  } else if (cardType === "JCB") {
    icon = <img src={jcb} width={75}/>
  } else if (cardType === "Maestro") {
    icon = <img src={maestro} width={75}/>
  } else {
    icon = "Unknown Card Type";
  }

  return (
    <div className="flex items-end mr-4">
      {icon}
    </div>
  );
};

const ProductView = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const serializedObjectFromURL = queryParams.get('data');
  const data = JSON.parse(decodeURIComponent(serializedObjectFromURL));

  const breadcrumbLinks = [
    { to: "/dashboard", label: "Home" },
    { to: "/orders", label: "Orders" },
    { to: "", label: "Summary" }
  ];

  return (
    <div className="mx-4 md:mx-12 my-20 md:my-8">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="text-3xl font-semibold my-4">Transaction Summary</div>
      </div>
      <Breadcrumbs links={breadcrumbLinks} />

      <div className="mt-10 flex flex-col lg:flex-row gap-4">
        <div className="bg-white rounded-lg p-4 lg:p-8 w-full">
          <div className="bg-blue-50 px-4 py-2 rounded-lg flex justify-between mb-4 gap-4">
            <div className=" text-xl font-semibold self-center ">
              Overview
            </div>
          </div>

          <div className="ml-4">
            <div className="flex gap-2 my-3">
              <p className="w-1/2 font-semibold">Date</p>
              <p className="w-1/2">
                {`${data.date}, ${data.time}`}
              </p>
            </div>
            <Divider />
            <div className="flex gap-2 my-3">
              <p className="w-1/2 font-semibold">Product</p>
              <p className="w-1/2 self-start">
                {data.product}
              </p>
            </div>
            <Divider />
            <div className="flex gap-2 my-3">
              <p className="w-1/2 font-semibold">License Type</p>
              <p className="w-1/2">
                {data.licenseType}
              </p>
            </div>
            <Divider />
            <div className="flex gap-2 my-3">
              <p className="w-1/2 font-semibold">License Key</p>
              <p className="w-1/2 self-start">
                {generateLicenseKey()}
              </p>
            </div>
            <Divider />
            <div className="flex gap-2 my-3">
              <p className="w-1/2 font-semibold">Price</p>
              <p className="w-1/2 self-start">
                {`₱ ${data.price.toLocaleString()}`}
              </p>
            </div>
          </div>

          <div className="mt-12">
            <p className="bg-blue-50 px-4 py-2 rounded-lg text-xl font-semibold mb-4 ">
              Invoice Detail
            </p>
            <div className="ml-4">
              <div className="flex gap-2 my-3">
                <p className="w-1/2 font-semibold">Transaction ID</p>
                <p className="w-1/2">
                  {data.id}
                </p>
              </div>
              <Divider />
              <div className="flex gap-2 my-3">
                <p className="w-1/2 font-semibold">Name</p>
                <p className="w-1/2">
                  {data.name}
                </p>
              </div>
              <Divider />
              <div className="flex gap-2 my-3">
                <p className="w-1/2 font-semibold">Email</p>
                <p className="w-1/2">
                  {data.email}
                </p>
              </div>
              {
                data.licenseType === "Company" ?
                  <div>
                    <Divider />
                    <div className="flex gap-2 my-3">
                      <p className="w-1/2 font-semibold">Company</p>
                      <p className="w-1/2">
                        {data.company}
                      </p>
                    </div>
                  </div>
                  : <></>
              }
              <Divider />
              <div className="flex gap-2 my-3">
                <p className="w-1/2 font-semibold">Country</p>
                <p className="w-1/2">
                  {data.country}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div cl assName="flex flex-col">

            <div className="bg-white rounded-lg p-4 w-full">
              <p className="bg-blue-50 px-4 py-2 rounded-lg text-xl font-semibold mt-4 mb-8 ">
                Payment Details
              </p>
              <div className="my-2 py-4 rounded-md outline outline-1 outline-gray-400">
                <div className="px-4 mt-2">
                  {data.cardType}
                </div>
                <div className="flex justify-between mt-4 px-2">
                  <div>
                    <p className="m-2">
                      {data.cardNumber}
                    </p>
                    <p className="m-2">
                      {data.expiration}
                    </p>
                  </div>
                  <CardIcon cardType={data.cardType} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductView;