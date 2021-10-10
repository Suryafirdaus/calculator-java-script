const calculatorScrean = document.querySelector('.calculator-screen')
const updateScrean = (number) => {
    calculatorScrean.value = number
}

const numbers= document.querySelectorAll(".number")
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScrean(currentNumber)
    })
})

let prevNumber = ' '
let calculationOperator = ' '
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

const inputOperator = (operator) => {
    if (currentNumber === '0') {
    } else {
        currentNumber += number
    }
}
const equalSign = document.querySelector('.equal-sign')

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat (prevNumber) + parseFloat (currentNumber)
            break
        case "-":
            result = parseFloat (prevNumber) - parseFloat (currentNumber)
            break
        case "*":
            result = parseFloat (prevNumber) * parseFloat (currentNumber)
            break
        case "/":
            result = parseFloat (prevNumber) / parseFloat (currentNumber)
            break
        default:
            return

    }
    currentNumber = result
    calculationOperator = ' '
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScrean(currentNumber)
})

const calculate = () =>{
    let result = ''
    switch(calculationOperator) {
        case '+':
            result = parseInt(prevNumber) + parseInt(currentNumber)
            break
    }
}

const clearBtn.addEventListener('click', () => {

})

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScrean(currentNumber)
})

const decimal = document.addEventListener('click', (event) => {

})

inputDecimal = (dot) => {
    currentNumber += dot
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})