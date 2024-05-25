import React, { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { BsDot } from "react-icons/bs";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { GoStack } from "react-icons/go";
import { MdOutlineShoppingCart } from "react-icons/md";

const NotificationsPopup = ({ closePopup }) => {
  return (
    <div className="bg-white rounded-xl drop-shadow-xl border mt-3 border-gray-300 w-full max-w-96 relative">
      <div className="flex justify-between px-4 py-2">
        <p className="font-semibold">Notifications</p>
        <p className="flex gap-1 text-gray-500 text-sm cursor-pointer hover:text-primary self-center">
          <IoIosCheckmarkCircle className="self-center" />Mark all as read
        </p>
      </div>
      <Divider />
      <div className="overflow-auto h-96">
        <div className="flex relative gap-4 p-4 hover:bg-gray-100 cursor-pointer">
          <BsDot className="absolute left-0 top-8 text-green-500" size={22} />
          <div className="ml-2 p-4 bg-blue-400 rounded-full text-white">
            <BiSupport size={22} />
          </div>
          <div>
            <p className="font-semibold">3 clients booked a consultation</p>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
        </div>
        <div className="flex relative gap-4 p-4 hover:bg-gray-100 cursor-pointer">
          <BsDot className="absolute left-0 top-8 text-green-500" size={22} />
          <div className="ml-2 p-4 bg-orange-400 rounded-full text-white">
            <IoChatbubbleEllipsesOutline size={22} />
          </div>
          <div>
            <p className="font-semibold">1 new message inquiry</p>
            <p className="text-sm text-gray-500">8 hours ago</p>
          </div>
        </div>
        <div className="flex relative gap-4 p-4 hover:bg-gray-100 cursor-pointer">
          <BsDot className="absolute left-0 top-8 text-green-500" size={22} />
          <div className="ml-2 p-4 bg-violet-400 rounded-full text-white">
            <GoStack size={22} />
          </div>
          <div>
            <p className="font-semibold">4 contracts signed</p>
            <p className="text-sm text-gray-500">12 hours ago</p>
          </div>
        </div>
        <div className="flex relative gap-4 p-4 hover:bg-gray-100 cursor-pointer">
          <BsDot className="absolute left-0 top-8 text-green-500" size={22} />
          <div className="ml-2 p-4 bg-gray-400 rounded-full text-white">
            <MdOutlineShoppingCart size={22} />
          </div>
          <div>
            <p className="font-semibold">1 new software purchased</p>
            <p className="text-sm text-gray-500">1 day ago</p>
          </div>
        </div>
        <div className="flex relative gap-4 p-4 hover:bg-gray-100 cursor-pointer">
          <div className="ml-2 p-4 bg-blue-400 rounded-full text-white">
            <BiSupport size={22} />
          </div>
          <div>
            <p className="font-semibold">2 clients booked a consultation</p>
            <p className="text-sm text-gray-500">1 day ago</p>
          </div>
        </div>
        <div className="flex relative gap-4 p-4 hover:bg-gray-100 cursor-pointer">     
          <div className="ml-2 p-4 bg-blue-400 rounded-full text-white">
            <BiSupport size={22} />
          </div>
          <div>
            <p className="font-semibold">1 client booked a consultation</p>
            <p className="text-sm text-gray-500">4 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsPopup;
