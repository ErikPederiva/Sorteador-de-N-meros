    


let raffleButton = document.querySelector("#raffle-button")
let resultNumber = document.querySelector(".result-number")
let resultDisplay = document.querySelector(".result-display")

let detectInputMin = document.querySelector("#input-min")
let detectInputMax = document.querySelector("#input-max")

detectInputMin, detectInputMax.addEventListener("keyup", enableButton)
function enableButton() {
    raffleButton.disabled = false
}


raffleButton.addEventListener("click", raffle)
function raffle() {

    let min = Math.ceil(document.querySelector("#input-min").value)
    let max = Math.floor(document.querySelector("#input-max").value)

    if (min < max ){
        let result = Math.floor(Math.random() * (max - min + 1)) + min

        resultDisplay.style.display = "block"
        resultNumber.innerHTML = result
    }

    else {
        alert("O valor mínimo não pode ser maior que o valor máximo")
    }

}

function noContent() {

    resultDisplay.style.display = "none"
}