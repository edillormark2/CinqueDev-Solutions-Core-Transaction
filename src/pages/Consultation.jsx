import React, { useState } from "react";
import { MdOutlineArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Divider } from "@mui/material";
import Breadcrumbs from "../components/Breadcrumbs.jsx";
import { consultationDummyData } from "../data/consultation";
import { IoIosStarOutline, IoMdStar, IoMdSearch } from "react-icons/io";
import dayjs from "dayjs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Consultation = () => {
  const navigate = useNavigate();
  const [consultationData, setConsultationData] = useState(
    consultationDummyData
  );
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState("Inbox");
  const [searchInput, setSearchInput] = useState("");
  const [selectedConsultations, setSelectedConsultations] = useState([]);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(consultationData.length / itemsPerPage);

  const handleNextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages - 1));
  };

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 0));
  };

  // Filter consultations based on the selected filter and search input
  const filteredConsultations = consultationData.filter(consultation => {
    const searchRegex = new RegExp(searchInput, "i");
    if (filter === "Unread") {
      return (
        consultation.messageStatus === "Unread" &&
        consultation.name.match(searchRegex)
      );
    } else if (filter === "Starred") {
      return (
        consultation.starStatus === "Starred" &&
        consultation.name.match(searchRegex)
      );
    } else {
      return consultation.name.match(searchRegex);
    }
  });

  const displayedConsultations = filteredConsultations.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const breadcrumbLinks = [
    { to: "/dashboard", label: "Home" },
    { to: "", label: "Consultations" }
  ];

  // Calculate counts
  const inboxCount = consultationData.length;
  const unreadCount = consultationData.filter(
    consultation => consultation.messageStatus === "Unread"
  ).length;
  const starredCount = consultationData.filter(
    consultation => consultation.starStatus === "Starred"
  ).length;

  // Handle star status toggle
  const toggleStarStatus = index => {
    const newConsultationData = [...consultationData];
    newConsultationData[index].starStatus =
      newConsultationData[index].starStatus === "Starred"
        ? "Unstarred"
        : "Starred";
    setConsultationData(newConsultationData);
  };

  // Handle search input change
  const handleSearchInputChange = event => {
    setSearchInput(event.target.value);
  };

  const selectAll = () => {
    if (selectedConsultations.length === displayedConsultations.length) {
      setSelectedConsultations([]);
    } else {
      setSelectedConsultations(
        displayedConsultations.map(
          (_, index) => currentPage * itemsPerPage + index
        )
      );
    }
  };

  const selectedData = index => {
    if (selectedConsultations.includes(index)) {
      setSelectedConsultations(selectedConsultations.filter(i => i !== index));
    } else {
      setSelectedConsultations([...selectedConsultations, index]);
    }
  };

  const goToConsultationDetails = id => {
    navigate(`/consultation/consultation-details/${id}`);
    window.scrollTo({ top: 0 });
  };

  return (
    <div className="mx-4 md:mx-12 my-20 md:my-8">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="text-3xl font-semibold my-4">Consultations</div>
      </div>
      <Breadcrumbs links={breadcrumbLinks} />

      <div className="flex flex-col md:flex-row justify-between mt-10">
        <div className="flex gap-4 component-transition">
          <div
            className={`flex gap-2 rounded-lg p-3 cursor-pointer hover:opacity-70 select-none ${filter ===
            "Inbox"
              ? "bg-blue-100 text-blue-500"
              : "bg-white"}`}
            onClick={() => setFilter("Inbox")}
          >
            <p
              className={`py-1 px-2 text-sm rounded-md ${filter === "Inbox"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-500"}`}
            >
              {inboxCount}
            </p>
            <p className="self-center font-semibold">Inbox</p>
          </div>
          <div
            className={`flex gap-2 rounded-lg p-3 cursor-pointer hover:opacity-70 select-none ${filter ===
            "Unread"
              ? "bg-blue-100 text-blue-500"
              : "bg-white"}`}
            onClick={() => setFilter("Unread")}
          >
            <p
              className={`py-1 px-2 text-sm rounded-md ${filter === "Unread"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-500"}`}
            >
              {unreadCount}
            </p>
            <p className="self-center">Unread</p>
          </div>
          <div
            className={`flex gap-2 rounded-lg p-3 cursor-pointer hover:opacity-70 select-none ${filter ===
            "Starred"
              ? "bg-blue-100 text-blue-500"
              : "bg-white"}`}
            onClick={() => setFilter("Starred")}
          >
            <p
              className={`py-1 px-2 text-sm rounded-md ${filter === "Starred"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-500"}`}
            >
              {starredCount}
            </p>
            <p className="self-center">Starred</p>
          </div>
        </div>
        <div className="relative w-full md:w-60 self-center my-4 md:my-0">
          <input
            placeholder="Search..."
            className="form-control w-full pl-4 py-2 rounded-xl border text-sm sm:text-base pr-8 bg-white"
            value={searchInput}
            onChange={handleSearchInputChange}
          />
          <div className="absolute inset-y-0 right-2 flex items-center pr-2 cursor-pointer text-gray-500">
            <IoMdSearch />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg py-4 mt-6 overflow-x-auto">
        <div className="flex justify-between mx-4 mb-4">
          <div className="flex gap-2 self-center">
            <input
              type="checkbox"
              onChange={selectAll}
              checked={
                selectedConsultations.length ===
                  displayedConsultations.length &&
                displayedConsultations.length > 0
              }
              className="cursor-pointer h-5 w-5 my-auto border-gray-100"
            />
            <div>
              {selectedConsultations.length > 0 &&
                <div className="flex self-center gap-2 text-gray-500 text-sm hover:text-red-500 cursor-pointer">
                  <RiDeleteBin6Line size={17} className="self-center" />
                  {selectedConsultations.length ===
                  displayedConsultations.length
                    ? <p>Delete all</p>
                    : <p>Delete Selected</p>}
                </div>}
            </div>
          </div>
          <div className="flex gap-4">
            <div className="self-center select-none text-sm">{`${currentPage *
              itemsPerPage +
              1}-${Math.min(
              (currentPage + 1) * itemsPerPage,
              filteredConsultations.length
            )} of ${filteredConsultations.length}`}</div>
            <div className="flex gap-2">
              <div
                className={`p-2 border rounded-lg ${currentPage === 0
                  ? "text-gray-400 cursor-default"
                  : "cursor-pointer hover:bg-blue-50"}`}
                onClick={currentPage !== 0 ? handlePreviousPage : undefined}
              >
                <MdOutlineArrowBackIos />
              </div>
              <div
                className={`p-2 border rounded-lg ${currentPage ===
                totalPages - 1
                  ? "text-gray-400 cursor-default"
                  : "cursor-pointer hover:bg-blue-50"}`}
                onClick={
                  currentPage !== totalPages - 1 ? handleNextPage : undefined
                }
              >
                <MdArrowForwardIos />
              </div>
            </div>
          </div>
        </div>
        <Divider />
        <div className="min-w-[900px]">
          {displayedConsultations.map((consultation, index) =>
            <div
              key={index}
              onClick={() => goToConsultationDetails(consultation.id)}
              className="cursor-pointer hover:bg-blue-50"
            >
              <div className="flex flex-row py-4 px-4">
                <div className="flex-1 max-w-[300px]">
                  <div className="flex gap-4">
                    <input
                      type="checkbox"
                      onChange={() =>
                        selectedData(currentPage * itemsPerPage + index)}
                      checked={selectedConsultations.includes(
                        currentPage * itemsPerPage + index
                      )}
                      className="cursor-pointer h-4 w-4 my-auto border-gray-100"
                    />
                    {consultation.starStatus === "Starred"
                      ? <IoMdStar
                          size={20}
                          className="self-center cursor-pointer text-yellow-400"
                          onClick={() =>
                            toggleStarStatus(
                              currentPage * itemsPerPage + index
                            )}
                        />
                      : <IoIosStarOutline
                          size={20}
                          className="self-center cursor-pointer text-gray-500 hover:text-black"
                          onClick={() =>
                            toggleStarStatus(
                              currentPage * itemsPerPage + index
                            )}
                        />}
                    <p className="font-semibold">
                      {consultation.name}
                    </p>
                  </div>
                </div>
                <div className="flex-1 max-w-[2000px]">
                  {consultation.message}
                </div>
                <div className="flex-1 text-end max-w-[150px] text-sm font-bold text-gray-600">
                  {dayjs(consultation.date).format("MMM DD")}
                </div>
              </div>
              <Divider />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Consultation;
