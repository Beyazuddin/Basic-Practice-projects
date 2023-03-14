// let hexColor = ("#" + Math.floor(Math.random() * 16777216).toString(16));

// console.log(hexColor);
const inputElement = document.querySelector(".inp");
const buttonElement = document.querySelector(".btn");
const h1Element = document.querySelector(".h1");
const copyBtnElement = document.querySelector(".copy_btn");

buttonElement.addEventListener("click", () => {
    let hexNum = Math.random().toString(16).slice(2, 8);
    const hexcolor = "#" + hexNum;
    const color = (inputElement.value = hexcolor);
    const inputElementValue = inputElement;
    document.body.style.backgroundColor = color;
    h1Element.style.color = color;
    copyBtnElement.style.color = color;
});

copyBtnElement.addEventListener("click", () => {
    const inputHexColor = inputElement.select();

    navigator.clipboard.writeText(inputElement.value);
});



  