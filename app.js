let quote = document.getElementById('quote');

console.log(quote);

fetch('/quotes.json')
  .then(response => response.json())
  .then(data => {
      starcannqs = data.quotes;
      modifyhtml(starcannqs)
    })
  .catch(error => console.log(error));

function modifyhtml(starcannqs) {
    qu13e = starcannqs[Math.floor(Math.random()*starcannqs.length)];
    quote.innerText = qu13e;
    console.log(qu13e);
}