const { URL, URLSearchParams } = require('url');

const currency = "JPY";
const exact_date = "20240127"; 

const baseUrl = "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange";

const url = new URL(baseUrl);

url.search = new URLSearchParams({
    valcode: currency,
    date: exact_date,
    json: ""   
});

console.log(url.toString());