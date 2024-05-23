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
    title: "Shopify: Go E-Commerce Ordering Website & Admin Web Application",
    startDate: "Jan 15",
    endDate: "June 15",
    updateStatus: "10 May, 2024",
    teamAssigned: [member1, member2, member4, member5]
  },
  {
    id: 2,
    logo: <FaManatSign size={20} />,
    title: "MedTech: Hospital Human Resource Management System Web App",
    startDate: "Dec 20",
    endDate: "Mar 15",
    updateStatus: "Subscription expired",
    teamAssigned: [member1, member3, member4, member2, member5]
  },
  {
    id: 3,
    logo: <MdLocalLibrary size={20} />,
    title: "LibraSys: Library Management System Desktop Application",
    startDate: "May 02",
    endDate: "Sept 15",
    updateStatus: "20 May, 2024",
    teamAssigned: [member1, member2, member3]
  },
  {
    id: 4,
    logo: <FaDatabase size={20} />,
    title: "InventoryHub: Inventory Management System Web App",
    startDate: "Feb 01",
    endDate: "July 30",
    updateStatus: "15 May, 2024",
    teamAssigned: [member2, member3, member4, member5]
  },
  {
    id: 5,
    logo: <FaMobileAlt size={20} />,
    title: "BankEasy: Mobile Banking Application Android App",
    startDate: "Mar 10",
    endDate: "Aug 25",
    updateStatus: "05 May, 2024",
    teamAssigned: [member1, member3, member5]
  },
  {
    id: 6,
    logo: <FaLaptopCode size={20} />,
    title: "CRMWorks: Custom CRM Software Cross Platform Development",
    startDate: "Jan 20",
    endDate: "May 20",
    updateStatus: "Subscription expired",
    teamAssigned: [member1, member2, member3, member4]
  },
  {
    id: 7,
    logo: <FaCloud size={20} />,
    title: "CloudVault: Cloud Storage Solution Web App",
    startDate: "Apr 05",
    endDate: "Sept 30",
    updateStatus: "25 April, 2024",
    teamAssigned: [member2, member4, member5]
  },
  {
    id: 8,
    logo: <MdSecurity size={20} />,
    title: "SecureNet: Cybersecurity Monitoring System Web App",
    startDate: "Feb 15",
    endDate: "July 15",
    updateStatus: "10 April, 2024",
    teamAssigned: [member1, member3, member4]
  },
  {
    id: 9,
    logo: <FaTools size={20} />,
    title: "DevStream: DevOps Pipeline Automation Web App",
    startDate: "Mar 25",
    endDate: "Aug 25",
    updateStatus: "05 May, 2024",
    teamAssigned: [member1, member2, member5]
  },
  {
    id: 10,
    logo: <MdAssessment size={20} />,
    title: "StackBase: Data Analytics Platform Web App",
    startDate: "May 01",
    endDate: "Oct 01",
    updateStatus: "20 May, 2024",
    teamAssigned: [member3, member4, member5]
  }
];
