const buttonElement = document.querySelector(".head-btn");
console.log(buttonElement);
const containerElement = document.querySelector(".sticky-notes");
console.log(containerElement);

buttonElement.addEventListener('click', () => {
    let textAreaElement = document.createElement("TEXTAREA");
    containerElement.appendChild(textAreaElement);
    textAreaElement.classList.add('notes');

    textAreaElement.addEventListener('dblclick', () => {
        alert("You Deleted a Note");
        textAreaElement.remove();
        
    })
});