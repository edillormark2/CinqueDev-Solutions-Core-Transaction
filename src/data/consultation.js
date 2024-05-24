import { randBetweenDate, randFullName, randEmail, randPhoneNumber, randText } from '@ngneat/falso';
import dayjs from 'dayjs';

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

export function generateFakeConsultations(count) {
    if (typeof count !== 'number' || count <= 0) {
        throw new Error('Invalid count: Please provide a positive integer.');
    }

    return Array.from({ length: count }, () => ({
        date: dayjs(randBetweenDate({ from: new Date(), to: new Date('12/31/2024') })).format('MMMM DD, YYYY'),
        time: dayjs(randBetweenDate({ from: new Date(), to: new Date('12/31/2024') })).format('HH:00 A'),
        name: randFullName({ withAccents: false }),
        email: randEmail(),
        phone: randPhoneNumber(),
        message: randMeetingRequest(),
        assignees: randFullName({ withAccents: false }), // Random assignee
    }));
}

export const consultationDummyData = [
    {
        date: 'May 11, 2024',
        time: '10:30 AM',
        name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '090-2345-6789',
        message: "I'm interested in your software solutions. Can we schedule a meeting?",
        assignees: "Julian Jules Pardi"
    },
    {
        date: 'May 12, 2024',
        time: '2:45 PM',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        phone: '080-3456-7890',
        message: "I need a custom software solution for my business. Please contact me.",
        assignees: "Julian Jules Pardi"
    },
    {
        date: 'May 13, 2024',
        time: '11:00 AM',
        name: 'Michael Brown',
        email: 'michael.brown@example.com',
        phone: '070-4567-8901',
        message: "Do you offer cloud-based solutions? I'd like to know more.",
        assignees: 'Mark Angelo Alde'
    },
    {
        date: 'May 14, 2024',
        time: '4:15 PM',
        name: 'Emily Johnson',
        email: 'emily.johnson@example.com',
        phone: '060-5678-9012',
        message: "Can you help with software integration for our existing systems?",
        assignees: "Julian Jules Pardi"
    },
    {
        date: 'May 15, 2024',
        time: '1:30 PM',
        name: 'David Wilson',
        email: 'david.wilson@example.com',
        phone: '050-6789-0123',
        message: "I'm looking for a comprehensive software solution for our startup.",
        assignees: 'Mark Angelo Alde'
    }
]