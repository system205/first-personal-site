
type factT = {
    text: string,
    number: number
}

export default () => {
    const fact: factT = { text: "", number: 0 };

    onload = async () => {
        const slider = document.getElementById('quote-slider') as HTMLDivElement;
        if (slider == null) throw new Error('Cannot find the fact element');

        slider.style.display = "none";
        await setFact();
        slider.style.display = 'flex';
    }

    async function setFact() {
        try {
            const response = await fetch('http://numbersapi.com/random/math');
            const data: string[] = (await response.text()).split(" is ");
            fact.text = data[1];
            fact.number = parseInt(data[0]);

        } catch (e) {
            fact.text = 'Server';
            fact.number = 500;
        }


        const quoteField = document.getElementById('quote') as HTMLParagraphElement;
        const quoteAuthor = document.getElementById('quote-author') as HTMLLabelElement;

        if (quoteField == null || quoteAuthor == null) throw new Error('Cannot find the fact element');

        quoteField.innerText = '\u00AB' + fact.text + '\u00BB';
        quoteAuthor.innerText = 'is ' + fact.number;

    }

    const buttonNext = document.getElementById('next-quote-btn') as HTMLButtonElement;
    if (buttonNext == null) throw new Error('Cannot find the fact element');

    buttonNext.addEventListener('click', setFact);

}

