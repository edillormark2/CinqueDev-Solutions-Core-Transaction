import { randFullName, randCountry, randEmail } from "@ngneat/falso";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";

function randPriceRange() {
  const priceRanges = [
    "₱ 10,000 - ₱ 20,000",
    "₱ 20,000 - ₱ 50,000",
    "₱ 50,000 - ₱ 100,000"
  ];

  const randomIndex = Math.floor(Math.random() * priceRanges.length);
  return priceRanges[randomIndex];
}

function randMessage() {
  const applicationNeeds = [
    "Our business requires an application to streamline operations and enhance customer experience.",
    "I'm seeking an application solution to optimize efficiency and productivity within our company.",
    "Our company is in need of an application to improve internal processes and facilitate communication.",
    "We are looking to develop an application tailored to the specific needs of our business.",
    "I'm interested in acquiring an application that can help scale our business operations effectively.",
    "We're exploring the possibility of implementing an application to better serve our customers and clients.",
    "Our company is actively seeking a customized application to support our growth and expansion.",
    "We require an application solution that can integrate seamlessly with our existing systems and workflows.",
    "I'm in the market for an application that can address the unique challenges faced by our company.",
    "Our business is in need of a reliable application to stay competitive in today's market."
  ];

  const randomIndex = Math.floor(Math.random() * applicationNeeds.length);
  return applicationNeeds[randomIndex];
}

function randService() {
  const services = [
    "Website Development",
    "Mobile App Development",
    "Web App Development",
    "Desktop App Development",
    "Cross-platform Development",
    "Other"
  ];

  const randomIndex = Math.floor(Math.random() * services.length);
  return services[randomIndex];
}

function randStatus() {
  const status = [
    "Recent",
    "In Progress",
    "Cancelled",
    "Completed"

    //OTHER STATUS
    /* "Pending Response",
        "Follow-Up Required",
        "Quoted",
        "Rejected",
        "Closed", */
  ];

  const randomIndex = Math.floor(Math.random() * status.length);
  return status[randomIndex];
}

function randDevTeam() {
  const developerTeams = [
    "Alpha Developer Team",
    "Bravo Developer Team",
    "Charlie Developer Team",
    "Delta Developer Team",
    "Echo Developer Team",
    "Foxtrot Developer Team",
    "Golf Developer Team",
    "Hotel Developer Team",
    "India Developer Team",
    "Juliet Developer Team"
  ];

  const randomIndex = Math.floor(Math.random() * developerTeams.length);
  return developerTeams[randomIndex];
}

export function generateFakeInquiries(count) {
  if (typeof count !== "number" || count <= 0) {
    throw new Error("Invalid count: Please provide a positive integer.");
  }

  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: randFullName({ withAccents: false }),
    email: randEmail(),
    country: randCountry(),
    budget: randPriceRange(),
    message: randMessage(),
    service: randService(),
    status: randStatus(),
    team: randDevTeam()
  }));
}

export function getStatusCount(data, status) {
  const filteredData = data.filter(inquiry => inquiry.status === status);
  return filteredData.length;
}

export const inquiriesDummyData = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    country: "United States",
    budget: "₱ 20,000 - ₱ 50,000",
    message:
      "I need a new website for my business with e-commerce capabilities.",
    service: ["Website Development"],
    status: "New",
    team: "Web Developer Team 1"
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    country: "Canada",
    budget: "₱ 10,000 - ₱ 20,000",
    message: "Looking to develop a mobile app for my startup.",
    service: ["Mobile App Development"],
    status: "In Progress",
    team: "Mobile Developer Team 2"
  },
  {
    id: "3",
    name: "Carlos Mendoza",
    email: "carlos.mendoza@example.com",
    country: "Mexico",
    budget: "₱ 50,000 - ₱ 100,000",
    message: "We need a web application to manage our inventory.",
    service: ["Web App Development"],
    status: "Accepted",
    team: "Web Developer Team 2"
  },
  {
    id: "4",
    name: "Anna Ivanova",
    email: "anna.ivanova@example.com",
    country: "Russia",
    budget: "₱ 20,000 - ₱ 50,000",
    message: "Our company requires a desktop application for data analysis.",
    service: ["Desktop App Development"],
    status: "Cancelled",
    team: "Desktop Developer Team 1"
  },
  {
    id: "5",
    name: "Ling Wei",
    email: "ling.wei@example.com",
    country: "China",
    budget: "₱ 20,000 - ₱ 50,000",
    message: "We want to create a cross-platform app for our services.",
    service: ["Cross-platform Development"],
    status: "Completed",
    team: "Desktop Developer Team 2"
  },
  {
    id: "6",
    name: "Ahmed Ali",
    email: "ahmed.ali@example.com",
    country: "United Arab Emirates",
    budget: "₱ 50,000 - ₱ 100,000",
    message: "I need a custom software solution for our unique business needs.",
    service: ["Other"],
    status: "Completed",
    team: "Desktop Developer Team 2"
  }
];

export const inquiryStatuses = [
  { status: "Recent", color: "#007bff", icon: <FaRegCircleCheck size={17} /> },
  {
    status: "In Progress",
    color: "#F39C12",
    icon: <MdOutlineAccessTime size={20} />
  },
  {
    status: "Pending Response",
    color: "#ffc107",
    icon: <FaRegCircleCheck size={17} />
  },
  {
    status: "Follow-Up Required",
    color: "#17a2b8",
    icon: <FaRegCircleCheck />
  },
  {
    status: "Rejected",
    color: "#dc3545",
    icon: <FaRegCircleCheck size={17} />
  },
  {
    status: "Completed",
    color: "#218838",
    icon: <FaRegCircleCheck size={17} />
  },
  { status: "Cancelled", color: "#E74C3C", icon: <MdOutlineCancel size={20} /> }
];
