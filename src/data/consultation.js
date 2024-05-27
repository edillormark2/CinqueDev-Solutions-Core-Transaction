import {
  randBetweenDate,
  randFullName,
  randEmail,
  randPhoneNumber,
} from "@ngneat/falso";
import dayjs from "dayjs";

export const consultationStatuses = [
  { status: "Pending", color: "#6f42c1", pastelColor: "#d4b0ff" },
  { status: "In Progress", color: "#007bff", pastelColor: "#a2cffe" },
  { status: "Completed", color: "#28a745", pastelColor: "#c8e6c9" },
  { status: "On Hold", color: "#ffc107", pastelColor: "#ffecb3" },
  { status: "Cancelled", color: "#dc3545", pastelColor: "#ffb3b3" }
];

let unreadCount = 0;
let consultationIdCounter = 0;

function randConsultationStatus() {
  const consultationStatuses = [
    "Pending",
    "In Progress",
    "Completed",
    "On Hold",
    "Cancelled"
  ];

  const randomIndex = Math.floor(Math.random() * consultationStatuses.length);
  return consultationStatuses[randomIndex];
}

function randMeetingRequest() {
  const meetingRequests = [
    "Could we arrange a meeting to explore your software solutions?",
    "I'm interested in scheduling a consultation to discuss our company's needs.",
    "Would it be possible to set up a meeting to review your software offerings?",
    "I'm keen to discuss potential software solutions for our company. Can we schedule a meeting?",
    "Can we organize a consultation session to assess how your software can benefit our company?",
    "I'd like to request a meeting to explore your software solutions further.",
    "Could we schedule a consultation to discuss our company's requirements and your software offerings?",
    "I'm seeking a consultation to understand how your software can address our company's needs.",
    "Can we arrange a meeting to discuss the software solutions you provide?",
    "I want to schedule a consultation to explore how your software can support our company's goals."
  ];

  const randomIndex = Math.floor(Math.random() * meetingRequests.length);
  return meetingRequests[randomIndex];
}

function randMessageStatus() {
  const messageStatuses = ["Read", "Unread"];
  const randomIndex = Math.floor(Math.random() * messageStatuses.length);
  if (messageStatuses[randomIndex] === "Unread" && unreadCount >= 20) {
    return "Read";
  } else if (messageStatuses[randomIndex] === "Unread") {
    unreadCount++;
  }
  return messageStatuses[randomIndex];
}

function randStarStatus() {
  const starStatuses = ["Starred", "Unstarred"];
  const randomIndex = Math.floor(Math.random() * starStatuses.length);
  return starStatuses[randomIndex];
}

export function generateFakeConsultations(count) {
  unreadCount = 0;
  if (typeof count !== "number" || count <= 0) {
    throw new Error("Invalid count: Please provide a positive integer.");
  }

  return Array.from({ length: count }, (_, index) => ({
    id: consultationIdCounter + index + 1,
    date: dayjs(
      randBetweenDate({ from: new Date(), to: new Date("12/31/2024") })
    ).format("MMMM DD, YYYY"),
    time: dayjs(
      randBetweenDate({ from: new Date(), to: new Date("12/31/2024") })
    ).format("HH:00 A"),
    name: randFullName({ withAccents: false }),
    email: randEmail(),
    phone: randPhoneNumber(),
    message: randMeetingRequest(),
    assignees: randFullName({ withAccents: false }),
    status: randConsultationStatus(),
    messageStatus: randMessageStatus(),
    starStatus: randStarStatus()
  }));
}

export const consultationDummyData = [
  {
    id: 1,
    date: "May 11, 2024",
    time: "10:30 AM",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "090-2345-6789",
    message:
      "I'm interested in your software solutions. Can we schedule a meeting?",
    assignees: "Julian Jules Pardi",
    status: "Pending",
    messageStatus: "Read",
    starStatus: "Starred"
  },
  {
    id: 2,
    date: "May 12, 2024",
    time: "2:45 PM",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "080-3456-7890",
    message:
      "I'd like to request a meeting to explore your software solutions further.",
    assignees: "Julian Jules Pardi",
    status: "Pending",
    messageStatus: "Unread",
    starStatus: "Unstarred"
  },
  {
    id: 3,
    date: "May 13, 2024",
    time: "11:00 AM",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "070-4567-8901",
    message:
      "Can we arrange a meeting to discuss the software solutions you provide?",
    assignees: "Mark Angelo Alde",
    status: "In Progress",
    messageStatus: "Unread",
    starStatus: "Starred"
  },
  {
    id: 4,
    date: "May 14, 2024",
    time: "4:15 PM",
    name: "Emily Johnson",
    email: "emily.johnson@example.com",
    phone: "060-5678-9012",
    message:
      "I'm interested in scheduling a consultation to discuss our company's needs.",
    assignees: "Julian Jules Pardi",
    status: "Completed",
    messageStatus: "Read",
    starStatus: "Unstarred"
  },
  {
    id: 5,
    date: "May 15, 2024",
    time: "1:30 PM",
    name: "David Wilson",
    email: "david.wilson@example.com",
    phone: "050-6789-0123",
    message:
      "I'm seeking a consultation to understand how your software can address our company's needs.",
    assignees: "Mark Angelo Alde",
    status: "On Hold",
    messageStatus: "Read",
    starStatus: "Unstarred"
  },
  {
    id: 6,
    date: "May 16, 2024",
    time: "9:00 AM",
    name: "Sarah Miller",
    email: "sarah.miller@example.com",
    phone: "040-7890-1234",
    message:
      "Would it be possible to set up a meeting to review your software offerings?",
    assignees: "Julian Jules Pardi",
    status: "Pending",
    messageStatus: "Read",
    starStatus: "Unstarred"
  },
  {
    id: 7,
    date: "May 17, 2024",
    time: "3:30 PM",
    name: "Robert Taylor",
    email: "robert.taylor@example.com",
    phone: "030-8901-2345",
    message:
      "I'm keen to discuss potential software solutions for our company. Can we schedule a meeting?",
    assignees: "Mark Angelo Alde",
    status: "In Progress",
    messageStatus: "Unread",
    starStatus: "Starred"
  },
  {
    id: 8,
    date: "May 18, 2024",
    time: "12:45 PM",
    name: "Olivia Anderson",
    email: "olivia.anderson@example.com",
    phone: "020-9012-3456",
    message:
      "I want to schedule a consultation to explore how your software can support our company's goals.",
    assignees: "Julian Jules Pardi",
    status: "Pending",
    messageStatus: "Unread",
    starStatus: "Starred"
  },
  {
    id: 9,
    date: "May 19, 2024",
    time: "10:15 AM",
    name: "William Martinez",
    email: "william.martinez@example.com",
    phone: "010-0123-4567",
    message:
      "I'd like to request a meeting to explore your software solutions further.",
    assignees: "Mark Angelo Alde",
    status: "Pending",
    messageStatus: "Read",
    starStatus: "Starred"
  },
  {
    id: 10,
    date: "May 20, 2024",
    time: "2:00 PM",
    name: "Sophia Garcia",
    email: "sophia.garcia@example.com",
    phone: "000-1234-5678",
    message:
      "Can we organize a consultation session to assess how your software can benefit our company?",
    assignees: "Julian Jules Pardi",
    status: "Completed",
    messageStatus: "Read",
    starStatus: "Unstarred"
  },
  {
    id: 11,
    date: "May 21, 2024",
    time: "11:30 AM",
    name: "Isabella Rodriguez",
    email: "isabella.rodriguez@example.com",
    phone: "090-2345-6789",
    message: "Could we arrange a meeting to explore your software solutions?",
    assignees: "Julian Jules Pardi",
    status: "Pending",
    messageStatus: "Read",
    starStatus: "Starred"
  },
  {
    id: 12,
    date: "May 22, 2024",
    time: "3:45 PM",
    name: "Alexander Lee",
    email: "alexander.lee@example.com",
    phone: "080-3456-7890",
    message:
      "I'm interested in scheduling a consultation to discuss our company's needs.",
    assignees: "Julian Jules Pardi",
    status: "Pending",
    messageStatus: "Unread",
    starStatus: "Unstarred"
  },
  {
    id: 13,
    date: "May 23, 2024",
    time: "10:00 AM",
    name: "Sophie Walker",
    email: "sophie.walker@example.com",
    phone: "070-4567-8901",
    message:
      "I'm seeking a consultation to understand how your software can address our company's needs.",
    assignees: "Mark Angelo Alde",
    status: "In Progress",
    messageStatus: "Unread",
    starStatus: "Starred"
  },
  {
    id: 14,
    date: "May 24, 2024",
    time: "4:30 PM",
    name: "James Hall",
    email: "james.hall@example.com",
    phone: "060-5678-9012",
    message:
      "Can we arrange a meeting to discuss the software solutions you provide?",
    assignees: "Julian Jules Pardi",
    status: "Completed",
    messageStatus: "Read",
    starStatus: "Starred"
  },
  {
    id: 15,
    date: "May 25, 2024",
    time: "2:15 PM",
    name: "Charlotte Young",
    email: "charlotte.young@example.com",
    phone: "050-6789-0123",
    message:
      "I'd like to request a meeting to explore your software solutions further.",
    assignees: "Mark Angelo Alde",
    status: "On Hold",
    messageStatus: "Read",
    starStatus: "Starred"
  },
  {
    id: 16,
    date: "May 26, 2024",
    time: "9:45 AM",
    name: "Benjamin White",
    email: "benjamin.white@example.com",
    phone: "040-7890-1234",
    message:
      "Can we organize a consultation session to assess how your software can benefit our company?",
    assignees: "Julian Jules Pardi",
    status: "Pending",
    messageStatus: "Read",
    starStatus: "Unstarred"
  },
  {
    id: 17,
    date: "May 27, 2024",
    time: "2:30 PM",
    name: "Emma Martin",
    email: "emma.martin@example.com",
    phone: "030-8901-2345",
    message:
      "Would it be possible to set up a meeting to review your software offerings?",
    assignees: "Mark Angelo Alde",
    status: "In Progress",
    messageStatus: "Unread",
    starStatus: "Starred"
  },
  {
    id: 18,
    date: "May 28, 2024",
    time: "1:00 PM",
    name: "Daniel Thompson",
    email: "daniel.thompson@example.com",
    phone: "020-9012-3456",
    message:
      "I want to schedule a consultation to explore how your software can support our company's goals.",
    assignees: "Julian Jules Pardi",
    status: "Pending",
    messageStatus: "Unread",
    starStatus: "Unstarred"
  },
  {
    id: 19,
    date: "May 29, 2024",
    time: "11:45 AM",
    name: "Mia Lewis",
    email: "mia.lewis@example.com",
    phone: "010-0123-4567",
    message:
      "I'm interested in your software solutions. Can we schedule a meeting?",
    assignees: "Mark Angelo Alde",
    status: "Pending",
    messageStatus: "Read",
    starStatus: "Starred"
  },
  {
    id: 20,
    date: "May 30, 2024",
    time: "3:00 PM",
    name: "Liam Martinez",
    email: "liam.martinez@example.com",
    phone: "000-1234-5678",
    message:
      "I'm keen to discuss potential software solutions for our company. Can we schedule a meeting?",
    assignees: "Julian Jules Pardi",
    status: "Completed",
    messageStatus: "Read",
    starStatus: "Starred"
  },
  {
    id: 21,
    date: "June 1, 2024",
    time: "10:30 AM",
    name: "Olivia Garcia",
    email: "olivia.garcia@example.com",
    phone: "090-2345-6789",
    message:
      "I'm seeking a consultation to understand how your software can address our company's needs.",
    assignees: "Julian Jules Pardi",
    status: "Pending",
    messageStatus: "Read",
    starStatus: "Starred"
  },
  {
    id: 22,
    date: "June 2, 2024",
    time: "2:45 PM",
    name: "Noah Martinez",
    email: "noah.martinez@example.com",
    phone: "080-3456-7890",
    message:
      "Can we arrange a meeting to discuss the software solutions you provide?",
    assignees: "Julian Jules Pardi",
    status: "Pending",
    messageStatus: "Unread",
    starStatus: "Unstarred"
  },
  {
    id: 23,
    date: "June 3, 2024",
    time: "11:00 AM",
    name: "Elijah Hernandez",
    email: "elijah.hernandez@example.com",
    phone: "070-4567-8901",
    message:
      "I'm interested in scheduling a consultation to discuss our company's needs.",
    assignees: "Mark Angelo Alde",
    status: "In Progress",
    messageStatus: "Unread",
    starStatus: "Starred"
  },
  {
    id: 24,
    date: "June 4, 2024",
    time: "4:15 PM",
    name: "Ava Nguyen",
    email: "ava.nguyen@example.com",
    phone: "060-5678-9012",
    message:
      "I want to schedule a consultation to explore how your software can support our company's goals.",
    assignees: "Julian Jules Pardi",
    status: "Completed",
    messageStatus: "Read",
    starStatus: "Unstarred"
  },
  {
    id: 25,
    date: "June 5, 2024",
    time: "1:30 PM",
    name: "William Rivera",
    email: "william.rivera@example.com",
    phone: "050-6789-0123",
    message:
      "I'd like to request a meeting to explore your software solutions further.",
    assignees: "Mark Angelo Alde",
    status: "On Hold",
    messageStatus: "Read",
    starStatus: "Unstarred"
  },
  {
    id: 26,
    date: "June 6, 2024",
    time: "9:00 AM",
    name: "Harper Scott",
    email: "harper.scott@example.com",
    phone: "040-7890-1234",
    message:
      "Would it be possible to set up a meeting to review your software offerings?",
    assignees: "Julian Jules Pardi",
    status: "Pending",
    messageStatus: "Read",
    starStatus: "Unstarred"
  },
  {
    id: 27,
    date: "June 7, 2024",
    time: "2:30 PM",
    name: "Evelyn King",
    email: "evelyn.king@example.com",
    phone: "030-8901-2345",
    message: "Could we arrange a meeting to explore your software solutions?",
    assignees: "Mark Angelo Alde",
    status: "In Progress",
    messageStatus: "Unread",
    starStatus: "Starred"
  },
  {
    id: 28,
    date: "June 8, 2024",
    time: "1:00 PM",
    name: "Jacob Johnson",
    email: "jacob.johnson@example.com",
    phone: "020-9012-3456",
    message:
      "I'm interested in your software solutions. Can we schedule a meeting?",
    assignees: "Julian Jules Pardi",
    status: "Pending",
    messageStatus: "Unread",
    starStatus: "Unstarred"
  },
  {
    id: 29,
    date: "June 9, 2024",
    time: "11:45 AM",
    name: "Amelia Lewis",
    email: "amelia.lewis@example.com",
    phone: "010-0123-4567",
    message:
      "I'm keen to discuss potential software solutions for our company. Can we schedule a meeting?",
    assignees: "Mark Angelo Alde",
    status: "Pending",
    messageStatus: "Read",
    starStatus: "Starred"
  },
  {
    id: 30,
    date: "June 10, 2024",
    time: "3:00 PM",
    name: "Oliver Martinez",
    email: "oliver.martinez@example.com",
    phone: "000-1234-5678",
    message:
      "Can we organize a consultation session to assess how your software can benefit our company?",
    assignees: "Julian Jules Pardi",
    status: "Completed",
    messageStatus: "Read",
    starStatus: "Unstarred"
  },
  {
    id: 31,
    date: "June 11, 2024",
    time: "2:45 PM",
    name: "Sophia Anderson",
    email: "sophia.anderson@example.com",
    phone: "090-2345-6789",
    message:
      "I want to schedule a consultation to explore how your software can support our company's goals.",
    assignees: "Julian Jules Pardi",
    status: "Pending",
    messageStatus: "Read",
    starStatus: "Starred"
  },
  {
    id: 32,
    date: "June 12, 2024",
    time: "10:30 AM",
    name: "Liam Garcia",
    email: "liam.garcia@example.com",
    phone: "080-3456-7890",
    message: "Could we arrange a meeting to explore your software solutions?",
    assignees: "Julian Jules Pardi",
    status: "Pending",
    messageStatus: "Unread",
    starStatus: "Unstarred"
  },
  {
    id: 33,
    date: "June 13, 2024",
    time: "9:15 AM",
    name: "Emma Rodriguez",
    email: "emma.rodriguez@example.com",
    phone: "070-4567-8901",
    message:
      "I'm interested in scheduling a consultation to discuss our company's needs.",
    assignees: "Mark Angelo Alde",
    status: "In Progress",
    messageStatus: "Unread",
    starStatus: "Starred"
  }
];
