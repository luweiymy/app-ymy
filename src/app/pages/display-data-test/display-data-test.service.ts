import { Injectable } from '@angular/core';
export class Sale {
  id: number;
  region: string;
  country: string;
  city: string;
  amount: number;
  date: Date;
}
let sales: Sale[] =  [{
  "id": 10248,
  "region": "North America",
  "country": "United States of America",
  "city": "New York",
  "amount": 1740,
  "date": new Date("2013-01-06")
}, {
  "id": 10249,
  "region": "North America",
  "country": "United States of America",
  "city": "Los Angeles",
  "amount": 850,
  "date": new Date("2013-01-13")
}, {
  "id": 10250,
  "region": "North America",
  "country": "United States of America",
  "city": "Denver",
  "amount": 2235,
  "date": new Date("2013-01-07")
}, {
  "id": 10251,
  "region": "North America",
  "country": "Canada",
  "city": "Vancouver",
  "amount": 1965,
  "date": new Date("2013-01-03")
}, {
  "id": 10252,
  "region": "North America",
  "country": "Canada",
  "city": "Edmonton",
  "amount": 880,
  "date": new Date("2013-01-10")
}, {
  "id": 10253,
  "region": "South America",
  "country": "Brazil",
  "city": "Rio de Janeiro",
  "amount": 5260,
  "date": new Date("2013-01-17")
}, {
  "id": 10254,
  "region": "South America",
  "country": "Argentina",
  "city": "Buenos Aires",
  "amount": 2790,
  "date": new Date("2013-01-21")
}, {
  "id": 10255,
  "region": "South America",
  "country": "Paraguay",
  "city": "Asuncion",
  "amount": 3140,
  "date": new Date("2013-01-01")
},{
  "id": 10256,
  "region": "Europe",
  "country": "United Kingdom",
  "city": "London",
  "amount": 6175,
  "date": new Date("2013-01-24")
}, {
  "id": 10257,
  "region": "Europe",
  "country": "Germany",
  "city": "Berlin",
  "amount": 4575,
  "date": new Date("2013-01-11")
}, {
  "id": 10258,
  "region": "Europe",
  "country": "Spain",
  "city": "Madrid",
  "amount": 3680,
  "date": new Date("2013-01-12")
}, {
  "id": 10259,
  "region": "Europe",
  "country": "Russian Federation",
  "city": "Moscow",
  "amount": 2260,
  "date": new Date("2013-01-01")
}, {
  "id": 10260,
  "region": "Asia",
  "country": "China",
  "city": "Beijing",
  "amount": 2910,
  "date": new Date("2013-01-26")
}, {
  "id": 10261,
  "region": "Asia",
  "country": "Japan",
  "city": "Tokyo",
  "amount": 8400,
  "date": new Date("2013-01-05")
}, {
  "id": 10262,
  "region": "Asia",
  "country": "Republic of Korea",
  "city": "Seoul",
  "amount": 1325,
  "date": new Date("2013-01-14")
}, {
  "id": 10263,
  "region": "Australia",
  "country": "Australia",
  "city": "Sydney",
  "amount": 3920,
  "date": new Date("2013-01-05")
}, {
  "id": 10264,
  "region": "Australia",
  "country": "Australia",
  "city": "Melbourne",
  "amount": 2220,
  "date": new Date("2013-01-15")
}, {
  "id": 10265,
  "region": "Africa",
  "country": "South Africa",
  "city": "Pretoria",
  "amount": 940,
  "date": new Date("2013-01-01")
}, {
  "id": 10266,
  "region": "Africa",
  "country": "Egypt",
  "city": "Cairo",
  "amount": 1630,
  "date": new Date("2013-01-10")
}, {
  "id": 10267,
  "region": "North America",
  "country": "Canada",
  "city": "Edmonton",
  "amount": 2910,
  "date": new Date("2013-01-23")
}, {
  "id": 10268,
  "region": "North America",
  "country": "United States of America",
  "city": "Los Angeles",
  "amount": 2600,
  "date": new Date("2013-01-14")
}, {
  "id": 10269,
  "region": "Europe",
  "country": "Spain",
  "city": "Madrid",
  "amount": 4340,
  "date": new Date("2013-01-26")
}, {
  "id": 10270,
  "region": "Europe",
  "country": "United Kingdom",
  "city": "London",
  "amount": 6650,
  "date": new Date("2013-01-24")
}, {
  "id": 10271,
  "region": "North America",
  "country": "Canada",
  "city": "Edmonton",
  "amount": 490,
  "date": new Date("2013-01-22")
}, {
  "id": 10272,
  "region": "North America",
  "country": "United States of America",
  "city": "New York",
  "amount": 3390,
  "date": new Date("2013-01-25")
}, {
  "id": 10273,
  "region": "North America",
  "country": "United States of America",
  "city": "New York",
  "amount": 5160,
  "date": new Date("2013-02-20")
}, {
  "id": 10274,
  "region": "North America",
  "country": "United States of America",
  "city": "Los Angeles",
  "amount": 5750,
  "date": new Date("2013-02-12")
}, {
  "id": 10275,
  "region": "North America",
  "country": "United States of America",
  "city": "Denver",
  "amount": 2805,
  "date": new Date("2013-02-13")
}, {
  "id": 10276,
  "region": "North America",
  "country": "Canada",
  "city": "Vancouver",
  "amount": 2505,
  "date": new Date("2013-02-09")
}, {
  "id": 10277,
  "region": "North America",
  "country": "Canada",
  "city": "Edmonton",
  "amount": 930,
  "date": new Date("2013-02-04")
}, {
  "id": 10278,
  "region": "South America",
  "country": "Brazil",
  "city": "Rio de Janeiro",
  "amount": 1240,
  "date": new Date("2013-02-03")
}, {
  "id": 10279,
  "region": "South America",
  "country": "Argentina",
  "city": "Buenos Aires",
  "amount": 315,
  "date": new Date("2013-02-04")
}, {
  "id": 10280,
  "region": "South America",
  "country": "Paraguay",
  "city": "Asuncion",
  "amount": 2870,
  "date": new Date("2013-02-18")
}, {
  "id": 10281,
  "region": "Europe",
  "country": "United Kingdom",
  "city": "London",
  "amount": 5150,
  "date": new Date("2013-02-18")
}, {
  "id": 10282,
  "region": "Europe",
  "country": "Germany",
  "city": "Berlin",
  "amount": 2725,
  "date": new Date("2013-02-20")
}, {
  "id": 10283,
  "region": "Europe",
  "country": "Spain",
  "city": "Madrid",
  "amount": 2840,
  "date": new Date("2013-02-04")
}, {
  "id": 10284,
  "region": "Europe",
  "country": "Russian Federation",
  "city": "Moscow",
  "amount": 5840,
  "date": new Date("2013-02-13")
}, {
  "id": 10285,
  "region": "Asia",
  "country": "China",
  "city": "Beijing",
  "amount": 6750,
  "date": new Date("2013-02-11")
}, {
  "id": 10286,
  "region": "Asia",
  "country": "Japan",
  "city": "Tokyo",
  "amount": 1200,
  "date": new Date("2013-02-03")
}, {
  "id": 10287,
  "region": "Asia",
  "country": "Republic of Korea",
  "city": "Seoul",
  "amount": 4550,
  "date": new Date("2013-02-08")
}, {
  "id": 10288,
  "region": "Australia",
  "country": "Australia",
  "city": "Sydney",
  "amount": 6040,
  "date": new Date("2013-02-17")
}, {
  "id": 10289,
  "region": "Australia",
  "country": "Australia",
  "city": "Melbourne",
  "amount": 2205,
  "date": new Date("2013-02-08")
}, {
  "id": 10290,
  "region": "Africa",
  "country": "South Africa",
  "city": "Pretoria",
  "amount": 990,
  "date": new Date("2013-02-20")
}, {
  "id": 10291,
  "region": "Africa",
  "country": "Egypt",
  "city": "Cairo",
  "amount": 700,
  "date": new Date("2013-02-11")
}, {
  "id": 10292,
  "region": "Australia",
  "country": "Australia",
  "city": "Melbourne",
  "amount": 2325,
  "date": new Date("2013-02-15")
}, {
  "id": 10293,
  "region": "South America",
  "country": "Argentina",
  "city": "Buenos Aires",
  "amount": 930,
  "date": new Date("2013-02-21")
}, {
  "id": 10294,
  "region": "North America",
  "country": "Canada",
  "city": "Edmonton",
  "amount": 1560,
  "date": new Date("2013-02-04")
}, {
  "id": 10295,
  "region": "North America",
  "country": "United States of America",
  "city": "New York",
  "amount": 1740,
  "date": new Date("2013-03-04")
}, {
  "id": 10296,
  "region": "North America",
  "country": "United States of America",
  "city": "Los Angeles",
  "amount": 3575,
  "date": new Date("2013-03-20")
}, {
  "id": 10297,
  "region": "North America",
  "country": "United States of America",
  "city": "Denver",
  "amount": 4500,
  "date": new Date("2013-03-04")
}, {
  "id": 10298,
  "region": "North America",
  "country": "Canada",
  "city": "Vancouver",
  "amount": 1605,
  "date": new Date("2013-03-17")
}, {
  "id": 10299,
  "region": "North America",
  "country": "Canada",
  "city": "Edmonton",
  "amount": 800,
  "date": new Date("2013-03-21")
}, {
  "id": 10300,
  "region": "South America",
  "country": "Brazil",
  "city": "Rio de Janeiro",
  "amount": 640,
  "date": new Date("2013-03-08")
}, {
  "id": 10301,
  "region": "South America",
  "country": "Argentina",
  "city": "Buenos Aires",
  "amount": 735,
  "date": new Date("2013-03-19")
}, {
  "id": 10302,
  "region": "South America",
  "country": "Paraguay",
  "city": "Asuncion",
  "amount": 2520,
  "date": new Date("2013-03-20")
}, {
  "id": 10303,
  "region": "Europe",
  "country": "United Kingdom",
  "city": "London",
  "amount": 6675,
  "date": new Date("2013-03-18")
}, {
  "id": 10304,
  "region": "Europe",
  "country": "Germany",
  "city": "Berlin",
  "amount": 3625,
  "date": new Date("2013-03-25")
}, {
  "id": 10305,
  "region": "Europe",
  "country": "Spain",
  "city": "Madrid",
  "amount": 1200,
  "date": new Date("2013-03-07")
}, {
  "id": 10306,
  "region": "Europe",
  "country": "Russian Federation",
  "city": "Moscow",
  "amount": 2000,
  "date": new Date("2013-03-07")
}, {
  "id": 10307,
  "region": "Asia",
  "country": "China",
  "city": "Beijing",
  "amount": 1410,
  "date": new Date("2013-03-10")
}, {
  "id": 10308,
  "region": "Asia",
  "country": "Japan",
  "city": "Tokyo",
  "amount": 2700,
  "date": new Date("2013-03-19")
}, {
  "id": 10309,
  "region": "Asia",
  "country": "Republic of Korea",
  "city": "Seoul",
  "amount": 5950,
  "date": new Date("2013-03-24")
}, {
  "id": 10310,
  "region": "Australia",
  "country": "Australia",
  "city": "Sydney",
  "amount": 5120,
  "date": new Date("2013-03-08")
},{
  "id": 10517,
  "region": "North America",
  "country": "United States of America",
  "city": "New York",
  "amount": 7710,
  "date": new Date("2014-01-18")
}, {
  "id": 10518,
  "region": "North America",
  "country": "United States of America",
  "city": "Los Angeles",
  "amount": 7975,
  "date": new Date("2014-01-10")
}, {
  "id": 10519,
  "region": "North America",
  "country": "United States of America",
  "city": "Denver",
  "amount": 3285,
  "date": new Date("2014-01-13")
}, {
  "id": 10520,
  "region": "North America",
  "country": "Canada",
  "city": "Vancouver",
  "amount": 2580,
  "date": new Date("2014-01-22")
}, {
  "id": 10521,
  "region": "North America",
  "country": "Canada",
  "city": "Edmonton",
  "amount": 2160,
  "date": new Date("2014-01-26")
}, {
  "id": 10522,
  "region": "South America",
  "country": "Brazil",
  "city": "Rio de Janeiro",
  "amount": 1100,
  "date": new Date("2014-01-25")
}, {
  "id": 10523,
  "region": "South America",
  "country": "Argentina",
  "city": "Buenos Aires",
  "amount": 4425,
  "date": new Date("2014-01-21")
}, {
  "id": 10524,
  "region": "South America",
  "country": "Paraguay",
  "city": "Asuncion",
  "amount": 1360,
  "date": new Date("2014-01-22")
}, {
  "id": 10525,
  "region": "Europe",
  "country": "United Kingdom",
  "city": "London",
  "amount": 3250,
  "date": new Date("2014-01-14")
}, {
  "id": 10526,
  "region": "Europe",
  "country": "Germany",
  "city": "Berlin",
  "amount": 5550,
  "date": new Date("2014-01-21")
}, {
  "id": 10527,
  "region": "Europe",
  "country": "Spain",
  "city": "Madrid",
  "amount": 2860,
  "date": new Date("2014-01-25")
}]
@Injectable({
  providedIn: 'root'
})

export class DisplayDataTestService {
  getSales() {
    return sales;
  }
  constructor() { }
}
