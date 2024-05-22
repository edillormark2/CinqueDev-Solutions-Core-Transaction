import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { GoStack } from "react-icons/go";
import { BiSupport } from "react-icons/bi";
import { RxUpdate } from "react-icons/rx";

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "Dashboard",
        url: "/dashboard",
        icon: <AiOutlineHome />
      }
    ]
  },
  {
    title: "Pages",
    links: [
      {
        name: "Product",
        url: "/product",
        icon: <GoStack />
      },
      {
        name: "Inquiries",
        url: "/inquiries",
        icon: <IoChatbubbleEllipsesOutline />
      },
      {
        name: "Contracts",
        url: "/contracts",
        icon: <GoStack />
      },
      {
        name: "Consultation",
        url: "/consultation",
        icon: <BiSupport />
      },
      {
        name: "Ongoing Support",
        url: "/menu4",
        icon: <RxUpdate />
      }
    ]
  }
];
