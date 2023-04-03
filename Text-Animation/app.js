const containerElement = document.querySelector('.container');
console.log(containerElement)

const texts = ['YOUTUBER', 'SOFTWARE DEVLOPER', 'PROGRAMMER', 'UI/UX DESIGNER', 'INSTRUCTOR']


let textIndex = 0;
let textCharectorIndex = 0;


    
function updateText() {
    textCharectorIndex++;

    containerElement.innerHTML = `<h1>I AM ${
        texts[textIndex].slice(0, 1) ===  'U' ? "an" : "a"
        } ${texts[textIndex].slice(0, textCharectorIndex)}</h1>`;
    
    // if (texts[textIndex].slice(0, 1) === "U") {
    //     texts[textIndex].slice(0, 1) === 'an'
    // }
        if (textCharectorIndex === texts[textIndex].length) {
            textIndex++;
            textCharectorIndex = 0;
        }
        if (textIndex === texts.length) {
            textIndex = 0;
        }

        setTimeout(updateText, 200);
}

updateText();