import { React, useState } from "react";
import { Divider, Table, Button } from "@mui/joy"
import { inquiriesDummyData } from "../data/inquiries";
import StatusChip from "../components/StatusChip";
import Reply from "../components/modals/Message";
import { MdOutlineMailOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Inquiries = () => {
  const navigate = useNavigate();

  const handleViewDetail = (id) => {
    navigate(`/inquiries/detail/${id}`)
  }

  return (
    <div className="my-28 md:my-16 mx-10 md:mx-16 ">
      <h1 className="text-2xl font-semibold mb-2 ">Inquiries</h1>
      <Divider />
      <Table stripe="odd" variant="plain">
        <thead>
          <tr>
            <th style={{ width: '15%' }} >Name</th>
            <th style={{ width: '15%' }}>Country</th>
            <th style={{ width: '15%' }}>Budget</th>
            <th style={{ width: '25%' }}>Service</th>
            <th style={{ width: '10%', textAlign: 'center' }}>Status</th>

          </tr>
        </thead>
        <tbody>
          {
            inquiriesDummyData.map((data, index) => {
              return (
                <tr key={index} className="hover:cursor-pointer hover:bg-blue-200" onClick={()=>handleViewDetail(data.id)}>
                  <td className="h-auto content-start">
                    <p className="font-semibold">{data.name}</p>
                    <p className="text-gray-500 overflow-hidden text-ellipsis">{data.email}</p>
                  </td>
                  <td>{data.country}</td>
                  <td>{data.budget}</td>
                  <td>{data.service}</td>
                  <td style={{ textAlign: 'center' }}><StatusChip text={data.status} /></td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  );
};

export default Inquiries;
