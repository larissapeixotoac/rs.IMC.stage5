const btnIMC = document.querySelector('.form-button')
const ImcResult = document.querySelector('.IMC')
const formContent = document.querySelector('.content')
const bg = document.querySelector('main')
const weight = document.querySelector('#weight')
const height = document.querySelector('#height')
const header = document.querySelector('header')
const btnClose = document.querySelector('.close-IMCResult')

let imc = 0

btnIMC.addEventListener('click', calcImc)
btnClose.addEventListener('click', closeWindow)


function calcImc(event) {
    event.preventDefault()

    let wg = Number(weight.value.replace(',', '.'))
    let hg = Number(height.value.replace(',', '.'))


    if( wg + hg >= 1 ) {
        toggleClasses()
        
        imc = (wg / (hg ** 2)).toFixed(0)

        document.querySelector('span').innerText = imc
        
        weight.value = ''
        height.value = ''

    } if ( header.classList.contains('hide')) {      
        header.classList.remove('hide')
        weight.value = ''
        height.value = ''
    } if( imc > 0 ) {
        header.classList.add('hide')
    }    
    else {
        weight.value = ''
        height.value = ''
    }

    imc = 0
}

function toggleClasses () {
    formContent.classList.toggle('result-opacity')
    bg.classList.toggle('result-bg')
    ImcResult.classList.toggle('show-result')
}

function closeWindow(event) {
    event.preventDefault()

    toggleClasses()
}
