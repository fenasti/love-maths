
document.addEventListener ("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    
    for(let button of buttons) {
            button.addEventListener("click", function() {
                if (this.getAttribute("data-type") === "submit") {
                    alert("You clicked Submit!");
                } else {
                    let gameType = this.getAttribute("data-type");
                    alert(`you clicked ${gameType}!`);
                }
     })
    }
})

function runGame() {

    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
    console.log(num2)
    console.log(num1)
    console.log(num1 + num2)
}

runGame();

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {
    
}