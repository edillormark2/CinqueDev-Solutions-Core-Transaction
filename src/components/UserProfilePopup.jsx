import React, { useEffect, useState } from "react";
import Divider from "@mui/material/Divider";
import { IoSettingsOutline } from "react-icons/io5";
import { VscSignOut } from "react-icons/vsc";
import profile from "../assets/profile.png";

const UserProfilePopup = ({ closePopup }) => {
  const handleSignOut = () => {};

  return (
    <div className="bg-white p-4 rounded-xl drop-shadow-xl border mt-3 border-gray-300 w-72 relative md:mt-0">
      <div className="flex items-center justify-center mb-4">
        <div className="relative">
          <img
            src={profile}
            alt="profile"
            className="h-20 w-20 rounded-full object-cover mb-2"
          />
          {/* Green dot for active status */}
          <div className="absolute bottom-2 right-3 transform translate-x-1/2 -translate-y-1/2">
            <div className="h-3 w-3 bg-green-500 rounded-full" />
          </div>
        </div>
      </div>
      <div className="text-center mb-4">
        <p className="text-base font-semibold">Lelouch Lamperouge</p>
        <p className="uppercase text-sm  text-gray-500">Admin</p>
      </div>

      <Divider />

      <div className="flex items-center w-full p-2 bg-white hover:bg-gray-100 rounded-full mb-1 mt-4 cursor-pointer">
        <div className="p-2 bg-gray-300 rounded-full w-10 flex justify-center items-center">
          <IoSettingsOutline size={22} /> {/* Adjusted size of the icon */}
        </div>
        <span className="ml-2">Profile Settings</span>
      </div>

      <div
        onClick={handleSignOut}
        className="flex items-center w-full p-2 bg-white hover:bg-gray-100 rounded-full mb-1 cursor-pointer"
      >
        <div className="p-2 bg-gray-300 rounded-full w-10 flex justify-center items-center">
          <VscSignOut size={22} /> {/* Adjusted size of the icon */}
        </div>
        <span className="ml-2">Log out</span>
      </div>
    </div>
  );
};

export default UserProfilePopup;
