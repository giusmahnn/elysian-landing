/* Central configuration. Edit prices and payment details HERE only.
   null = not supplied yet -> the site shows a clear placeholder. */
const ELYSIAN_DATA = {
  whatsappNumber: "2348130886889",
  phoneDisplay: "+234 813 088 6889",
  prices: {
    land: { sqm300: null, sqm600: null, acre1: null },
    buildings: { villa: null, bungalow: null, apartment: null, businessDistrict: null },
    cottages: { bed1: null, bed2: null, bed3: null },
    greenhouse: { annualLease: 15000000 }
  },
  payment: {
    outright: true,
    deposit: null,            // e.g. "30%" once confirmed
    instalmentFrequency: null, // e.g. "Monthly" or "Quarterly"
    duration: null,           // e.g. "12 months"
    finalPaymentDeadline: null
  },
  messages: {
    land300: "Hello, I am interested in purchasing a 300 SQM plot at Elysian Farms & Resort. Please provide more information.",
    land600: "Hello, I am interested in purchasing a 600 SQM plot at Elysian Farms & Resort. Please provide more information.",
    land1acre: "Hello, I am interested in purchasing a 1 Acre plot at Elysian Farms & Resort. Please provide more information.",
    landAll: "Hello, I would like more information about the available plots at Elysian Farms & Resort.",
    greenhouse: "Hello, I am interested in the greenhouse lease opportunity at Elysian Farms & Resort.",
    villa: "Hello, I am interested in building a Villa at Elysian Farms & Resort. Please share pricing and development guidelines.",
    bungalow: "Hello, I am interested in building a Bungalow at Elysian Farms & Resort. Please share pricing and development guidelines.",
    apartment: "Hello, I am interested in developing a Block of Apartments at Elysian Farms & Resort. Please share pricing and development guidelines.",
    business: "Hello, I am interested in the Business District at Elysian Farms & Resort. Please share pricing and development guidelines.",
    cottage1: "Hello, I am interested in the 1 Bedroom Aduke Cottage. Please provide pricing and payment details.",
    cottage2: "Hello, I am interested in the 2 Bedroom Aduke Cottage. Please provide pricing and payment details.",
    cottage3: "Hello, I am interested in the 3 Bedroom Aduke Cottage. Please provide pricing and payment details.",
    payment: "Hello, I would like to discuss available payment arrangements at Elysian Farms & Resort.",
    general: "Hello, I would like to make an enquiry about Elysian Farms & Resort."
  }
};
