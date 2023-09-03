import { formatArrayToObj } from "@/utils/formatArrayToObj";

type TypeCountries = string[];

const countries: TypeCountries = [
  "Gibraltar",
  "Netherlands",
  "Sweden",
  "Belgium",
  "Greece",
  "Norway",
  "Switzerland",
  "BosniaAnd Herzegovina",
  "Hungary",
  "Poland",
  "Turkey",
  "Bulgaria",
  "Iceland",
  "Portugal",
  "Ukraine",
  "Croatia",
  "Ireland",
  "Romania",
  "United Kingdom",
  "Cyprus",
  "Italy",
  "Russian Federation",
  "Vatican City",
  "Czech Republic",
  "Latvia",
  "Saint Barthélemy",
  "Denmark",
  "Liechtenstein",
  "San Marino",
  "Algeria",
  "Jordan",
  "Nigeria",
  "South Africa",
  "Angola",
  "Kenya",
  "Oman",
  "Tanzania",
  "Bahrain",
  "Kuwait",
  "Pakistan",
  "Tunisia",
  "Botswana",
  "Kyrgyzstan",
  "Palestinian Territories",
  "Uganda",
  "Cameroon",
  "Mauritius",
  "Qatar",
  "United Arab Emirates",
  "Egypt",
  "Mayotte",
  "Reunion",
  "Zimbabwe",
  "Ghana",
  "Morocco",
  "Saudi Arabia",
  "Israel",
  "Namibia",
  "SenegalArgentina",
  "Cayman Islands",
  "Guadeloupe",
  "Peru",
  "Aruba",
  "Chile",
  "Guatemala",
  "Saint Kitts and Nevis",
  "Barbados",
  "Colombia",
  "Honduras",
  "Saint Martin",
  "Belize",
  "Costa Rica",
  "Jamaica",
  "Trinidad and Tobago",
  "Bermuda",
  "Dominican Republic",
  "Martinique",
  "Uruguay",
  "Bolivia",
  "Ecuador",
  "Mexico",
  "Venezuela",
  "Brazil",
  "El Salvador",
  "Panama",
  "Canada",
  "French Guiana",
  "Paraguay",
  "Australia",
  "India",
  "Marshall Islands",
  "Singapore",
  "Bangladesh",
  "Indonesia",
  "Micronesia",
  "South Korea",
  "Cambodia",
  "Japan",
  "New Caledonia",
  "Sri Lanka",
  "China",
  "Kazakhstan",
  "New Zealand",
  "Taiwan",
  "Fiji",
  "Macao",
  "Palau",
  "Thailand",
  "Hong Kong",
  "Malaysia",
  "Philippines",
  "VietnamAlbania",
  "Estonia",
  "Lithuania",
  "Serbia",
  "Andorra",
  "Finland",
  "Luxembourg",
  "Slovakia",
  "Armenia",
  "France",
  "Malta",
  "Slovenia",
  "Austria",
  "Germany",
  "Monaco",
  "Spain",
  "Belarus",
];
export const countriesObjects = formatArrayToObj<TypeCountries>(countries);