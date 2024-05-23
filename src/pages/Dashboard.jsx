import React, { useState, useEffect } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { GoStack } from "react-icons/go";
import { MdOutlinePending } from "react-icons/md";
import { GoGoal } from "react-icons/go";

const dashboardData = [
  {
    icon: <IoChatbubbleEllipsesOutline />,
    amount: 16,
    title: "Inquiries",
    iconColor: "#3498DB",
    iconBg: "#E5FAFB",
    pcColor: "red-600"
  },
  {
    icon: <GoStack />,
    amount: "4",
    title: "Contracts", //TO BE IMPLEMENT IT NEEDS THE EMPLOYEE POSITION LIMITS
    iconColor: "#3498DB",
    iconBg: "#E5FAFB",
    pcColor: "red-600"
  },
  {
    icon: <MdOutlinePending />,
    amount: 10,
    title: "Ongoing Projects",
    iconColor: "#3498DB",
    iconBg: "#E5FAFB",
    pcColor: "red-600"
  },
  {
    icon: <GoGoal />,
    amount: "150 +",
    title: "Completed Projects",
    iconColor: "#3498DB",
    iconBg: "#E5FAFB",
    pcColor: "red-600"
  }
];

const Dashboard = () => {
  return (
    <div className="my-28 md:my-16">
      <div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center ">
          <div className="flex m-3 flex-wrap justify-center gap-2 items-center">
            <div className="bg-white  h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-2 bg-hero-pattern bg-no-repeat bg-cover bg-center">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-gray-400">Consultation</p>
                  <p className="text-3xl font-semibold">145</p>
                </div>
                <button
                  type="button"
                  className="bg-primary text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
                >
                  <BiSupport />
                </button>
              </div>
              <div className="mt-6">
                <div className="bg-primary text-white rounded-md p-2 w-20 text-center cursor-pointer hover:opacity-75">
                  View
                </div>
              </div>
            </div>
            {dashboardData.map(item =>
              <div
                key={item.title}
                className="bg-white h-44 dark:text-gray-200  w-56  p-4 pt-9 rounded-2xl drop-shadow-sm hover:bg-gradient-to-l from-blue-100 to-white hover:bg-gradient "
              >
                <button
                  type="button"
                  style={{
                    color: item.iconColor,
                    backgroundColor: item.iconBg
                  }}
                  className="text-2xl opacity-0.9 rounded-full  p-4 "
                >
                  {item.icon}
                </button>
                <p className="mt-3">
                  <span className="text-lg font-semibold">
                    {item.amount}
                  </span>
                </p>
                <p className="text-sm text-gray-400  mt-1">
                  {item.title}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
