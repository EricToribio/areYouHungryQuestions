const resetInput = document.getElementById('text-form')
const letsEat = document.getElementById("letsEatQuestions-btn")
letsEat.addEventListener('click', cookOrEatOut)
const output = document.getElementById('output')
const questionOut = document.getElementById('questions')
const questionContainer = document.getElementById('questions-container')
const inputContainer = document.getElementById('inputContainer')
const submit = document.getElementById('submit-btn')
//var input = document.getElementById('getAnswer').value;
const quizContainer = document.getElementById('container')
submit.addEventListener('click', answer)

function answer(e) {

    var input = document.getElementById('getAnswer').value;
    if (questionOut.innerText == question[0]) {
        if (input == "cook") {
            output.classList.remove('hide')
            output.innerText = "Ill cook the meat and you cook the sides"
        } else if (input == "eat out") {
            fastFoodOrSitDown()
        }
    } else if (questionOut.innerText == question[1]) {
        if (input == "fast food") {
            fastFood()
        }
        else if (input == "sit down") {
            sitDown()
        }
    } else if (questionOut.innerText == question[2]) {
        if (input == "Olive garden") {
            output.classList.remove('hide')
            questionContainer.classList.add('hide')
            output.innerText = "Ok get your bra on!"
        } else if (input == "Froggers") {
            output.classList.remove('hide')
            questionContainer.classList.add('hide')
            output.innerText = "Ok get your bra on!"
        } else if (input == "Kobe's") {
            output.classList.remove('hide')
            questionContainer.classList.add('hide')
            output.innerText = "Ok get your bra on!"
        } else if (input == "Ale house") {
            output.classList.remove('hide')
            questionContainer.classList.add('hide')
            output.innerText = "Ok get your bra on!"
        } else if (input == "Gators") {
            output.classList.remove('hide')
            questionContainer.classList.add('hide')
            output.innerText = "Ok get your bra on!"
        }
    } else if (questionOut.innerText = question[3]) {
        if (input == "Mcdonalds") {
            output.classList.remove('hide')
            questionContainer.classList.add('hide')
            output.innerText = "I'll drive!"

        } else if (input == "Checkers") {
            output.classList.remove('hide')
            questionContainer.classList.add('hide')
            output.innerText = "I'll drive!"

        } else if (input == "Wendys") {
            output.classList.remove('hide')
            questionContainer.classList.add('hide')
            output.innerText = "I'll drive!"
        } else if (input == "Popeyes") {
            output.classList.remove('hide')
            questionContainer.classList.add('hide')
            output.innerText = "I'll drive!"
        } else if (input == "Tacobell") {
            output.classList.remove('hide')
            questionContainer.classList.add('hide')
            output.innerText = "I'll drive!"
        } else if (input == "Chickafila") {
            output.classList.remove('hide')
            questionContainer.classList.add('hide')
            output.innerText = "I'll drive!"
        }

    }

    console.log("submit");
    console.log(input);
    console.log(questionOut.innerText);


}
function resetvalues() {
    output.innerText = ""


}


const question = [
    "Do you want to cook or eat out?",
    "Fast food or sit down restaurant?",
    "We have a few restaurants to choose from Olive Garden, Froggers, Kobe's, Ale house,Gators",
    "food restaurants McDonalds, Checkers, Wendys, Popeyes, Tacobell, Chickfila "


]
function fastFoodOrSitDown() {

    questionOut.innerText = (question[1])
    resetInput.reset()
}
function sitDown() {
    questionOut.classList.remove('hide')
    questionOut.innerText = (question[2])
    resetInput.reset()
}
function fastFood() {

    questionOut.innerText = (question[3])
    resetInput.reset()
}





function cookOrEatOut() {
    quizContainer.classList.add('hide')
    output.classList.add('hide')
    questionContainer.classList.remove('hide')
    console.log("start");
    questionOut.innerText = (question[0])
    resetInput.reset()
}












// next to is figure out how to output question
