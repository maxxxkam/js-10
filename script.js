const btn = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const body = document.querySelector('body')
const img = document.querySelector('.img')
const img2 = document.querySelector('.img2')
const btn4 = document.querySelector('#btn4')

btn1.onclick = () =>{
    btn1.classList.toggle('red')
}

btn2.onclick = () => {
    img.classList.toggle('hidden')
}

btn4.onclick = () =>{
    img.classList.toggle('hidden')
    img2.classList.toggle('hidden')
}

const btn3 = document.querySelector('#btn3')

btn3.onclick = () => {
    const maxWidth = window.innerWidth - btn3.offsetWidth
    const maxHeight = window.innerHeight - btn3.offsetHeight

    const randomX = Math.floor(Math.random() * maxWidth / 2)
    const randomY = Math.floor(Math.random() * maxHeight / 2)
    // console.log(randomX,randomY);

    btn3.style.transform = `translate(${randomX}px , ${randomY}px)`
    
}