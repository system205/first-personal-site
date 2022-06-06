
let quote = author = '&copy';
const token = '35174d0b64c5690e2e2fce564c92be0b';


onload = async () =>{
    document.getElementById('quote-slider').style.display = "none";
    await setQuote();
    document.getElementById('quote-slider').style.display = 'flex';
}

async function setQuote(){
    await fetch('https://favqs.com/api/quotes', {
        method: 'GET',
        headers:{
            'Authorization': `Token token="${token}"`
        }
    })
    .then( x => x.json())
    .then(x => {quote = x.quotes[0].body; author = x.quotes[0].author;})
    .catch( () => {quote = '500'; author = 'Server';});

    document.getElementById('quote').innerText = '\u00AB'+quote+'\u00BB';
    document.getElementById('quote-author').innerText = '\u00A9' + author;
    
}

document.getElementById('next-quote-btn').addEventListener('click', setQuote);



