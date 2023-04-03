let textElement = document.querySelector(".text-area");
console.log(textElement);
let totalChaElemet = document.querySelector(".TotalCharacters");
console.log(totalChaElemet);
let RemainingCharactersElemet = document.querySelector(".RemainingCharacters");
let maxLength = 60;
textElement.addEventListener("keyup", () => {
    updateCharacters();
});

function updateCharacters() {
    textElement.value.length;
    totalChaElemet.textContent = textElement.value.length;
    RemainingCharactersElemet.textContent =
        maxLength - textElement.value.length;

    if (RemainingCharactersElemet.textContent <= 10) {
        RemainingCharactersElemet.classList.add("warning");
        textElement.classList.add("warnings");
    } else {
        RemainingCharactersElemet.classList.remove("warning");
        textElement.classList.remove("warnings");
    }
}
