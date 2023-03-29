const inputElement = document.querySelector(".inp");
const buttonElement = document.querySelector(".btn");
const h1Element = document.querySelector(".h1");
const copyBtnElement = document.querySelector(".copy_btn");

buttonElement.addEventListener("click", () => {
    let hexNum = Math.random().toString(16).slice(2, 8);
    const hexcolor = "#" + hexNum;
    const inputElementColor = (inputElement.value = hexcolor);
    document.body.style.backgroundColor = inputElementColor;
    h1Element.style.color = inputElementColor;
    copyBtnElement.style.color = inputElementColor;
    copyBtnElement.style.backgroundColor = inputElementColor;
});

copyBtnElement.addEventListener("click", () => {
    const inputHexColor = inputElement.select();

    navigator.clipboard.writeText(inputElement.value);
});