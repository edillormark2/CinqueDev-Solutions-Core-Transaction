import React from "react";
import { useNavigate } from "react-router-dom";
import { Divider, Table } from "@mui/joy"
import { productDummyData, generateTransactionId } from "../data/product";

const Product = () => {
  const navigate = useNavigate();
  const handleViewDetail = (id) => {
    navigate(`/product/detail/${id}`)
  }

  return (
    <div className="my-28 md:my-16 mx-10 md:mx-16 ">
      <h1 className="text-2xl font-semibold mb-2 ">Product</h1>
      <Divider />
      <Table stripe="odd" variant="plain">
        <thead>
          <tr>
            <th style={{ width: '10%' }} >Transaction</th>
            <th style={{ width: '12%' }} >Date</th>
            <th style={{ width: '20%' }}>Name</th>
            <th style={{ width: '20%' }}>Country</th>
            <th style={{ width: '25%' }}>Product</th>
          </tr>
        </thead>
        <tbody>
          {
            productDummyData.map((data, index) => {
              return (
                <tr key={index} className="hover:cursor-pointer hover:bg-blue-50" onClick={()=>handleViewDetail(data.id)} >
                  <td>{generateTransactionId()}</td>
                  <td className="h-auto content-start">
                    <p className="font-semibold">{data.date}</p>
                    <p className=" text-gray-500">{data.time}</p>
                  </td>
                  <td className="h-auto content-start">
                    <p className="font-semibold">{data.name}</p>
                    <p className=" text-gray-500">{data.email}</p>
                    <p className=" text-gray-500">{data.phone}</p>
                  </td>
                  <td>{data.country}</td>
                  <td className="h-auto content-start">
                    <p className="font-semibold">{data.product}</p>
                    <p className=" text-gray-500">{`₱ ${data.price}`}</p>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>

    </div>
  )
}

export default Product;