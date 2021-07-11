const Quotes = [
    {
        name : 'Elon Musk',
        quote : 'When something is important enough, you do it even if the odds are not in your favor.'
    },
    {
        name : 'Rick Astley',
        quote : 'Never gonna give you up, never gonna let you down !'
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote'); 

quoteBtn.addEventListener('click', displayQuote);

function displayQuote (){
    let number = Math.floor(Math.random()*Quotes.length);
    quote.innerHTML = Quotes[number].name;
    quoteAuthor.innerHTML = Quotes[number].quote;
}