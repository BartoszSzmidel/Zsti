// const mainHeader= document.getElementById('mainHeader')
const mainHeader= document.querySelector('#mainHeader')

// const articleTitles= document.getElementsByTagName('h2')

//const articleTitles=document.querySelectorAll('article h2')

//for(let i=0; i<articleTitles.length; i++){
//    console.log(articleTitles[i])
//}

const stopkiartykulow = document.querySelectorAll('.article_footer')
//for(let i=0; i<stopkiartykulow.length; i++){
//    console.log(stopkiartykulow[i])
//}   

//const mainfooter = document.querySelector('footer')
//console.log(mainfooter)

console.log(mainHeader)
mainHeader.innerHTML = '<h1>Mój Blog</h1>'

mainHeader.style.color='#f00'
mainHeader.style.backgroundColor='#ff0'

const articleTitles = document.querySelectorAll('article h2')

for(let i=0; i<articleTitles.length; i++){
    console.log(articleTitles[i])
    articleTitles[i].textContent = `Art. 0${i+1}`
}
for(let i=0; i<stopkiartykulow.length; i++){
    console.log(stopkiartykulow[i])
    stopkiartykulow[i].textContent = `Stopka Art. 0${i+1}`
}
for(let i=0; i<stopkiartykulow.length; i++){
    stopkiartykulow[i].style.color='#00f'
    stopkiartykulow[i].style.backgroundColor='#0ff'
}   
