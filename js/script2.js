import { AlertError }from './alert-error.js'
import { Modal } from './modal.js'
import { calculateIMC, notNumber } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// 3 maneiras de criar e atribuir função a um evento:
// form.onsubmit = function () {}

// function handleSubmit() {}
// form.onsubmit = handleSubmit

form.onsubmit = (event) => {
    event.preventDefault()
    
    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

    if ( weightOrHeightIsNotANumber) {
        AlertError.open()
        return;
    }
    
    AlertError.close()
    const result = calculateIMC(weight, height)
    
    displayResultMessage(result)
}

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()


function displayResultMessage(result) {
    Modal.message.innerText = result
    Modal.open()   
}