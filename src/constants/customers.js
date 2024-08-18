const customers = [
    {
        id: 0,
        name: 'Jane Cooper',
        company: 'Microsoft',
        phoneNumber: '(225) 555-0118',
        email: 'jane@microsoft.com',
        country: 'United States',
        status: true,
    },
    {
        id: 1,
        name: 'Floyd Miles',
        company: 'Yahoo',
        phoneNumber: '(205) 555-0100',
        email: 'floyd@yahoo.com',
        country: 'Kiribati',
        status: false,
    },
    {
        id: 2,
        name: 'Ronald Richards',
        company: 'Adobe',
        phoneNumber: '(302) 555-0107',
        email: 'ronald@adobe.com',
        country: 'Israel',
        status: false,
    },
    {
        id: 3,
        name: 'Marvin McKinney',
        company: 'Tesla',
        phoneNumber: '(252) 555-0126',
        email: 'marvin@tesla.com',
        country: 'Iran',
        status: true,
    },
    {
        id: 4,
        name: 'Jerome Bell',
        company: 'Google',
        phoneNumber: '(629) 555-0129',
        email: 'jerome@google.com',
        country: 'Réunion',
        status: true,
    },
    {
        id: 5,
        name: 'Réunion',
        company: 'Microsoft',
        phoneNumber: '(406) 555-0120',
        email: 'kathryn@microsoft.com',
        country: 'Curaçao',
        status: true,
    },
    {
        id: 6,
        name: 'Jacob Jones',
        company: 'Yahoo',
        phoneNumber: '(208) 555-0112',
        email: 'jacob@yahoo.com',
        country: 'Brazil',
        status: true,
    },
    {
        id: 7,
        name: 'Kristin Watson',
        company: 'Facebook',
        phoneNumber: '(704) 555-0127',
        email: 'kristin@facebook.com',
        country: 'Åland Islands',
        status: false,
    }
]


const names = [
    "Alex Smith", "Maria Garcia", "John Doe", "Anna Johnson", "James Brown",
    "Emily Davis", "Michael Miller", "Olivia Wilson", "Daniel Anderson",
    "Sophia Taylor", "David Thomas", "Isabella Martinez", "Mark White",
    "Emma Hernandez", "Steven Clark", "Natalie Lewis", "Andrew Young",
    "Grace Walker", "Ryan King", "Victoria Wright", "Yaroslav Novak",
    "Oksana Shevchenko", "Viktor Petrenko", "Alina Kuzmenko", "Ihor Nosenko"
]

const companies = [
    "Apple", "Amazon", "Netflix", "Spotify", "Twitter", "Oracle",
    "Salesforce", "IBM", "Intel", "AMD", "SpaceX", "NVIDIA", "HP", "Dell",
    "Samsung", "LG", "Cisco", "Dropbox", "Zoom", "Uber", "Glivera-team"
]

const countries = [
    "United Kingdom", "Canada", "Australia", "Germany", "France",
    "Netherlands", "Japan", "South Korea", "India", "Mexico", "Ukraine"
]

for (let i = 8; i < 260; i++) {
    const customer = {
        id: i,
        name: names[Math.floor(Math.random() * names.length)],
        company: companies[Math.floor(Math.random() * companies.length)],
        phoneNumber: `(${Math.floor(Math.random() * 800) + 200}) 555-01${Math.floor(Math.random() * 90) + 10}`,
        email: `${names[Math.floor(Math.random() * names.length)].toLowerCase().replace(' ', '')}@${companies[Math.floor(Math.random() * companies.length)].toLowerCase()}.com`,
        country: countries[Math.floor(Math.random() * countries.length)],
        status: Math.random() < 0.5
    };

    customers.push(customer);
}


export default customers;