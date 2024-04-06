
import { createCards } from './cards.js';


var myHeaders = new Headers();
myHeaders.append("apikey", "pRSDxTFRKXI36Fb2L4TvFjUxOMbz9uEN");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

let tickers = "btc"
let tags = "Bitcoin"
let sources = "-bloomberg.com"
let sort = "desc"
let offset = "1"
let limit = "10"
let keywords = "bitcoin "
let fallback = "on"
let date = "last3months"


fetch(`https://api.apilayer.com/financelayer/news?tickers=${tickers}&tags=${tags}&sources=${sources}&sort=${sort}&offset=${offset}&limit=${limit}&keywords=${keywords}&fallback=${fallback}&date=${date}`, requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result);
    const newsCards = createCards(result.data);
    newsCards.forEach(newsCard => {
      document.querySelector("#root").appendChild(newsCard);
    });
  })
  .catch(error => console.log('error', error));

