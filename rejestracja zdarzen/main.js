const mainTitle = document.querySelector('h1')
const przycisk = document.querySelector('button')
const changeColorInp = document.querySelector('#changeColorInp')
const changeTextInp = document.querySelector('#changeTextInp')
const changeFontSize = document.querySelector('#changeFontSize')

function changeColor(kolor){
    mainTitle.style.color=kolor
}

function changeText(tekst){
    mainTitle.textContent = tekst
}


przycisk.addEventListener('click', function(){
    changeColor(changeColorInp.value)
    this.style.backgroundColor = changeColorInp.value
    changeText(changeTextInp.value)
})