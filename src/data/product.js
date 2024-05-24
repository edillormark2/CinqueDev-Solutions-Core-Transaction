export const productDummyData = [
    {
        id: '1',
        licenseType: 'Company',
        name: 'John Brown',
        company: 'Tech Solutions Ltd.', 
        email: 'info@techsolutions.com',
        country: 'United State of America',
        cardType: 'Mastercard',
        cardNumber: '**** **** **** 1234',
        expiration: '09/25',
        securityCode: '789',
        product: 'Enterprise Resource Planning System',
        price: '50000',
        date: '2024-05-22',
        time: '10:30:00'  
    },
    {
        id: '2',
        licenseType: 'Person',
        name: 'Alice Johnson',
        company: '',  
        email: 'alice.johnson@example.com',
        country: 'United Kingdom',
        cardType: 'Visa',
        cardNumber: '**** **** **** 5678',
        expiration: '08/24',
        securityCode: '321',
        product: 'Accounting Software',
        price: '30000',
        date: '2024-05-22',
        time: '11:45:00'  
    },
    {
        id: '3',
        licenseType: 'Company',
        name: 'Mandy Williams',
        company: 'Global Consulting Inc.',
        email: 'info@globalconsulting.com',
        country: 'Canada',
        cardType: 'American Express',
        cardNumber: '**** **** **** 9012',
        expiration: '11/23',
        securityCode: '654',
        product: 'Human Resource Management System',
        price: '45000',
        date: '2024-05-22',
        time: '13:15:00'  
    },
    {
        id: '4',
        licenseType: 'Person',
        name: 'Michael Smith',
        company: '',  
        email: 'michael.smith@example.com',
        country: 'Australia',
        cardType: 'Discover',
        cardNumber: '**** **** **** 3456',
        expiration: '07/26',
        securityCode: '987',
        product: 'Project Management Software',
        price: '32000',
        date: '2024-05-22',
        time: '14:20:00'  
    },
    {
        id: '5',
        licenseType: 'Company',
        name: 'Xavier White',
        company: 'Tech Innovations Ltd.',
        email: 'info@techinnovations.com',
        country: 'Germany',
        cardType: 'Visa',
        cardNumber: '**** **** **** 7890',
        expiration: '05/27',
        securityCode: '246',
        product: 'Document Management System',
        price: '38000',
        date: '2024-05-22',
        time: '15:45:00'  
    },
    {
        id: '6',
        licenseType: 'Person',
        name: 'Emily Brown',
        company: '',  
        email: 'emily.brown@example.com',
        country: 'France',
        cardType: 'Mastercard',
        cardNumber: '**** **** **** 2345',
        expiration: '03/28',
        securityCode: '135',
        product: 'Business Intelligence Tools',
        price: '42000',
        date: '2024-05-22',
        time: '16:55:00'  
    },
    {
        id: '7',
        licenseType: 'Company',
        name: 'Tsuchiya Noboru',
        company: 'Retail Solutions Inc.',
        email: 'info@retailsolutions.com',
        country: 'Japan',
        cardType: 'Visa',
        cardNumber: '**** **** **** 6789',
        expiration: '02/29',
        securityCode: '802',
        product: 'Inventory Management System',
        price: '47000',
        date: '2024-05-22',
        time: '17:30:00'  
    },
    {
        id: '8',
        licenseType: 'Person',
        name: 'David Wilson',
        company: '',  
        email: 'david.wilson@example.com',
        country: 'Brazil',
        cardType: 'American Express',
        cardNumber: '**** **** **** 8901',
        expiration: '04/30',
        securityCode: '579',
        product: 'Point of Sale',
        price: '33000',
        date: '2024-05-22',
        time: '18:10:00'  
    },
    {
        id: '9',
        licenseType: 'Company',
        name: 'Nilam Ahluwalia',
        company: 'Service Solutions Ltd.',
        email: 'info@servicesolutions.com',
        country: 'India',
        cardType: 'Discover',
        cardNumber: '**** **** **** 3456',
        expiration: '06/31',
        securityCode: '246',
        product: 'Customer Support System',
        price: '39000',
        date: '2024-05-22',
        time: '19:20:00'  
    },
    {
        id: '10',
        licenseType: 'Person',
        name: 'Sophia Martinez',
        company: '',  
        email: 'sophia.martinez@example.com',
        country: 'Mexico',
        cardType: 'Mastercard',
        cardNumber: '**** **** **** 7890',
        expiration: '01/32',
        securityCode: '813',
        product: 'Supply Chain Management',
        price: '44000',
        date: '2024-05-22',
        time: '20:45:00'  
    },
];

export function generateTransactionId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 10;
    let transactionId = '';

    for (let i = 0; i < length; i++) {
        transactionId += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return transactionId;
}

export function generateLicenseKey() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const blocks = 4;
    const blockSize = 4;
    let licenseKey = '';

    for (let i = 0; i < blocks; i++) {
        let block = '';
        for (let j = 0; j < blockSize; j++) {
            block += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        licenseKey += block;
        if (i < blocks - 1) {
            licenseKey += '-';
        }
    }

    return licenseKey;
}

/*
PRODUCT
Communication System
Customer Relationship Management
Enterprise Resource Planning System
Accounting Software
Human Resource Management System
Project Management Software
Document Management System
Business Intelligence Tools
Inventory Management System
Point of Sale
Customer Support System
Supply Chain Management
Learning Management System
Business Process Automation
*/