import React from "react";
import { useParams } from "react-router-dom";
import { productDummyData, generateLicenseKey, generateTransactionId } from "../data/product";
import { Divider } from "@mui/joy";

const ProductView = () => {
  const { id } = useParams();

  const getTransactionById = (id) => {
    return productDummyData.find(transaction => transaction.id === id);
  }

  const transaction = getTransactionById(id);

  if (!transaction) {
    return (
      <div className="my-28 md:my-16 mx-10 md:mx-16 ">
        <h1 className="text-2xl font-semibold mb-2 ">Details</h1>
        <p>Transaction not found</p>
      </div>
    );
  }

  return (
    <div className="mx-4 md:mx-12 my-20 md:my-8">
      <div>
        <div className="text-3xl font-semibold my-4">Contract Form</div>

        <div className="my-8">
          <div className="bg-white border p-8">
            <p className="text-3xl font-bold text-center">
              Transaction Summary
            </p>
            <p className="text-center">Cinquedev Solutions</p>
            <div className="mx-8 md:mx-28 mt-10">
              <Divider />
              <p>Date: {transaction.date}</p>
              <p>time: {transaction.time}</p>
              <p>Product: {transaction.product}</p>
              <p>License Type: {transaction.licenseType}</p>
              <p>License Key: {generateLicenseKey()}</p>
              <p>Price: {transaction.price}</p>
              <p>Total: {transaction.price}</p>

              <div className="mt-8">
                <Divider />
                <p className="font-semibold">Invoice Detail: </p>
                <p>Status: PAID</p>
                <p>Transaction ID:{generateTransactionId()}</p>
                <p>Name:{transaction.name}</p>
                <p>{transaction.email}</p>
                <p>{transaction.company}</p>
                <p>Country: {transaction.country}</p>
              </div>
              <div>

                <div className="mt-8">
                  <Divider />
                  <p className="font-semibold">Payment Detail: </p>
                  <p>Card: {transaction.cardType}</p>
                  <p>Card Number: {transaction.cardNumber}</p>
                  <p>Expiration Date: {transaction.expiration}</p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductView;