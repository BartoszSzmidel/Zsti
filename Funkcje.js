/*function circleArea(promien) {
    return Math.PI * Math.pow(promien, 2)
}

const promien = parseInt(prompt("Podaj promień koła: "))

document.write("Pole koła wynosi: ", circleArea(promien))


function rectangleArea(a = 1, b = 1) {
    return a * b
}

let a = parseInt(prompt("Podaj bok a prostokąta: "))
let b = parseInt(prompt("Podaj bok b prostokąta "))

document.write(`<p>Pole prostokąta o bokach: ${a} i ${b} wynosi: ${rectangleArea(a, b)} <p>`)
*/
function generateRandom(min = 1, max = 20) {
    let i = 0
    let randomNumbers = []
    while (i < 10) {
            let randomnumber = Math.floor(Math.random()*(max-min+1)+min)
            randomNumbers.push(randomnumber)
            i ++
    }
    
    let control = 0
    let j = 0
    while (j < 10) {
        if (randomNumbers[j] < 10) {
            control ++
        }
        j ++
    }
    document.write("<p>Wylosowane liczby to: ", randomNumbers, "</p>")
    
    if (control => 5) {
        document.write("<p>Udało się</p>")
    }
    else {
        document.write("<p>niestety nie</p>")
    }
}

generateRandom()


