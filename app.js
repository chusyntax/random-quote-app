const textQuote = document.getElementById('textQuote');
const author = document.getElementById('author');
const btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    fetch("http://api.quotable.io/random")
    .then(res => res.json())
.then(quote => {
    textQuote.innerHTML = `<em>${quote.content}</em>`;
    author.innerHTML = `~ ${quote.author}`;
})

})
