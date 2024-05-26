import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import profile from "../assets/profile.png";
import { Divider } from "@mui/joy";
import { useParams, useNavigate } from "react-router-dom";
import { IoIosStarOutline, IoMdStar } from "react-icons/io";
import { consultationDummyData } from "../data/consultation";
import { IoCallOutline } from "react-icons/io5";
import { IoMailUnreadOutline } from "react-icons/io5";
import { AiOutlineDelete } from "react-icons/ai";
import { FaArrowLeft } from "react-icons/fa6";
import DraftEditor from "../components/DraftEditor";
import { IoIosSend } from "react-icons/io";
import { LuForward } from "react-icons/lu";

const ConsultationDetails = () => {
  const { id } = useParams();
  const [consultation, setConsultation] = useState(getConsultDataById(id));
  const navigate = useNavigate();

  function getConsultDataById(id) {
    return consultationDummyData.find(
      consultation => consultation.id === Number(id)
    );
  }

  function toggleStarStatus() {
    setConsultation(prevConsultation => ({
      ...prevConsultation,
      starStatus:
        prevConsultation.starStatus === "Starred" ? "Unstarred" : "Starred"
    }));
  }

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <div className="mx-4 md:mx-12 my-20 md:my-8">
      <div className="w-full lg:w-4/5 mx-auto mt-10">
        <div className="flex justify-between bg-white p-3 rounded-lg mb-4">
          <Tooltip
            title="Go Back"
            placement="bottom"
            TransitionComponent={Fade}
          >
            <div
              className="rounded-full p-4 cursor-pointer hover:bg-gray-100"
              onClick={handleGoBack}
            >
              <FaArrowLeft />
            </div>
          </Tooltip>

          <div className="flex gap-2">
            <Tooltip
              title="Mark as read"
              placement="bottom"
              TransitionComponent={Fade}
            >
              <div className="rounded-full p-4 cursor-pointer hover:bg-gray-100">
                <IoMailUnreadOutline size={20} />
              </div>
            </Tooltip>
            <Tooltip
              title="Schedule a call"
              placement="bottom"
              TransitionComponent={Fade}
            >
              <div className="rounded-full p-4 cursor-pointer hover:bg-gray-100">
                <IoCallOutline size={20} />
              </div>
            </Tooltip>
            <Tooltip
              title="Delete message"
              placement="bottom"
              TransitionComponent={Fade}
            >
              <div className="rounded-full p-4 cursor-pointer hover:bg-gray-100">
                <AiOutlineDelete size={20} />
              </div>
            </Tooltip>
          </div>
        </div>
        {consultation &&
          <div className="bg-white p-4 rounded-lg">
            <div className="flex justify-between my-4">
              <div className="flex gap-4 ">
                <div>
                  <img
                    src={profile}
                    className="h-12 w-12 self-center"
                    alt="Profile"
                  />
                </div>
                <div>
                  <p>
                    {consultation.name}
                  </p>
                  <p className="gap-2 text-sm text-gray-500">
                    {consultation.email} | {consultation.phone}
                  </p>
                </div>
              </div>
              <div>
                <p>
                  {consultation.date}
                </p>
                <p className="flex gap-2" onClick={toggleStarStatus}>
                  {consultation.starStatus}
                  {consultation.starStatus === "Starred"
                    ? <IoMdStar
                        size={20}
                        className="self-center cursor-pointer text-yellow-400"
                      />
                    : <IoIosStarOutline
                        size={20}
                        className="self-center cursor-pointer text-gray-500 hover:text-black"
                      />}
                </p>
              </div>
            </div>
            <Divider />
            <div>
              <div className="bg-blue-50 p-6 rounded-xl my-4 w-fit">
                {consultation.message}
              </div>
              <div className="mt-10">
                <DraftEditor />
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <div className="flex gap-2 bg-primary p-2 px-3 rounded-full  text-white hover:opacity-70 cursor-pointer">
                  <LuForward size={20} className="self-center" />
                  Assign to
                </div>
                <div className="flex gap-2 bg-primary p-2 px-3  rounded-full  text-white hover:opacity-70 cursor-pointer">
                  <IoIosSend size={20} className="self-center" />
                  Reply
                </div>
              </div>
            </div>
          </div>}
      </div>
    </div>
  );
};

export default ConsultationDetails;
