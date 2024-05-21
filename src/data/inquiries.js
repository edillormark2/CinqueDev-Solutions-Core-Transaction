export const services = [
    'Website Development',
    'Mobile App Development',
    'Web App Development',
    'Desktop App Development',
    'Cross-platform Development',
    'Other'
]

export const inquiriesDummyData = [
    {
        id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        country: 'United States',
        budget: '₱ 20,000 - ₱ 50,000',
        message: 'I need a new website for my business with e-commerce capabilities.',
        service: ['Website Development'],
        status: 'New',
        team: 'Web Developer Team 1'
    },
    {
        id: '2',
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        country: 'Canada',
        budget: '₱ 10,000 - ₱ 20,000',
        message: 'Looking to develop a mobile app for my startup.',
        service: ['Mobile App Development'],
        status: 'In Progress',
        team: 'Mobile Developer Team 2'
    },
    {
        id: '3',
        name: 'Carlos Mendoza',
        email: 'carlos.mendoza@example.com',
        country: 'Mexico',
        budget: '₱ 50,000 - ₱ 100,000',
        message: 'We need a web application to manage our inventory.',
        service: ['Web App Development'],
        status: 'Accepted',
        team: 'Web Developer Team 2'
    },
    {
        id: '4',
        name: 'Anna Ivanova',
        email: 'anna.ivanova@example.com',
        country: 'Russia',
        budget: '₱ 20,000 - ₱ 50,000',
        message: 'Our company requires a desktop application for data analysis.',
        service: ['Desktop App Development'],
        status: 'Cancelled',
        team: 'Desktop Developer Team 1'
    },
    {
        id: '5',
        name: 'Ling Wei',
        email: 'ling.wei@example.com',
        country: 'China',
        budget: '₱ 20,000 - ₱ 50,000',
        message: 'We want to create a cross-platform app for our services.',
        service: ['Cross-platform Development'],
        status: 'Completed',
        team: 'Desktop Developer Team 2'
    },
    {
        id: '6',
        name: 'Ahmed Ali',
        email: 'ahmed.ali@example.com',
        country: 'United Arab Emirates',
        budget: '₱ 50,000 - ₱ 100,000',
        message: 'I need a custom software solution for our unique business needs.',
        service: ['Other'],
        status: 'Completed',
        team: 'Desktop Developer Team 2'
    }
]

export const inquiryStatuses = [
    { status: 'New', color: '#007bff' },
    { status: 'In Progress', color: '#fd7e14' },
    { status: 'Pending Response', color: '#ffc107' },
    { status: 'Follow-Up Required', color: '#17a2b8' },
    { status: 'Quoted', color: '#6f42c1' },
    { status: 'Accepted', color: '#28a745' },
    { status: 'Rejected', color: '#dc3545' },
    { status: 'Completed', color: '#218838' },
    { status: 'Cancelled', color: '#6c757d' },
    { status: 'Closed', color: '#343a40' }
];

export const inquiryStatusesPastel = [
    { status: 'New', color: '#a2cffe' },
    { status: 'In Progress', color: '#ffcc99' },
    { status: 'Pending Response', color: '#ffecb3' },
    { status: 'Follow-Up Required', color: '#b2ebf2' },
    { status: 'Quoted', color: '#d4b0ff' },
    { status: 'Accepted', color: '#c8e6c9' },
    { status: 'Rejected', color: '#ffb3b3' },
    { status: 'Completed', color: '#a5d6a7' },
    { status: 'Cancelled', color: '#dcdcdc' },
    { status: 'Closed', color: '#c0c0c0' }
];