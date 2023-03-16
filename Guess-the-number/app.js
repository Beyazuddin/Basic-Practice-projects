const checkButtonElement = document.querySelector(".check-btn");

const attemptLeftElement = document.querySelector("#total-attempts-left");

const inputTextElement = document.querySelector(".input-number");

const messageElement = document.querySelector(".message");

const secretNumberElement = document.querySelector(".secret-number");

const mainSectionElement = document.querySelector(".main-section ");

const highScoreElement = document.querySelector(".final-high-score");

const currentScoreElement = document.getElementById("current-score");

const newGameBtnElement = document.querySelector(".new-game");

let secretNumber = Math.floor(Math.random() * 20) + 1;
let currentScore = 20;
let attemtsLeft = 10;
let highScore = 0;

checkButtonElement.addEventListener("click", () => {
    if (attemtsLeft > 0) {
        attemtsLeft--;

        attemptLeftElement.textContent = attemtsLeft;

        let guess = Number(inputTextElement.value);

        if (guess === 0) {
            messageElement.textContent = "No number or 0 is entered";
        } else if (guess === secretNumber) {
            messageElement.textContent = "You won the game!";
            secretNumberElement.textContent = secretNumber;
            mainSectionElement.style.backgroundColor = "rgba(170, 226, 85,0.5)";

            highScore = currentScore > highScore ? currentScore : highScore;

            highScoreElement.textContent = highScore;
        } else if (guess !== secretNumber) {
            if (attemtsLeft > 0) {
                mainSectionElement.style.backgroundColor =
                    "rgba(239, 10, 10, 0.62)";
                setTimeout(() => {
                    mainSectionElement.style.backgroundColor =
                        "rgba(181, 231, 225, 0.3)";
                }, 300);

                let message =
                    guess > secretNumber
                        ? "you are to high!"
                        : "You are too low";
                messageElement.textContent = message;
                currentScore--;
                currentScoreElement.textContent = currentScore;
            } else {
                messageElement.textContent = "You Lost the Game";
                currentScoreElement.textContent = 0;
                mainSectionElement.classList.add("loos");
            }
        }

        // else if (attemptLeftElement.textContent === 0) {
        //     checkButtonElement.disabled = true;
        // }
    } else {
        messageElement.textContent = "You Lost the Game";
        attemptLeftElement.textContent = 0;
        mainSectionElement.style.backgroundColor = "rgba(239, 10, 10, 0.5)";
        checkButtonElement.disabled = true;
        document.querySelector(".temp").disabled = true;
    }
});

newGameBtnElement.addEventListener("click", () => {
    secretNumber = Math.floor(Math.random() * 20) + 1;
    currentScore = 20;
    attemtsLeft = 10;

    messageElement.textContent = "Guess a number between 1-20";

    currentScoreElement.textContent = currentScore;
    attemptLeftElement.textContent = attemtsLeft;
    inputTextElement.value = " ";
    secretNumberElement.textContent = "?";
    mainSectionElement.style.backgroundColor = "rgba(181, 231, 225, 0.3)";
});

// let a = 25;
// let b = a;
// a = 30;

// const x = {
//     name: "Beyaz",
//     age: 20,
// };

// const y = x;
// y.age = 25;
// // What is x.age?

// const z = [25, 50, 75, 100];
// const m = z;
// m.push(125);

// console.log(a, b, x.age, y.age, m, z);
// // 30, 25, 25, 25, 5 vale array, 5 value array // Umesh
// // 30, 25, 20, error, 5 value array, 4 value array //Beyaz


