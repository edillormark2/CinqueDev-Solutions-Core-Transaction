import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { softwareSupportData } from "../data/softwaresupport.js";
import { useParams, useLocation } from "react-router-dom";
import { Divider } from "@mui/joy";
import { FiCalendar } from "react-icons/fi";
import { GoGoal } from "react-icons/go";
import visa from "../assets/visa.png";
import dayjs from "dayjs";

const SupportDetails = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const support = softwareSupportData.find(sup => sup.id === parseInt(id));

  if (!support) {
    return <div>Support details not found</div>;
  }

  const color = state.color || "bg-gray-200"; // Default color if not provided

  const calculateProgress = (startDate, endDate) => {
    const currentYear = dayjs().year();
    const start = dayjs(`${startDate} ${currentYear}`, "MMM D YYYY");
    const end = dayjs(`${endDate} ${currentYear}`, "MMM D YYYY");
    const today = dayjs();

    if (end.isBefore(start)) {
      end.add(1, "year");
    }

    if (today.isAfter(end)) return 100;
    if (today.isBefore(start)) return 0;

    const totalDuration = end.diff(start, "day");
    const elapsedDuration = today.diff(start, "day");

    return Math.round(elapsedDuration / totalDuration * 100);
  };

  const breadcrumbLinks = [
    { to: "/dashboard", label: "Home" },
    { to: "/ongoing-support", label: "Ongoing Support" },
    { to: "", label: "Support details" }
  ];

  return (
    <div className="mx-4 xl:mx-12 my-20 md:my-8">
      <div>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="my-4">
            <p className="text-3xl font-semibold">Support details</p>
          </div>
        </div>
        <Breadcrumbs links={breadcrumbLinks} />

        <div className="mt-10 flex flex-col lg:flex-row gap-4 text-sm md:text-base">
          <div className="bg-white rounded-lg p-4 lg:p-8 w-full">
            <div className="bg-blue-50 px-4 py-2 rounded-lg flex justify-between mb-4 gap-4">
              <div className=" text-xl font-semibold self-center ">
                Overview
              </div>
              <div className={`${color} rounded-lg text-white p-2 w-auto`}>
                {support.logo}
              </div>
            </div>

            <div className="ml-0 md:ml-4">
              <div className="flex gap-2 my-3">
                <p className="w-1/2 font-semibold">Company name</p>
                <p className="w-1/2">
                  {support.companyName}
                </p>
              </div>
              <Divider />
              <div className="flex gap-2 my-3">
                <p className="w-1/2 font-semibold">System name</p>
                <p className="w-1/2 self-start">
                  {support.systemName}
                </p>
              </div>
              <Divider />
              <div className="flex gap-0 md:gap-2 my-3">
                <p className="w-1/2 font-semibold">Email</p>
                <p className="w-1/2 self-start overflow-hidden text-ellipsis whitespace-nowrap">
                  {support.email}
                </p>
              </div>
            </div>

            <div className="mt-12">
              <p className="bg-blue-50 px-4 py-2 rounded-lg text-xl font-semibold mb-4 ">
                Status
              </p>
              <div className="ml-4">
                <div className="flex gap-2 my-3">
                  <p className="w-1/2 font-semibold">Last update</p>
                  <p className="w-1/2">
                    {support.updateStatus}
                  </p>
                </div>
                <Divider />
                <div className="flex gap-2 my-3">
                  <p className="w-1/2 font-semibold">Start date</p>
                  <p className="w-1/2">
                    {support.startDate}
                  </p>
                </div>
                <Divider />
                <div className="flex gap-2 my-3">
                  <p className="w-1/2 font-semibold">End date</p>
                  <p className="w-1/2">
                    {support.endDate}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <p className="bg-blue-50 px-4 py-2 rounded-lg text-xl font-semibold mb-4 ">
                Assigned Dev Support
              </p>
              <div className="flex flex-wrap gap-8 my-8 ml-4">
                {support.teamAssigned.map((member, index) =>
                  <div key={index} className="flex items-center gap-2">
                    <img
                      src={member.image}
                      alt={`Member ${index}`}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-gray-600 font-semibold">
                      {member.name}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex flex-col">
              <div className="bg-white rounded-lg p-4 w-full">
                <div>
                  <p className="bg-blue-50 px-4 py-2 rounded-lg text-xl font-semibold mt-4 mb-8 ">
                    Selected Plan
                  </p>
                  {support.updateStatus === "Subscription expired"
                    ? <div className="px-2">
                        <div className="flex justify-center mt-4 text-red-500 bg-red-100 rounded-lg p-2">
                          {support.updateStatus}
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 mt-4">
                          <div
                            className="bg-green-500 h-1 rounded-full"
                            style={{
                              width: `${calculateProgress(
                                support.startDate,
                                support.endDate
                              )}%`
                            }}
                          />
                        </div>
                        <div className="flex justify-between mt-4 text-gray-500">
                          <p className="flex gap-2">
                            <FiCalendar className="self-center" />
                            Start: {dayjs(support.startDate).format("MMM D")}
                          </p>
                          <p className="flex gap-2">
                            <GoGoal className="self-center" />
                            End: {dayjs(support.endDate).format("MMM D")}
                          </p>
                        </div>
                      </div>
                    : <div className="px-2">
                        <div className="flex justify-between mt-4">
                          <p className="border py-1 px-2 rounded-lg border-green-300">
                            {support.subsPlan}
                          </p>
                          <p className="py-1 px-2 bg-gray-200 rounded-lg">
                            {support.selectedPlan}
                          </p>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1 dark:bg-gray-700 mt-4">
                          <div
                            className="bg-green-500 h-1 rounded-full"
                            style={{
                              width: `${calculateProgress(
                                support.startDate,
                                support.endDate
                              )}%`
                            }}
                          />
                        </div>
                        <div className="flex justify-between mt-4 text-gray-500">
                          <p className="flex gap-2">
                            <FiCalendar className="self-center" />
                            Start: {dayjs(support.startDate).format("MMM D")}
                          </p>
                          <p className="flex gap-2">
                            <GoGoal className="self-center" />
                            End: {dayjs(support.endDate).format("MMM D")}
                          </p>
                        </div>
                      </div>}
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 mt-4 w-full">
                <div>
                  <p className="bg-blue-50 px-4 py-2 rounded-lg text-xl font-semibold mt-4 mb-8 ">
                    Payment Option
                  </p>
                  <div className="flex justify-between mt-4 px-2">
                    <div>
                      <p className=" py-1 px-2 bg-gray-200 rounded-lg">
                        {support.paymentOption}
                      </p>
                      <p className="m-2">
                        {support.cardNo}
                      </p>
                    </div>
                    <div className="border p-1 rounded-md self-center">
                      <img src={visa} className="w-16 h-10" alt="Visa" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportDetails;
