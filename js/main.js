
import { createCards } from './cards.js';


var myHeaders = new Headers();
myHeaders.append("apikey", "WBfEwOVgNMjDS3UMguKYF1oUAfeHbg2n");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

let fallback = "on"

function fetchNews() {

  const tickers = document.getElementById('tickers').value;
  const tags = document.getElementById('tags').value;
  const sources = document.getElementById('sources').value;
  const sort = document.getElementById('sort').value;
  const offset = document.getElementById('offset').value;
  const limit = document.getElementById('limit').value;
  const keywords = document.getElementById('keywords').value;
  const date = document.getElementById('date').value;

//  why it does not save files correctly on github i do not know

  fetch(`https://api.apilayer.com/financelayer/news?tickers=${tickers}&tags=${tags}&sources=${sources}&sort=${sort}&offset=${offset}&limit=${limit}&keywords=${keywords}&fallback=${fallback}&date=${date}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result.data);
      localStorage.setItem("resultData",JSON.stringify(result.data) );
      let newsCards = createCards(result.data);
      newsCards.forEach(newsCard => {
        document.querySelector("#root").appendChild(newsCard);
      });
    })
    .catch(error => {
      console.log('error', error);
    });
}

document.getElementById('tickers').addEventListener('change', fetchNews);
document.getElementById('tags').addEventListener('change', fetchNews);
document.getElementById('sources').addEventListener('change', fetchNews);
document.getElementById('sort').addEventListener('change', fetchNews);
document.getElementById('offset').addEventListener('change', fetchNews);
document.getElementById('limit').addEventListener('change', fetchNews);
document.getElementById('keywords').addEventListener('change', fetchNews);
document.getElementById('date').addEventListener('change', fetchNews);


fetchNews();