import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { MdOutlineFindReplace } from "react-icons/md";

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
        name: "Consultation",
        url: "/consultation",
        icon: <IoChatbubbleEllipsesOutline />
      },
      {
        name: "Inquiries",
        url: "/inquiries",
        icon: <MdOutlineFindReplace />
      },
      {
        name: "Menu 3",
        url: "/menu3",
        icon: <AiOutlineHome />
      },
      {
        name: "Menu 4",
        url: "/menu4",
        icon: <AiOutlineHome />
      }
    ]
  }
];
