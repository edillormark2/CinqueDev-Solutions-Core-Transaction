import { React, useState } from "react";
import { Divider, Table, Button } from "@mui/joy";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlinePersonAdd } from "react-icons/md";

import Assign from "../components/modals/Assign";
import Reply from "../components/modals/Message";
import { consultationDummyData } from "../data/consultation";

const Consultation = () => {
  const [openAssignModal, setOpenAssignModal] = useState(false);

  const [openReplyModal, setOpenReplyModal] = useState(false);
  const [email, setEmail] = useState("empty");

  return (
    <div className="my-28 md:my-16 mx-10 md:mx-16 ">
      <h1 className="text-2xl font-semibold mb-2 ">Consultation</h1>
      <Divider />
      <Table stripe="odd" variant="plain">
        <thead>
          <tr>
            <th style={{ width: "12%" }}>Date</th>
            <th style={{ width: "20%" }}>Name</th>
            <th style={{ width: "30%" }}>Message</th>
            <th style={{ width: "20%" }}>Assignees</th>
            <th style={{ width: "20%", textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {consultationDummyData.map((data, index) => {
            return (
              <tr key={index} >
                <td className="h-auto content-start">
                  <p className="font-semibold">
                    {data.date}
                  </p>
                  <p className=" text-gray-500">
                    {data.time}
                  </p>
                </td>
                <td className="h-auto content-start">
                  <p className="font-semibold">
                    {data.name}
                  </p>
                  <p className=" text-gray-500">
                    {data.email}
                  </p>
                  <p className=" text-gray-500">
                    {data.phone}
                  </p>
                </td>
                <td>
                  {data.message}
                </td>
                <td
                  className="font-semibold hover:cursor-pointer"
                  onClick={() => setOpenAssignModal(true)}
                >
                  <p>
                    {data.assignees}
                  </p>
                </td>
                <td>
                  <div className="flex gap-2 justify-center">
                    <Button
                      sx={{ backgroundColor: "navy" }}
                      onClick={() => setOpenAssignModal(true)}
                    >
                      <MdOutlinePersonAdd size={24} />
                    </Button>
                    <Button
                      sx={{ backgroundColor: "navy" }}
                      onClick={() => {
                        setOpenReplyModal(true);
                        setEmail(data.email);
                      }}
                    >
                      <MdOutlineMailOutline size={24} />
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <div>
        <Assign
          title="Assign Employee"
          openModal={openAssignModal}
          setOpenModal={setOpenAssignModal}
        />
        <Reply
          title="Reply"
          email={email}
          openModal={openReplyModal}
          setOpenModal={setOpenReplyModal}
        />
      </div>
    </div>
  );
};

export default Consultation;
