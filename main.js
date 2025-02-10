function HelloWorld() {
    document.write('Hello World!')
}

HelloWorld()

function WriteWithCustomNameAndWelcoming(Welcoming='witaj', UserName='uzytkowniku'){
    const text = `<p>${Welcoming} ${UserName}</p>`
    return (text)
}

function ToSamozPromptami(){
    let powitanie=prompt('Wpisz powitanie')
    let imie=prompt('Wpisz imie')
    const text=`<p>${powitanie} ${imie}</p>`
    return (text)
}


//document.write(WriteWithCustomNameAndWelcoming(prompt('Powitanie'), prompt('Imie')))
//document.write(ToSamozPromptami())

function poleTrapezu(){
    const pierwszaPodstawa = parseFloat(prompt('Podaj długość pierwszej podstawy trapezu'))
    const drugaPodstawa = parseFloat(prompt('Podaj długość drugiej podstawy trapezu'))
    const wysokosc = parseFloat(prompt('Podaj długość wysokości trapezu'))

    document.write('<p>', ((pierwszaPodstawa + drugaPodstawa) * wysokosc) / 2, '</p>')
}

poleTrapezu()
