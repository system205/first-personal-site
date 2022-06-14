
export default () => {

    let quote: string = '&copy';
    let author: string = quote;
    const token = '35174d0b64c5690e2e2fce564c92be0b';


    onload = async () =>{

        const slider = document.getElementById('quote-slider');
        if (slider == null) throw new Error('Cannot find the fact element');

        slider.style.display = "none";
        await setQuote();
        slider.style.display = 'flex';
    }

    async function setQuote(){
        let quoteText: string;
        let author: string;
        try {
            const data = await fetch('https://favqs.com/api/quotes', {
                method: 'GET',
                headers:{
                    Authorization: `Token token="${token}"`
                }
            });
            const json: {quotes: [{body:string, author:string}]} = await data.json();
            
            quoteText = json.quotes[0].body;
            author = json.quotes[0].author;

        } catch (e) {
            quoteText = '500'; 
            author = 'Server';
        }
        

        const quoteField =  document.getElementById('quote');
        const quoteAuthor = document.getElementById('quote-author');

        if (quoteField == null || quoteAuthor == null) throw new Error('Cannot find the fact element');

        quoteField.innerText = '\u00AB'+quoteText+'\u00BB';
        quoteAuthor.innerText = '\u00A9' + author;
        
    }

    const buttonNext = document.getElementById('next-quote-btn');
    if(buttonNext == null) throw new Error('Cannot find the fact element');

    buttonNext.addEventListener('click', setQuote);

}

