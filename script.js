const display_cardNumber = document.querySelector(".display-card_number")
const display_cardName = document.querySelector(".display-name")
const display_cardDate = document.querySelector(".display-date")
const display_cvc = document.querySelector(".display-cvc")
const error_cardName = document.querySelector(".cardholder p")
const error_cardNumber = document.querySelector(".card_number p")
const error_date = document.querySelector(".date-cvc .expiry-date p")
const error_cvc = document.querySelector(".date-cvc .cvc p")
const submitBtn = document.querySelector(".submit button")
const input_cardName = document.getElementById("cardholder")
const input_cardNumber = document.getElementById("card_number")
const input_dateMonth = document.getElementById("month")
const input_dateYear = document.getElementById("year")
const input_cvc = document.getElementById("cvc")
const bottom = document.querySelector(".bottom")
const successContainer = document.querySelector(".success-container")
const successBtn = document.querySelector(".success-container button")



input_cardNumber.addEventListener('input', function(event) {
    // Get the input value without spaces
    let inputValue = event.target.value.replace(/\s/g, '');

    // Add spaces every 4 characters
    inputValue = inputValue.replace(/(\d{4})/g, '$1 ');

    // Update the input value
    event.target.value = inputValue;
    
})
const reset = () => {
    display_cardDate.textContent = "00/00"
    display_cardName.textContent = "JANE APPLESEED"
    display_cardNumber.textContent = "0000 0000 0000 0000"
    display_cvc.textContent = "000"
    input_cardName.value = ""
    input_cardNumber.value = ""
    input_dateMonth.value = ""
    input_dateYear.value = ""
    input_cvc.value = ""
}

const resetError = () => {
    error_cardName.textContent = ""
    error_cardNumber.textContent = ""
    error_cvc.textContent = ""
    error_date.textContent = ""
    input_cardNumber.classList.remove("invalid")
    input_cardName.classList.remove("invalid")
    input_dateMonth.classList.remove("invalid")
    input_dateYear.classList.remove("invalid")
    input_cvc.classList.remove("invalid")
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    resetError()
    const nameIsEmpty = input_cardName.value.trim().length === 0
    const cardNumIsEmpty = input_cardNumber.value.trim().length === 0
    const monthIsEmpty = input_dateMonth.value.trim().length === 0
    const yearIsEmpty = input_dateYear.value.trim().length === 0
    const cvcIsEmpty = input_cvc.value.trim().length === 0
    const cardNumIsValid = /^(\d+ )*(\d+)$/.test(input_cardNumber.value.trim()) && input_cardNumber.value.trim().length === 19;

    const monthIsValid = !monthIsEmpty && parseInt(input_dateMonth.value.trim()) >= 1 && parseInt(input_dateMonth.value.trim()) <= 12
    const yearIsValid = !yearIsEmpty && parseInt(input_dateYear.value.trim()) >= 1 && parseInt(input_dateYear.value.trim()) < 100
    const cvcIsValid = !cvcIsEmpty && parseInt(input_cvc.value.trim()) >= 100 && parseInt(input_cvc.value.trim()) < 1000



    if (nameIsEmpty) {
        error_cardName.textContent = "Can't be blank"
        input_cardName.classList.add("invalid")
    }

    if (!cardNumIsValid) {
        error_cardNumber.textContent = "Wrong format, numbers only"
        input_cardNumber.classList.add("invalid")
    }

    if (cardNumIsEmpty) {
        error_cardNumber.textContent = "Can't be blank"
    }

    if (!monthIsValid ) {
        error_date.textContent = "Invalid input value for month"
        input_dateMonth.classList.add("invalid")
    }

    if (!yearIsValid) {
        error_date.textContent = "Invalid input value for year"
        input_dateYear.classList.add("invalid")
    }

    if (monthIsEmpty || yearIsEmpty) {
        error_date.textContent = "Can't be blank"
    }

    if (!cvcIsValid) {
        error_cvc.textContent = "Invalid input value"
        input_cvc.classList.add("invalid")
    }

    if (cvcIsEmpty) {
        error_cvc.textContent = "Can't be blank"
    }
    
    if (nameIsEmpty || !cardNumIsValid || !monthIsValid || !yearIsValid || !cvcIsValid) {
        display_cardName.textContent = "JANE APPLESEED"
        display_cardNumber.textContent = "0000 0000 0000 0000"
        display_cardDate.textContent = "00/00"
        display_cvc.textContent = "000"
        return
    }

    display_cardName.textContent = input_cardName.value.trim()
    display_cardNumber.textContent = input_cardNumber.value
    display_cardDate.textContent = `${input_dateMonth.value}/${input_dateYear.value}`
    display_cvc.textContent = input_cvc.value
    successContainer.classList.remove("hidden")
    bottom.classList.add("hidden")


})

successBtn.addEventListener('click', () => {
    reset()
    successContainer.classList.add("hidden")
    bottom.classList.remove("hidden")

    
})


