const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

//Add Loading Spinner
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Remove Loading Spinner
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

function newQuote() {
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  console.log(quote);
  loading();
  // Check if author field is blank
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
  //check quote length
  if (quote.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
  complete();
}

// // Get Quotes From API
// async function getQuotes() {
//   loading();
//   const apiUrl = 'https://type.fit/api/quotes';
//   try {
//     const response = await fetch(apiUrl);
//     apiQuotes = await response.json();
//     newQuote();
//   } catch (error) {
//     // Catch Error Here
//   }
// }
// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`;
  window.open(twitterUrl, "_blank");
}

// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

newQuote();

// Same Using an API
// const quoteContainer = document.getElementById("quote-container");
// const quoteText = document.getElementById("quote");
// const authorText = document.getElementById("author");
// const twitterBtn = document.getElementById("twitter");
// const newQuoteBtn = document.getElementById("new-quote");
// const loader = document.getElementById("loader");

// // Show Loading
// function loading() {
//   loader.hidden = false;
//   quoteContainer.hidden = true;
// }

// // Hide Loading
// function complete() {
//   if (!loader.hidden) {
//     quoteContainer.hidden = false;
//     loader.hidden = true;
//   }
// }

// // Get Quote From API
// async function getQuote() {
//   loading();
//   const proxyUrl = "https://whispering-tor-04671.herokuapp.com/";

//   const apiUrl =
//     "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
//   try {
//     const response = await fetch(proxyUrl + apiUrl);
//     const data = await response.json();
//     // If Author is blank, add 'Unknown'
//     if (data.quoteAuthor === "") {
//       authorText.innerText = "Unknown";
//     } else {
//       authorText.innerText = data.quoteAuthor;
//     }
//     // Reduce font size for long quotes
//     if (data.quoteText.length > 120) {
//       quoteText.classList.add("long-quote");
//     } else {
//       quoteText.classList.remove("long-quote");
//     }
//     quoteText.innerText = data.quoteText;
//     // Stop Loader, Show Quote
//     complete();
//   } catch (error) {
//     getQuote();
//   }
// }

// // Tweet Quote
// function tweetQuote() {
//   const quote = quoteText.innerText;
//   const author = authorText.innerText;
//   const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`;
//   window.open(twitterUrl, "_blank");
// }

// // Event Listeners
// newQuoteBtn.addEventListener("click", getQuote);
// twitterBtn.addEventListener("click", tweetQuote);

// // On Load
// getQuote();
