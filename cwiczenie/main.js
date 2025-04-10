const P1 = document.querySelector('main p:first-child')
const P2 = document.querySelector('main p:nth-child(2)')
const P3 = document.querySelector('main p:last-child')
const PrzyciskZmianaKolorow = document.querySelector('.ZmianaKolorow')
const KolorDlaCzcionki = document.querySelector('#Kolordozmiany')
const PrzyciskZmianaTekstu = document.querySelector('#ZmieńTekst')
const TekstDoZmiany = document.querySelector('#ZmianaTekstuPierwszegoAkapitu')



function ZmianaKoloruWszystkiego(kolor) {
    P1.style.color = kolor
    P2.style.color = kolor
    P3.style.color = kolor
}

function ZmianaTresciPierwszegoAkapitu(tekst) {
    P1.textContent = tekst
}

PrzyciskZmianaKolorow.addEventListener('click', function(){
    ZmianaKoloruWszystkiego(KolorDlaCzcionki.value)
})

PrzyciskZmianaTekstu.addEventListener('click', function(){
    ZmianaTresciPierwszegoAkapitu(TekstDoZmiany.value)
})