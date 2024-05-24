import member1 from "../assets/mepic.jpg";
import member2 from "../assets/pards.jpg";
import member3 from "../assets/aron.png";
import member4 from "../assets/alde.png";
import member5 from "../assets/boneo.jpg";
import { FaShopware } from "react-icons/fa";
import { MdLocalLibrary } from "react-icons/md";
import { FaManatSign } from "react-icons/fa6";
import {
  FaDatabase,
  FaMobileAlt,
  FaLaptopCode,
  FaCloud,
  FaTools
} from "react-icons/fa";
import { MdSecurity, MdAssessment } from "react-icons/md";

export const softwareSupportData = [
  {
    id: 1,
    logo: <FaShopware size={20} />,
    companyName: "Shop Go",
    systemName: "E-Commerce Ordering Website & Admin Web Application",
    title: "Shop Go: E-Commerce Ordering Website & Admin Web Application",
    email: "shopgo@gmail.com",
    subsPlan: "Standard",
    selectedPlan: "Monthly",
    paymentOption: "Credit Card",
    cardNo: "**** 7832",
    startDate: "Jan 15, 2024",
    endDate: "June 15, 2024",
    updateStatus: "10 May, 2024",
    teamAssigned: [
      { name: "Mark Daniel Edillor", image: member1 },
      { name: "Julian Jules Pardi", image: member2 },
      { name: "Ricardo Aron III", image: member3 },
      { name: "Mark Angelo Alde", image: member4 },
      { name: "Matt Franky Boneo", image: member5 }
    ]
  },
  {
    id: 2,
    logo: <FaManatSign size={20} />,
    companyName: "MedTech",
    systemName: "Hospital Human Resource Management System Web App",
    title: "MedTech: Hospital Human Resource Management System Web App",
    email: "medtech@gmail.com",
    subsPlan: "Standard",
    selectedPlan: "Monthly",
    paymentOption: "Credit Card",
    cardNo: "**** 7832",
    startDate: "Dec 20, 2023",
    endDate: "Mar 15, 2024",
    updateStatus: "Subscription expired",
    teamAssigned: [
      { name: "Mark Daniel Edillor", image: member1 },
      { name: "Mark Angelo Alde", image: member4 },
      { name: "Matt Franky Boneo", image: member5 }
    ]
  },
  {
    id: 3,
    logo: <MdLocalLibrary size={20} />,
    companyName: "LibraSys",
    systemName: "Library Management System Desktop Application",
    title: "LibraSys: Library Management System Desktop Application",
    email: "librarysys@gmail.com",
    subsPlan: "Pro",
    selectedPlan: "Anually",
    paymentOption: "Credit Card",
    cardNo: "**** 7832",
    startDate: "May 02, 2024",
    endDate: "May 02, 2025",
    updateStatus: "20 May, 2024",
    teamAssigned: [
      { name: "Mark Daniel Edillor", image: member1 },
      { name: "Julian Jules Pardi", image: member2 },
      { name: "Ricardo Aron III", image: member3 },
      { name: "Matt Franky Boneo", image: member5 }
    ]
  },
  {
    id: 4,
    logo: <FaDatabase size={20} />,
    companyName: "InventoryHub",
    systemName: "Inventory Management System Web App",
    title: "InventoryHub: Inventory Management System Web App",
    email: "inventoryhub@gmail.com",
    subsPlan: "Standard",
    selectedPlan: "Montly",
    paymentOption: "Credit Card",
    cardNo: "**** 7832",
    startDate: "Feb 01, 2024",
    endDate: "July 30, 2024",
    updateStatus: "15 May, 2024",
    teamAssigned: [
      { name: "Ricardo Aron III", image: member3 },
      { name: "Mark Angelo Alde", image: member4 },
      { name: "Matt Franky Boneo", image: member5 }
    ]
  },
  {
    id: 5,
    logo: <FaMobileAlt size={20} />,
    companyName: "BankEasy",
    systemName: "Mobile Banking Application Android App",
    title: "BankEasy: Mobile Banking Application Android App",
    email: "bankeasy@gmail.com",
    subsPlan: "Standard",
    selectedPlan: "Montly",
    paymentOption: "Credit Card",
    cardNo: "**** 7832",
    startDate: "Mar 10, 2024",
    endDate: "Aug 25, 2024",
    updateStatus: "05 May, 2024",
    teamAssigned: [
      { name: "Mark Daniel Edillor", image: member1 },
      { name: "Julian Jules Pardi", image: member2 },
      { name: "Ricardo Aron III", image: member3 },
      { name: "Matt Franky Boneo", image: member5 }
    ]
  },
  {
    id: 6,
    logo: <FaLaptopCode size={20} />,
    companyName: "CRMWorks",
    systemName: "Custom CRM Software Cross Platform Development",
    title: "CRMWorks: Custom CRM Software Cross Platform Development",
    email: "crmworks@gmail.com",
    subsPlan: "Standard",
    selectedPlan: "Montly",
    paymentOption: "Credit Card",
    cardNo: "**** 7832",
    startDate: "Jan 20, 2024",
    endDate: "May 20, 2024",
    updateStatus: "Subscription expired",
    teamAssigned: [
      { name: "Mark Daniel Edillor", image: member1 },
      { name: "Matt Franky Boneo", image: member5 }
    ]
  },
  {
    id: 7,
    logo: <FaCloud size={20} />,
    companyName: "CloudVault",
    systemName: "Cloud Storage Solution Web App",
    title: "CloudVault: Cloud Storage Solution Web App",
    email: "cloudvault@gmail.com",
    subsPlan: "Standard",
    selectedPlan: "Montly",
    paymentOption: "Credit Card",
    cardNo: "**** 7832",
    startDate: "Apr 05, 2024",
    endDate: "Sept 30, 2024",
    updateStatus: "25 April, 2024",
    teamAssigned: [
      { name: "Mark Angelo Alde", image: member4 },
      { name: "Julian Jules Pardi", image: member2 },
      { name: "Ricardo Aron III", image: member3 }
    ]
  },
  {
    id: 8,
    logo: <MdSecurity size={20} />,
    companyName: "SecureNet",
    systemName: "Cybersecurity Monitoring System Web App",
    title: "SecureNet: Cybersecurity Monitoring System Web App",
    email: "securenet@gmail.com",
    subsPlan: "Standard",
    selectedPlan: "Montly",
    paymentOption: "Credit Card",
    cardNo: "**** 7832",
    startDate: "Feb 15, 2024",
    endDate: "July 15, 2024",
    updateStatus: "10 April, 2024",
    teamAssigned: [
      { name: "Mark Daniel Edillor", image: member1 },
      { name: "Ricardo Aron III", image: member3 },
      { name: "Mark Angelo Alde", image: member4 },
      { name: "Matt Franky Boneo", image: member5 }
    ]
  },
  {
    id: 9,
    logo: <FaTools size={20} />,
    companyName: "DevStream",
    systemName: "DevOps Pipeline Automation Web App",
    title: "DevStream: DevOps Pipeline Automation Web App",
    email: "devstream@gmail.com",
    subsPlan: "Pro",
    selectedPlan: "Annually",
    paymentOption: "Credit Card",
    cardNo: "**** 7832",
    startDate: "Mar 25, 2024",
    endDate: "Mar 25, 2025",
    updateStatus: "05 May, 2024",
    teamAssigned: [
      { name: "Mark Daniel Edillor", image: member1 },
      { name: "Julian Jules Pardi", image: member2 },
      { name: "Matt Franky Boneo", image: member5 }
    ]
  },
  {
    id: 10,
    logo: <MdAssessment size={20} />,
    companyName: "StackBase",
    systemName: "Data Analytics Platform Web App",
    title: "StackBase: Data Analytics Platform Web App",
    email: "stackbase@gmail.com",
    subsPlan: "Standard",
    selectedPlan: "Monthly",
    paymentOption: "Credit Card",
    cardNo: "**** 7832",
    startDate: "May 01, 2024",
    endDate: "Oct 01, 2024",
    updateStatus: "20 May, 2024",
    teamAssigned: [
      { name: "Mark Daniel Edillor", image: member1 },
      { name: "Ricardo Aron III", image: member3 },
      { name: "Mark Angelo Alde", image: member4 }
    ]
  }
];
